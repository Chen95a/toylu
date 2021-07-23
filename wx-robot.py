# 导入模块
import glob
import random
import threading
from time import sleep

from wxpy import *

import zhihu.sync_data as sync_data
import utils.time_utils as time_utils

from auto_reply import reminder
from common import corp_we_chat
from common import web_spider
from dao import resource_dao
from dao import resource_log_dao
from dao import early_check_dao
from jobs import *
from service import resource_service
from service import user_service

logger = logging.getLogger('wx')
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh = logging.FileHandler('wx-robot.log')  # 输出日志到文件
fh.setLevel(logging.DEBUG)
fh.setFormatter(formatter)
logger.addHandler(fh)
sh = logging.StreamHandler()  # 输出日志到终端
sh.setLevel(logging.DEBUG)
sh.setFormatter(formatter)
logger.addHandler(sh)


def login_callback():
    logger.info("robot login!")


def logout_callback():
    logger.info("robot logout!")
    user_kolly.send("robot logout!")


# 初始化机器人，扫码登陆
# bot = Bot(cache_path=True, qr_path="./qrcode.jpg")
bot = Bot(cache_path=True, console_qr=2)
# 启用 puid 属性，并指定 puid 所需的映射数据保存/载入路径
bot.enable_puid('wxpy_puid.pkl')

user_kolly = ensure_one(bot.friends().search('kolly'))
user_dd = ensure_one(bot.friends().search('东东哥'))
user_lanmao = ensure_one(bot.groups().search('蓝猫数据监控'))


# 打印所有收到的消息
@bot.register()
def print_messages(msg):
    logger.info('收到消息：' + msg.text)


# 注册好友请求类消息
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):
    # 自动接受验证信息中包含 'wxpy' 的好友请求
    # 判断好友请求中的验证文本
    # if 'wxpy' in msg.text.lower():
    # 接受好友 (msg.card 为该请求的用户对象)
    new_friend = msg.card.accept()

    # 数据库增加新用户
    user_id = user_service.add_new_user(new_friend.puid, new_friend.nick_name, '', new_friend.sex, new_friend.city)
    logger.info('数据库成功增加新用户：{} {} {} {} {}'.format(user_id, new_friend.puid, new_friend.nick_name, new_friend.sex,
                                                   new_friend.city))

    # 设置好友备注
    remark = new_friend.nick_name + '-' + str(user_id)
    new_friend.set_remark_name(remark)
    logger.info('成功设置好友备注：{}'.format(remark))

    # 向新的好友发送消息
    new_friend.send('哈喽~ 我是你的专属机器人助理小糖 😆')

    user_kolly.send("小糖增加一位新的好友：{}".format(new_friend.nick_name))


# 转发所有群聊@消息给kolly
@bot.register(chats=Group)
def forward_to_kolly(msg):
    # 随机等几秒，避免被风控
    sleep(random.randint(1, 3))
    # 如果是群聊，但没有被@，则不回复
    if isinstance(msg.chat, Group) and not msg.is_at:
        return
    elif msg.sender.name == '内测' or msg.sender.name == '「蓝猫」早起俱乐部':
        logger.info('收到群聊「{}」「{}」的消息：{}'.format(msg.sender.name, msg.member.name, msg.text))
        if '#早起打卡' in msg.text:
            current_date = time_utils.get_today_date()
            current_time = time_utils.get_current_time()

            if current_time < '05:00' or current_time > '06:45':
                return '「' + msg.member.name + '」，请在早上 05:00 到 06:45 之间打卡~'

            if len(early_check_dao.query_early_check_rows_by_user_name_and_date(msg.member.name,
                                                                                time_utils.get_today_date())) > 0:
                sum = len(early_check_dao.query_early_check_rows_by_user_name(msg.member.name))
                return '「' + msg.member.name + '」，你今天打卡过了~ 当前打卡进度' + str(sum) + '/30'

            early_check_dao.add_early_check(msg.member.name, current_date, current_time)

            sum = len(early_check_dao.query_early_check_rows_by_user_name(msg.member.name))

            return '恭喜「' + msg.member.name + '」早起打卡成功，当前打卡进度' + str(sum) + '/30，继续努力哦~'
        else:
            return '不识别的指令'
    else:
        logger.info('收到群聊「{}」「{}」的消息：{}'.format(msg.sender.name, msg.member.name, msg.text))
        msg.forward(user_kolly, prefix='群聊「' + msg.sender.name + '」的「' + msg.member.name + '」发送内容:')


# 自动回复
@bot.register(chats=User)
def auto_reply(msg):
    logger.info('收到好友「{}」消息：{}'.format(msg.sender.name, msg.text))
    t = threading.Thread(target=send_corp_wechat, args=('收到好友「{}」消息：{}'.format(msg.sender.name, msg.text),))
    t.start()

    # 随机等几秒，避免被风控
    sleep(random.randint(1, 2))

    if msg.sender.name == '东东哥-10':
        if msg.text == '客户排名':
            return sync_data.query_article_rank(100)
        else:
            return

    if msg.sender.name != 'kolly🤔-1':
        return

    if '1' == msg.text:  # 查佣金
        return sync_data.query_today_earnings()

    if '2' == msg.text:  # 查文章排名
        return sync_data.query_article_rank(11)

    if msg.text == '客户排名':
        return sync_data.query_article_rank(100)

    if '天气' == msg.text:
        return web_spider.get_weather_today("shenzhen")
    elif '大盘' == msg.text:
        return web_spider.get_zs_today()
    elif '我的基金' == msg.text:
        return web_spider.get_zs_today() + '\n' + web_spider.get_jj_today("501301,161721,007028,110003,090010")
    elif '周刊' == msg.text:
        return web_spider.get_ryf_weekly()
    elif '篮球' == msg.text:
        return "https://sports.qq.com/kbsweb/kbsshare/gamelist.htm#nav-nba"
    elif '热榜' == msg.text:
        return "https://tophub.today/"
    elif msg.text.endswith('表情包'):
        limit = 3
        images = []
        path = '/Users/kolly/Downloads/emoji'

        if msg.text == '表情包':
            for image in random.sample(glob.glob(path + '/*.*'), limit):
                msg.reply_image(image)
                sleep(1)
            return '表情库共有' + str(len(glob.glob(path + '/*.*'))) + '个表情包，随机返回' \
                   + str(limit) + '个，如果需要搜索指定表情包可以输入「关键字 + 表情包」噢，比如熊猫头表情包'

        for name in glob.glob(path + '/*' + msg.text[0:-3] + '*.*'):
            images.append(name)

        if len(images) == 0:
            return '没有找个你想要的表情包噢，可以试着换一个关键词查询'
        elif len(images) <= limit:
            for img in images:
                msg.reply_image(img)
                sleep(1)
            return '一共找到' + str(len(images)) + '个符合的表情包'
        else:
            slice = random.sample(images, limit)  # 从 images 随机获取 limit 个元素，作为一个片断返回
            for img in slice:
                msg.reply_image(img)
                sleep(1)
            return '一共找到' + str(len(images)) + '个符合的表情包，随机返回' + str(limit) + '个，再次查询可以随机返回其他表情'
    elif '赞赏' == msg.text:
        image = './image/donate.png'
        msg.reply_image(image)
        return "如果帮到你，请帮小糖充下电吧"
    elif '定制' == msg.text:
        image = './image/author.jpg'
        msg.reply_image(image)
        return "请联系作者添加你想要的定制功能吧"
    elif 'test' == msg.text:
        # msg.sender.set_remark_name('test remark')
        return
    elif '资源类型' == msg.text:
        return '资源类型 1-搞笑段子 2-经典语录'
    elif msg.text.startswith('上传资源'):
        type = msg.text[4:5]
        content = msg.text[6:]
        resource_dao.add_resource(type, content)
        return content
    elif '段子' == msg.text:
        res = resource_service.get_new_resource(1, 1)  # user_id 暂时写死
        resource_log_dao.add_resource_log(1, res.id, res.type)  # user_id 暂时写死
        return res.content
    else:
        return ""


def send_corp_wechat(msg):
    corp_we_chat.WeChat().send_message(msg)


# 程序启动时，发送企业微信消息
send_corp_wechat('小糖已启动！')

logger.info('====== Server Start ======')

# 启动定时任务
init_scheduler(bot)

# 打印信息
logger.info(bot)
logger.info(bot.friends())
logger.info(bot.registered)

# 进入 Python 命令行、让程序保持运行
# embed()
bot.join()

# 程序退出时，发送企业微信消息
logger.info("小糖已退出登录！")
send_corp_wechat('小糖已退出登录！')

sys.exit()

from common import zhihu_spider
from dao import zh_question_dao
from dao import zh_answer_dao
from utils import *

new_day_hour = "00"


# 更新知乎问题的阅读量
def update_zhihu_question():
    current_date = get_current_date()  # 今天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    question_list = zh_question_dao.query_question_list()
    for question in question_list:
        # 更新问题的数据（浏览量、点赞数、新增浏览数）
        title, view_num, answer_num = zhihu_spider.get_view_and_answer_num(question.qid)

        # 如果是新的一天，更新问题数据到历史记录，更新问题的截止昨日阅读数和回答数
        if is_new_day:
            zh_question_dao.add_question_history(question.qid, current_date, view_num, answer_num)
            zh_question_dao.update_question_yestoday(question.qid, view_num, answer_num)

        # 更新浏览量、点赞数
        zh_question_dao.update_question(question.qid, title, view_num, answer_num)


# 更新知乎回答的排名和点赞数
def update_zhihu_answer():
    current_date = get_current_date()  # 今天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    answer_list = zh_answer_dao.query_answer_list()
    for answer in answer_list:
        # 爬取知乎问题的答案排名
        rank, like = zhihu_spider.get_rank_and_like(answer.qid, answer.aid)

        # 如果是新的一天，更新回答数据到历史记录，更新回答昨日点赞数和排名
        if is_new_day:
            zh_answer_dao.add_answer_history(answer.qid, answer.aid, current_date, like, rank)
            zh_answer_dao.update_answer_yestoday(answer.aid, like, rank)

        # 更新点赞数、排名
        zh_answer_dao.update_answer(answer.aid, like, rank)


if __name__ == '__main__':
    update_zhihu_question()
    update_zhihu_answer()

/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/5 0-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改


脚本需要 node-rsa 依赖库,自行进依赖管理里面添加,不会就自行使用 ssh 安装 命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

*/


const $ = new Env('【电玩世界】版本:22/03/02_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodn='jsjiami.com.v6',_0xodn_=['_0xodn'],_0x336a=[_0xodn,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x7d','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u6ca1\u6709\x20\x72\x65\x77\x61\x72\x64\x5f\x64\x61\x74\x61\x20\u53d8\u91cf\x2c\u65e0\u6cd5\u64cd\u4f5c','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x6a\x5a\x51\x66\x73\x6a\x42\x43\x69\x61\x6d\x4f\x41\x69\x54\x49\x55\x2e\x49\x63\x42\x48\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x2ca4(_0x2da817,_0x693449){_0x2da817=~~'0x'['concat'](_0x2da817['slice'](0x0));var _0x27a26f=_0x336a[_0x2da817];return _0x27a26f;};(function(_0x4562a8,_0x1e8581){var _0x4677e9=0x0;for(_0x1e8581=_0x4562a8['shift'](_0x4677e9>>0x2);_0x1e8581&&_0x1e8581!==(_0x4562a8['pop'](_0x4677e9>>0x3)+'')['replace'](/[ZQfBCOATIUIBH=]/g,'');_0x4677e9++){_0x4677e9=_0x4677e9^0xd481c;}}(_0x336a,_0x2ca4));const RSA_js=$[_0x2ca4('0')]()?require(_0x2ca4('1')):'';const fs=$[_0x2ca4('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x2ca4('0')]()?require(_0x2ca4('2')):'';!(async()=>{console[_0x2ca4('3')](_0x2ca4('4')+new Date(new Date()[_0x2ca4('5')]()+new Date()[_0x2ca4('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2ca4('7')]()+_0x2ca4('8'));if(dwsj_variable[_0x2ca4('9')]!==0xc8){console[_0x2ca4('3')](_0x2ca4('a'));return;}console[_0x2ca4('3')](_0x2ca4('b')+dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][_0x2ca4('e')]+_0x2ca4('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][_0x2ca4('e')];i++){current=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i];video_data=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('10')];user_ID=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('11')];main_user_ID=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][0x0][_0x2ca4('11')];dwsj_token=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('12')];dwsj_UA=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('13')];dwsj_signtime=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('14')];dwsj_UPbuild=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('15')];dwsj_transfer=dwsj_variable[_0x2ca4('c')][_0x2ca4('d')][i][_0x2ca4('16')];notice=dwsj_variable[_0x2ca4('c')][_0x2ca4('17')][0x0][_0x2ca4('18')];if(!dwsj_UA){dwsj_UA=_0x2ca4('19');}$[_0x2ca4('1a')]=i+0x1;console[_0x2ca4('3')](_0x2ca4('1b')+$[_0x2ca4('1a')]+_0x2ca4('1c'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x2ca4('1d')]($[_0x2ca4('1e')],subTitle);}}}})()[_0x2ca4('1f')](_0x423e3b=>$[_0x2ca4('20')](_0x423e3b))[_0x2ca4('21')](()=>$[_0x2ca4('22')]());async function implement(){let _0x56bed2=new Date()[_0x2ca4('23')]();let _0x2e711e=new Date()[_0x2ca4('24')]();if(_0x56bed2==dwsj_signtime&&_0x2e711e<0xf){await getAdReward(_0x2ca4('25'));}await rollPoint();await getAdReward(_0x2ca4('26'));await getRankByType();await getMyInfo();}function rollPoint(){let _0x5d07a3=RSA_encryption(_0x2ca4('27')+user_ID+_0x2ca4('28'));let _0x384b84=Post_request(_0x2ca4('29'),_0x5d07a3);return new Promise((_0x299413,_0x2392a7)=>{$[_0x2ca4('2a')](_0x384b84,async(_0x20fe41,_0x5b2ad7,_0x4bd94d)=>{try{if(_0x20fe41){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('2c'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('2c');console[_0x2ca4('3')](_0x20fe41+'\x0a');}else{let _0x504bd0=JSON[_0x2ca4('2d')](_0x4bd94d);if(_0x504bd0[_0x2ca4('9')]==0x1){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('2e')+_0x504bd0[_0x2ca4('2f')][_0x2ca4('30')][_0x2ca4('31')]+_0x2ca4('32'));await addGoodsBuff();await $[_0x2ca4('33')](Math[_0x2ca4('34')](Math[_0x2ca4('35')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x504bd0[_0x2ca4('9')]==0x515||_0x504bd0[_0x2ca4('36')]==_0x2ca4('37')){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('38')+_0x504bd0[_0x2ca4('36')]);await getAdReward(_0x2ca4('39'));}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('38')+_0x504bd0[_0x2ca4('36')]);}}}catch(_0x1383ea){console[_0x2ca4('3')](_0x1383ea,_0x5b2ad7);}finally{_0x299413();}});});}function addNewBuilding(){let _0x48a980=RSA_encryption(_0x2ca4('27')+user_ID+'\x7d');let _0x4b536f=Post_request(_0x2ca4('3a'),_0x48a980);return new Promise((_0x482f48,_0x59dfca)=>{$[_0x2ca4('2a')](_0x4b536f,async(_0x40e013,_0x2eff2a,_0x3d06bc)=>{try{if(_0x40e013){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('3b'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('3b');}else{let _0x3fc4cd=JSON[_0x2ca4('2d')](_0x3d06bc);if(_0x3fc4cd[_0x2ca4('9')]==0x1){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('3c')+_0x3fc4cd[_0x2ca4('2f')][_0x2ca4('3d')][_0x2ca4('3e')][_0x2ca4('3f')]+_0x2ca4('32'));}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('40')+_0x3fc4cd[_0x2ca4('36')]);}}}catch(_0x268208){console[_0x2ca4('3')](_0x268208,_0x2eff2a);}finally{_0x482f48();}});});}function getBuildingEarn(){let _0x202456=RSA_encryption(_0x2ca4('27')+user_ID+'\x7d');let _0x273450=Post_request(_0x2ca4('41'),_0x202456);return new Promise((_0x4859c7,_0x57f9df)=>{$[_0x2ca4('2a')](_0x273450,async(_0xecd6ca,_0x5baee7,_0x2e1e28)=>{try{if(_0xecd6ca){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('42'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('42');}else{let _0x38fa88=JSON[_0x2ca4('2d')](_0x2e1e28);if(_0x38fa88[_0x2ca4('9')]==0x1){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('43')+_0x38fa88[_0x2ca4('2f')][_0x2ca4('3d')][_0x2ca4('3e')][_0x2ca4('3f')]+_0x2ca4('32'));}else if(_0x38fa88[_0x2ca4('9')]==0x4bf||_0x38fa88[_0x2ca4('36')]==_0x2ca4('44')){if(dwsj_build){await addNewBuilding();}}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('45')+_0x38fa88[_0x2ca4('36')]);}}}catch(_0x5f534b){console[_0x2ca4('3')](_0x5f534b,_0x5baee7);}finally{_0x4859c7();}});});}function buildingLevelUp(){let _0x47b5f9=RSA_encryption(_0x2ca4('27')+user_ID+'\x7d');let _0x2b0f36=Post_request(_0x2ca4('46'),_0x47b5f9);return new Promise((_0xd68f5e,_0x1f7c3f)=>{$[_0x2ca4('2a')](_0x2b0f36,async(_0x206fb8,_0x326730,_0x337aba)=>{try{if(_0x206fb8){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('47'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('47');}else{let _0x3c8399=JSON[_0x2ca4('2d')](_0x337aba);if(_0x3c8399[_0x2ca4('9')]==0x1){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('48')+_0x3c8399[_0x2ca4('2f')][_0x2ca4('3d')][_0x2ca4('3e')][_0x2ca4('3f')]+_0x2ca4('32'));}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('49')+_0x3c8399[_0x2ca4('36')]);}}}catch(_0x52bf7a){console[_0x2ca4('3')](_0x52bf7a,_0x326730);}finally{_0xd68f5e();}});});}function addGoodsBuff(){let _0x6c9086=RSA_encryption(_0x2ca4('27')+user_ID+_0x2ca4('4a'));let _0x42182c=Post_request(_0x2ca4('4b'),_0x6c9086);return new Promise((_0x185b72,_0x409a33)=>{$[_0x2ca4('2a')](_0x42182c,async(_0x12ced5,_0x48df5d,_0x54563b)=>{try{if(_0x12ced5){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('4c'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('4c');}else{}}catch(_0x44fc8c){console[_0x2ca4('3')](_0x44fc8c,_0x48df5d);}finally{_0x185b72();}});});}function getRankByType(){let _0x2d54e7=[_0x2ca4('3f'),_0x2ca4('4d'),_0x2ca4('4d')];let _0x25b65c='';let _0x562ccd=_0x2d54e7[Math[_0x2ca4('34')](Math[_0x2ca4('35')]()*_0x2d54e7[_0x2ca4('e')])];if(_0x562ccd==_0x2ca4('3f')){_0x25b65c='\u91d1\u5e01';}else if(_0x562ccd==_0x2ca4('4d')){_0x25b65c='\u58f0\u671b';}if(_0x562ccd==_0x2ca4('4d')){_0x25b65c='\u6536\u76ca';}let _0x3cf5a8=RSA_encryption(_0x2ca4('4e')+_0x562ccd+_0x2ca4('4f')+user_ID+_0x2ca4('50'));let _0x4a5ffd=Post_request(_0x2ca4('51'),_0x3cf5a8);return new Promise((_0xaa4816,_0x4dc9e3)=>{$[_0x2ca4('2a')](_0x4a5ffd,async(_0x66b94b,_0x1b8cda,_0x44a452)=>{try{if(_0x66b94b){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x25b65c+_0x2ca4('52'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x25b65c+_0x2ca4('52');console[_0x2ca4('3')](_0x66b94b+'\x0a');}else{let _0x2d0f34=JSON[_0x2ca4('2d')](_0x44a452);if(_0x2d0f34[_0x2ca4('9')]==0x1){let _0x48efa4=['\x30','\x31','\x32','\x33','\x34'];let _0x25f389=_0x48efa4[Math[_0x2ca4('34')](Math[_0x2ca4('35')]()*_0x2d54e7[_0x2ca4('e')])];let _0x370fd0=_0x2d0f34[_0x2ca4('2f')][_0x2ca4('53')][_0x25f389][_0x2ca4('54')];await getAdReward(_0x2ca4('55'),_0x370fd0);}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x25b65c+_0x2ca4('56')+_0x2d0f34[_0x2ca4('36')]);}}}catch(_0x507d6d){console[_0x2ca4('3')](_0x507d6d,_0x1b8cda);}finally{_0xaa4816();}});});}function getUserWalletPage(){let _0x500b8f=RSA_encryption(_0x2ca4('27')+user_ID+'\x7d');let _0x3dedce=Post_request(_0x2ca4('57'),_0x500b8f);return new Promise((_0x5ad945,_0x23b9a9)=>{$[_0x2ca4('2a')](_0x3dedce,async(_0x5437f3,_0xe59c5e,_0x74ffab)=>{try{if(_0x5437f3){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('4c'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('4c');}else{console[_0x2ca4('3')](_0x74ffab);}}catch(_0x206aad){console[_0x2ca4('3')](_0x206aad,_0xe59c5e);}finally{_0x5ad945();}});});}function getMyInfo(){let _0x471a76=RSA_encryption(_0x2ca4('27')+user_ID+'\x7d');let _0x43ffcb=Post_request(_0x2ca4('58'),_0x471a76);return new Promise((_0x3bea7f,_0x541901)=>{$[_0x2ca4('2a')](_0x43ffcb,async(_0x1f01d3,_0xdf9849,_0x47f089)=>{try{if(_0x1f01d3){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('59'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('59');}else{let _0x525aee=JSON[_0x2ca4('2d')](_0x47f089);if(_0x525aee[_0x2ca4('9')]==0x1){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('5a')+_0x525aee[_0x2ca4('2f')][_0x2ca4('5b')][_0x2ca4('54')]+_0x2ca4('5c')+_0x525aee[_0x2ca4('2f')][_0x2ca4('5d')][_0x2ca4('5e')]+_0x2ca4('5f')+_0x525aee[_0x2ca4('2f')][_0x2ca4('60')][_0x2ca4('61')]+_0x2ca4('62')+_0x525aee[_0x2ca4('2f')][_0x2ca4('60')][_0x2ca4('4d')]+_0x2ca4('63')+_0x525aee[_0x2ca4('2f')][_0x2ca4('60')][_0x2ca4('64')]+_0x2ca4('65')+_0x525aee[_0x2ca4('2f')][_0x2ca4('66')][_0x2ca4('67')]+_0x2ca4('68')+_0x525aee[_0x2ca4('2f')][_0x2ca4('60')][_0x2ca4('3f')]+_0x2ca4('69')+_0x525aee[_0x2ca4('2f')][_0x2ca4('60')][_0x2ca4('6a')]);}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('6b')+_0x525aee[_0x2ca4('36')]);}}}catch(_0x3cd08a){console[_0x2ca4('3')](_0x3cd08a,_0xdf9849);}finally{_0x3bea7f();}});});}function getAdReward(_0x2e5fa5,_0x33c231){let _0x3f1905='';let _0x5ee34e='';if(_0x2e5fa5==_0x2ca4('25')){_0x3f1905=RSA_encryption(_0x2ca4('27')+user_ID+_0x2ca4('6c'));_0x5ee34e='\u7b7e\u5230';}else if(_0x2e5fa5==_0x2ca4('26')){_0x3f1905=RSA_encryption(_0x2ca4('27')+user_ID+_0x2ca4('6d'));_0x5ee34e='\u52a0\u901f';}else if(_0x2e5fa5==_0x2ca4('39')){_0x3f1905=RSA_encryption(_0x2ca4('27')+user_ID+_0x2ca4('6e'));_0x5ee34e=_0x2ca4('6f');}else if(_0x2e5fa5==_0x2ca4('55')){_0x3f1905=RSA_encryption(_0x2ca4('70')+_0x33c231+_0x2ca4('71')+user_ID+_0x2ca4('50'));_0x5ee34e='\u819c\u62dc';}let _0x4abb0e=Post_request(_0x2ca4('72'),_0x3f1905);return new Promise((_0x34c991,_0x2d1b3f)=>{$[_0x2ca4('2a')](_0x4abb0e,async(_0x5f1691,_0x45fb4e,_0x15a5e5)=>{try{if(_0x5f1691){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('73')+_0x5ee34e+_0x2ca4('74'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('73')+_0x5ee34e+_0x2ca4('74');console[_0x2ca4('3')](_0x5f1691+'\x0a');}else{let _0x1a6e5b=JSON[_0x2ca4('2d')](_0x15a5e5);if(_0x1a6e5b[_0x2ca4('9')]==0x1){if(_0x2e5fa5==_0x2ca4('25')){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x5ee34e+_0x2ca4('75')+_0x1a6e5b[_0x2ca4('2f')][_0x2ca4('3d')][_0x2ca4('3e')][_0x2ca4('76')]+_0x2ca4('77')+_0x1a6e5b[_0x2ca4('2f')][_0x2ca4('3d')][_0x2ca4('3e')][_0x2ca4('78')]);}else if(_0x2e5fa5==_0x2ca4('39')){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x5ee34e+_0x2ca4('79'));}else if(_0x2e5fa5==_0x2ca4('26')){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x5ee34e+_0x2ca4('7a'));}else if(_0x2e5fa5==_0x2ca4('55')){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+'\x20'+_0x5ee34e+_0x2ca4('7b'));}}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('73')+_0x5ee34e+_0x2ca4('7c')+_0x1a6e5b[_0x2ca4('36')]);}}}catch(_0x16d09a){console[_0x2ca4('3')](_0x16d09a,_0x45fb4e);}finally{_0x34c991();}});});}function reward_video(_0x3f1d7a){if(!reward_data){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('7d'));}else{let _0x3bdb78=video_data[_0x2ca4('7e')](/[\r\n]/g,'');let _0x5e6329={'\x75\x72\x6c':_0x2ca4('7f'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2ca4('80'),'Content-Type':_0x2ca4('81'),'Content-Length':_0x3bdb78[_0x2ca4('e')],'Accept-Encoding':_0x2ca4('82'),'User-Agent':_0x2ca4('83')},'\x62\x6f\x64\x79':_0x3bdb78};return new Promise((_0x5bb78e,_0x468a22)=>{$[_0x2ca4('2a')](_0x5e6329,async(_0x4c1bef,_0x18d237,_0x292e29)=>{try{if(_0x4c1bef){console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('84'));subTitle+=_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('84');console[_0x2ca4('3')](_0x4c1bef+'\x0a');}else{if(_0x292e29[_0x2ca4('85')](_0x2ca4('86'))>-0x1){let _0x581897=JSON[_0x2ca4('2d')](_0x292e29);if(_0x581897[_0x2ca4('86')]==0x3){await getAdReward(_0x3f1d7a);}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('87'));}}else{let _0x1acab6=JSON[_0x2ca4('2d')](_0x292e29);if(_0x1acab6[_0x2ca4('9')]==0xea67){await getAdReward(_0x3f1d7a);}else{console[_0x2ca4('3')](_0x2ca4('2b')+$[_0x2ca4('1a')]+_0x2ca4('87'));}}}}catch(_0x8034c4){console[_0x2ca4('3')](_0x8034c4,_0x18d237);}finally{_0x5bb78e();}});});}}function Post_request(_0x229bab,_0x2fd571){return{'\x75\x72\x6c':_0x2ca4('88')+_0x229bab,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2ca4('89'),'Connection':_0x2ca4('8a'),'Content-Length':_0x2fd571[_0x2ca4('e')],'Pragma':_0x2ca4('8b'),'Cache-Control':_0x2ca4('8b'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x2ca4('8c'),'Accept':_0x2ca4('8d'),'Origin':_0x2ca4('8e'),'X-Requested-With':_0x2ca4('8f'),'Sec-Fetch-Site':_0x2ca4('90'),'Sec-Fetch-Mode':_0x2ca4('91'),'Sec-Fetch-Dest':_0x2ca4('92'),'Referer':_0x2ca4('93'),'Accept-Encoding':_0x2ca4('94'),'Accept-Language':_0x2ca4('95')},'\x62\x6f\x64\x79':_0x2fd571};};function Get_request(_0x319412){return{'\x75\x72\x6c':_0x2ca4('88')+_0x319412,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2ca4('89'),'Connection':_0x2ca4('8a'),'Content-Length':0x0,'Pragma':_0x2ca4('8b'),'Cache-Control':_0x2ca4('8b'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x2ca4('8c'),'Accept':_0x2ca4('8d'),'Origin':_0x2ca4('8e'),'X-Requested-With':_0x2ca4('8f'),'Sec-Fetch-Site':_0x2ca4('90'),'Sec-Fetch-Mode':_0x2ca4('91'),'Sec-Fetch-Dest':_0x2ca4('92'),'Referer':_0x2ca4('93'),'Accept-Encoding':_0x2ca4('94'),'Accept-Language':_0x2ca4('95')}};};function RSA_encryption(_0x194030){var _0x493f90=new RSA_js();_0x493f90[_0x2ca4('96')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x2ca4('97')});_0x493f90[_0x2ca4('98')](_0x2ca4('99'),_0x2ca4('9a'));var _0x3b841b=_0x493f90[_0x2ca4('9b')](_0x194030,_0x2ca4('9c'));return _0x3b841b;};_0xodn='jsjiami.com.v6';



function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
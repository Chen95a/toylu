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


const $ = new Env('【电玩世界】版本:22/03/04_1');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodU='jsjiami.com.v6',_0xodU_=['_0xodU'],_0x1570=[_0xodU,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x73\x69\x67\x6e','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x76\x69\x65\x77','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\x65\x6e\x64','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x6a\x75\x7a\x6e\x73\x6a\x69\x45\x4f\x67\x56\x54\x61\x4f\x6d\x4e\x7a\x69\x72\x67\x2e\x55\x63\x58\x43\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x3d7e(_0x5128a8,_0x27ad17){_0x5128a8=~~'0x'['concat'](_0x5128a8['slice'](0x0));var _0xddd8ad=_0x1570[_0x5128a8];return _0xddd8ad;};(function(_0x2e9a9a,_0x45bf41){var _0x5d3bf6=0x0;for(_0x45bf41=_0x2e9a9a['shift'](_0x5d3bf6>>0x2);_0x45bf41&&_0x45bf41!==(_0x2e9a9a['pop'](_0x5d3bf6>>0x3)+'')['replace'](/[uznEOgVTONzrgUXC=]/g,'');_0x5d3bf6++){_0x5d3bf6=_0x5d3bf6^0xd5110;}}(_0x1570,_0x3d7e));const RSA_js=$[_0x3d7e('0')]()?require(_0x3d7e('1')):'';const fs=$[_0x3d7e('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x3d7e('0')]()?require(_0x3d7e('2')):'';!(async()=>{console[_0x3d7e('3')](_0x3d7e('4')+new Date(new Date()[_0x3d7e('5')]()+new Date()[_0x3d7e('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3d7e('7')]()+_0x3d7e('8'));if(dwsj_variable[_0x3d7e('9')]!==0xc8){console[_0x3d7e('3')](_0x3d7e('a'));return;}console[_0x3d7e('3')](_0x3d7e('b')+dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][_0x3d7e('e')]+_0x3d7e('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][_0x3d7e('e')];i++){current=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i];video_data=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('10')];user_ID=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('11')];main_user_ID=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][0x0][_0x3d7e('11')];dwsj_token=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('12')];dwsj_UA=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('13')];dwsj_signtime=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('14')];dwsj_UPbuild=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('15')];dwsj_transfer=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('16')];dwsj_Business=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('17')];dwsj_viewnum=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('18')];dwsj_action=dwsj_variable[_0x3d7e('c')][_0x3d7e('d')][i][_0x3d7e('19')];notice=dwsj_variable[_0x3d7e('c')][_0x3d7e('1a')][0x0][_0x3d7e('1b')];update=dwsj_variable[_0x3d7e('c')][_0x3d7e('1a')][0x0][_0x3d7e('1c')];scripturl=dwsj_variable[_0x3d7e('c')][_0x3d7e('1a')][0x0][_0x3d7e('1d')];if(!dwsj_UA){dwsj_UA=_0x3d7e('1e');}$[_0x3d7e('1f')]=i+0x1;console[_0x3d7e('3')](_0x3d7e('20')+$[_0x3d7e('1f')]+_0x3d7e('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x3d7e('22')]($[_0x3d7e('23')],subTitle);}}}})()[_0x3d7e('24')](_0x417477=>$[_0x3d7e('25')](_0x417477))[_0x3d7e('26')](()=>$[_0x3d7e('27')]());async function implement(){await rollPoint();}function rollPoint(){let _0x1b807a=new Date()[_0x3d7e('5')]();let _0xa79088=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('29')+_0x1b807a+'\x7d');let _0x55778e=Post_request(_0x3d7e('2a'),_0xa79088);return new Promise((_0x34e295,_0x3b499a)=>{$[_0x3d7e('2b')](_0x55778e,async(_0x2ac2f1,_0x23af15,_0x26afb9)=>{try{if(_0x2ac2f1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('2d'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('2d');console[_0x3d7e('3')](_0x2ac2f1+'\x0a');}else{let _0x30d081=JSON[_0x3d7e('2e')](_0x26afb9);if(_0x30d081[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('2f')+_0x30d081[_0x3d7e('30')][_0x3d7e('31')][_0x3d7e('32')]+_0x3d7e('33'));await addGoodsBuff();await $[_0x3d7e('34')](Math[_0x3d7e('35')](Math[_0x3d7e('36')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();}else if(_0x30d081[_0x3d7e('9')]==0x515||_0x30d081[_0x3d7e('37')]==_0x3d7e('38')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('39')+_0x30d081[_0x3d7e('37')]);await getAdReward(_0x3d7e('3a'));}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('39')+_0x30d081[_0x3d7e('37')]);}}}catch(_0x592337){console[_0x3d7e('3')](_0x592337,_0x23af15);}finally{_0x34e295();}});});}function addNewBuilding(){let _0x59888a=new Date()[_0x3d7e('5')]();let _0x44e1d9=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('3b')+_0x59888a+'\x7d');let _0xb05795=Post_request(_0x3d7e('3c'),_0x44e1d9);return new Promise((_0x1cbc7f,_0x4542a0)=>{$[_0x3d7e('2b')](_0xb05795,async(_0x3e973a,_0x48b1a1,_0x294156)=>{try{if(_0x3e973a){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('3d'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('3d');}else{let _0x39783a=JSON[_0x3d7e('2e')](_0x294156);if(_0x39783a[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('3e')+_0x39783a[_0x3d7e('30')][_0x3d7e('3f')][_0x3d7e('40')][_0x3d7e('41')]+_0x3d7e('33'));}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('42')+_0x39783a[_0x3d7e('37')]);}}}catch(_0x2fb785){console[_0x3d7e('3')](_0x2fb785,_0x48b1a1);}finally{_0x1cbc7f();}});});}function getBuildingEarn(){let _0x4e128c=new Date()[_0x3d7e('5')]();let _0x30ebea=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('3b')+_0x4e128c+'\x7d');let _0x5e2503=Post_request(_0x3d7e('43'),_0x30ebea);return new Promise((_0x10dae2,_0xe28968)=>{$[_0x3d7e('2b')](_0x5e2503,async(_0x50074a,_0x62d53a,_0x20c9e4)=>{try{if(_0x50074a){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('44'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('44');}else{let _0x3c224d=JSON[_0x3d7e('2e')](_0x20c9e4);if(_0x3c224d[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('45')+_0x3c224d[_0x3d7e('30')][_0x3d7e('3f')][_0x3d7e('40')][_0x3d7e('41')]+_0x3d7e('33'));}else if(_0x3c224d[_0x3d7e('9')]==0x4bf||_0x3c224d[_0x3d7e('37')]==_0x3d7e('46')){if(dwsj_build){await addNewBuilding();}}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('47')+_0x3c224d[_0x3d7e('37')]);}}}catch(_0x2ef6d4){console[_0x3d7e('3')](_0x2ef6d4,_0x62d53a);}finally{_0x10dae2();}});});}function buildingLevelUp(){let _0x294863=new Date()[_0x3d7e('5')]();let _0x250f24=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('3b')+_0x294863+'\x7d');let _0x4a6bc1=Post_request(_0x3d7e('48'),_0x250f24);return new Promise((_0x3d5252,_0x1b0988)=>{$[_0x3d7e('2b')](_0x4a6bc1,async(_0x223e1c,_0x342d65,_0x304db2)=>{try{if(_0x223e1c){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('49'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('49');}else{let _0x5e5970=JSON[_0x3d7e('2e')](_0x304db2);if(_0x5e5970[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('4a')+_0x5e5970[_0x3d7e('30')][_0x3d7e('3f')][_0x3d7e('40')][_0x3d7e('41')]+_0x3d7e('33'));}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('4b')+_0x5e5970[_0x3d7e('37')]);}}}catch(_0x128f70){console[_0x3d7e('3')](_0x128f70,_0x342d65);}finally{_0x3d5252();}});});}function addGoodsBuff(){let _0x382aee=new Date()[_0x3d7e('5')]();let _0x5a8956=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('4c')+_0x382aee+'\x7d');let _0x4083d0=Post_request(_0x3d7e('4d'),_0x5a8956);return new Promise((_0x228672,_0x8b878d)=>{$[_0x3d7e('2b')](_0x4083d0,async(_0x5a63a1,_0x3c1506,_0x748169)=>{try{if(_0x5a63a1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('4e'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('4e');}else{}}catch(_0x223eab){console[_0x3d7e('3')](_0x223eab,_0x3c1506);}finally{_0x228672();}});});}function getRankByType(){let _0x6963b6=[_0x3d7e('41'),_0x3d7e('4f'),_0x3d7e('4f')];let _0x163ada='';let _0x4277aa=_0x6963b6[Math[_0x3d7e('35')](Math[_0x3d7e('36')]()*_0x6963b6[_0x3d7e('e')])];if(_0x4277aa==_0x3d7e('41')){_0x163ada='\u91d1\u5e01';}else if(_0x4277aa==_0x3d7e('4f')){_0x163ada='\u58f0\u671b';}if(_0x4277aa==_0x3d7e('4f')){_0x163ada='\u6536\u76ca';}let _0x4be6b1=new Date()[_0x3d7e('5')]();let _0x3a6da2=RSA_encryption(_0x3d7e('50')+_0x4277aa+_0x3d7e('51')+user_ID+_0x3d7e('52')+_0x4be6b1+'\x7d');let _0x204dbd=Post_request(_0x3d7e('53'),_0x3a6da2);return new Promise((_0x180190,_0x54ef19)=>{$[_0x3d7e('2b')](_0x204dbd,async(_0x39ea27,_0x22b5ca,_0xf2c7b2)=>{try{if(_0x39ea27){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x163ada+_0x3d7e('54'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x163ada+_0x3d7e('54');console[_0x3d7e('3')](_0x39ea27+'\x0a');}else{let _0x5aba00=JSON[_0x3d7e('2e')](_0xf2c7b2);if(_0x5aba00[_0x3d7e('9')]==0x1){let _0x5d98b1=['\x30','\x31','\x32','\x33','\x34'];let _0x3ca229=_0x5d98b1[Math[_0x3d7e('35')](Math[_0x3d7e('36')]()*_0x6963b6[_0x3d7e('e')])];let _0x189e92=_0x5aba00[_0x3d7e('30')][_0x3d7e('55')][_0x3ca229][_0x3d7e('56')];await getAdReward(_0x3d7e('57'),_0x189e92);}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x163ada+_0x3d7e('58')+_0x5aba00[_0x3d7e('37')]);}}}catch(_0x1fa7f9){console[_0x3d7e('3')](_0x1fa7f9,_0x22b5ca);}finally{_0x180190();}});});}function getMyInfo(){let _0x3747ad=new Date()[_0x3d7e('5')]();let _0x1c1fb0=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('3b')+_0x3747ad+'\x7d');let _0x5d90c5=Post_request(_0x3d7e('59'),_0x1c1fb0);return new Promise((_0x12cec4,_0x8c9876)=>{$[_0x3d7e('2b')](_0x5d90c5,async(_0x51a6d4,_0xe0412f,_0x502f62)=>{try{if(_0x51a6d4){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('5a'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('5a');}else{let _0xe819db=JSON[_0x3d7e('2e')](_0x502f62);if(_0xe819db[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('5b')+_0xe819db[_0x3d7e('30')][_0x3d7e('5c')][_0x3d7e('56')]+_0x3d7e('5d')+nick+_0x3d7e('5e')+userCityLevel+_0x3d7e('5f')+_0xe819db[_0x3d7e('30')][_0x3d7e('60')][_0x3d7e('61')]+_0x3d7e('62')+_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('64')]+_0x3d7e('65')+_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('4f')]+_0x3d7e('66')+_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('67')]+_0x3d7e('68')+_0xe819db[_0x3d7e('30')][_0x3d7e('69')][_0x3d7e('6a')]+order+game+red+platform+AD_profit+No_name+_0x3d7e('6b')+_0xe819db[_0x3d7e('30')][_0x3d7e('5c')][_0x3d7e('6c')]+_0x3d7e('6d')+_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('41')]+_0x3d7e('6e')+_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('6f')]);if($[_0x3d7e('1f')]==0x1){main_user_account=_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('6f')];}else{if(dwsj_transfer){if(_0xe819db[_0x3d7e('30')][_0x3d7e('63')][_0x3d7e('41')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('70')+_0xe819db[_0x3d7e('37')]);}}}catch(_0x5921d4){console[_0x3d7e('3')](_0x5921d4,_0xe0412f);}finally{_0x12cec4();}});});}function getShopInfo(){let _0xbb1621=new Date()[_0x3d7e('5')]();let _0x550e9d=RSA_encryption(_0x3d7e('71')+user_ID+_0x3d7e('52')+_0xbb1621+'\x7d');let _0x1f25cd=Post_request(_0x3d7e('72'),_0x550e9d);return new Promise((_0x268e16,_0x35daa2)=>{$[_0x3d7e('2b')](_0x1f25cd,async(_0x5a57be,_0x54fbec,_0x295688)=>{try{nick='';userCityLevel='';if(_0x5a57be){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('73'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('73');}else{let _0x49e14f=JSON[_0x3d7e('2e')](_0x295688);if(_0x49e14f[_0x3d7e('9')]==0x1){nick=_0x49e14f[_0x3d7e('30')][_0x3d7e('74')][_0x3d7e('75')];userCityLevel=_0x49e14f[_0x3d7e('30')][_0x3d7e('74')][_0x3d7e('76')];}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('77')+_0x49e14f[_0x3d7e('37')]);}}}catch(_0x539a61){console[_0x3d7e('3')](_0x539a61,_0x54fbec);}finally{_0x268e16();}});});}function transferMoney(_0x58ab0e){let _0x268af0=new Date()[_0x3d7e('5')]();let _0x3e2fea=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('78')+main_user_account+_0x3d7e('79')+_0x58ab0e+_0x3d7e('3b')+_0x268af0+'\x7d');let _0x2d8859=Post_request(_0x3d7e('7a'),_0x3e2fea);return new Promise((_0x4869e3,_0x2a5878)=>{$[_0x3d7e('2b')](_0x2d8859,async(_0x26ecb8,_0x328566,_0x1e1fff)=>{try{if(_0x26ecb8){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7b'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7b');}else{let _0x1089c=JSON[_0x3d7e('2e')](_0x1e1fff);if(_0x1089c[_0x3d7e('9')]==0x1){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7c')+_0x1089c[_0x3d7e('37')]);}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7c')+_0x1089c[_0x3d7e('37')]);}}}catch(_0x4929fe){console[_0x3d7e('3')](_0x4929fe,_0x328566);}finally{_0x4869e3();}});});}function getUserWallet(){let _0x47e426=new Date()[_0x3d7e('5')]();let _0x30379d=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('7d'));let _0x1ea242=Post_request(_0x3d7e('7e'),_0x30379d);return new Promise((_0x343de9,_0x45d750)=>{$[_0x3d7e('2b')](_0x1ea242,async(_0x5b61b9,_0x1638ed,_0x32728f)=>{try{if(_0x5b61b9){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7f'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('7f');}else{let _0x1865f8=JSON[_0x3d7e('2e')](_0x32728f);if(_0x1865f8[_0x3d7e('9')]==0x1){for(let _0x52fee9 of _0x1865f8[_0x3d7e('30')]){if(_0x52fee9[_0x3d7e('80')]==0x0){platform=_0x3d7e('81')+_0x52fee9[_0x3d7e('23')]+'\uff1a'+_0x52fee9[_0x3d7e('82')];}if(_0x52fee9[_0x3d7e('80')]==0x1){order=_0x3d7e('81')+_0x52fee9[_0x3d7e('23')]+'\uff1a'+_0x52fee9[_0x3d7e('82')];}if(_0x52fee9[_0x3d7e('80')]==0x2){game=_0x3d7e('81')+_0x52fee9[_0x3d7e('23')]+'\uff1a'+_0x52fee9[_0x3d7e('82')];}if(_0x52fee9[_0x3d7e('80')]==0x3){red=_0x3d7e('81')+_0x52fee9[_0x3d7e('23')]+'\uff1a'+_0x52fee9[_0x3d7e('82')];}}}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('83')+_0x1865f8[_0x3d7e('37')]);}}}catch(_0x5dd1f9){console[_0x3d7e('3')](_0x5dd1f9,_0x1638ed);}finally{_0x343de9();}});});}function RevenueDetail(){let _0x3d0390=new Date()[_0x3d7e('5')]();let _0x59698b=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('7d'));let _0x54d803=Post_request(_0x3d7e('84'),_0x59698b);return new Promise((_0x13f03f,_0x4bc028)=>{$[_0x3d7e('2b')](_0x54d803,async(_0x5f6085,_0x3d67ea,_0x389475)=>{try{if(_0x5f6085){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('85'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('85');}else{let _0x2b1f21=JSON[_0x3d7e('2e')](_0x389475);if(_0x2b1f21[_0x3d7e('9')]==0x1){AD_profit=_0x3d7e('86')+_0x2b1f21[_0x3d7e('30')][0x0][_0x3d7e('87')]/0x3e8+_0x3d7e('88');No_name=_0x3d7e('89')+_0x2b1f21[_0x3d7e('30')][0x0][_0x3d7e('8a')]+_0x3d7e('8b')+_0x2b1f21[_0x3d7e('30')][0x0][_0x3d7e('8c')]+_0x3d7e('8d');}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('8e')+_0x2b1f21[_0x3d7e('37')]);}}}catch(_0x159a50){console[_0x3d7e('3')](_0x159a50,_0x3d67ea);}finally{_0x13f03f();}});});}function getAdReward(_0x54c8c5,_0x4c2ce5){let _0x4bd258=new Date()[_0x3d7e('5')]();let _0x1625a1='';let _0x9806c6='';if(_0x54c8c5==_0x3d7e('8f')){_0x1625a1=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('90')+_0x4bd258+'\x7d');_0x9806c6='\u7b7e\u5230';}else if(_0x54c8c5==_0x3d7e('91')){_0x1625a1=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('92')+_0x4bd258+'\x7d');_0x9806c6='\u52a0\u901f';}else if(_0x54c8c5==_0x3d7e('3a')){_0x1625a1=RSA_encryption(_0x3d7e('28')+user_ID+_0x3d7e('93')+_0x4bd258+'\x7d');_0x9806c6=_0x3d7e('94');}else if(_0x54c8c5==_0x3d7e('57')){_0x1625a1=RSA_encryption(_0x3d7e('95')+_0x4c2ce5+_0x3d7e('96')+user_ID+_0x3d7e('52')+_0x4bd258+'\x7d');_0x9806c6='\u819c\u62dc';}let _0x5e47e9=Post_request(_0x3d7e('97'),_0x1625a1);return new Promise((_0x2f17f0,_0x534cff)=>{$[_0x3d7e('2b')](_0x5e47e9,async(_0x3673fe,_0x5b09f3,_0x1c108a)=>{try{if(_0x3673fe){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('98')+_0x9806c6+_0x3d7e('99'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('98')+_0x9806c6+_0x3d7e('99');console[_0x3d7e('3')](_0x3673fe+'\x0a');}else{let _0x5993e4=JSON[_0x3d7e('2e')](_0x1c108a);if(_0x5993e4[_0x3d7e('9')]==0x1){if(_0x54c8c5==_0x3d7e('8f')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x9806c6+_0x3d7e('9a')+_0x5993e4[_0x3d7e('30')][_0x3d7e('3f')][_0x3d7e('40')][_0x3d7e('9b')]+_0x3d7e('9c')+_0x5993e4[_0x3d7e('30')][_0x3d7e('3f')][_0x3d7e('40')][_0x3d7e('6c')]);}else if(_0x54c8c5==_0x3d7e('3a')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x9806c6+_0x3d7e('9d'));}else if(_0x54c8c5==_0x3d7e('91')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x9806c6+_0x3d7e('9e'));}else if(_0x54c8c5==_0x3d7e('57')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+'\x20'+_0x9806c6+_0x3d7e('9f'));}}else if(_0x5993e4[_0x3d7e('9')]==0x76f&&_0x54c8c5==_0x3d7e('91')){await reward_video(_0x3d7e('91'));}else if(_0x5993e4[_0x3d7e('9')]==0x4b8){if(_0x54c8c5==_0x3d7e('91')){await get_variable(_0x3d7e('91'),_0x3d7e('a0'));}if(_0x54c8c5==_0x3d7e('3a')){await get_variable(_0x3d7e('3a'),_0x3d7e('a0'));}}else if(_0x5993e4[_0x3d7e('9')]==0x57f&&_0x54c8c5==_0x3d7e('57')){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('98')+_0x9806c6+_0x3d7e('a1')+_0x5993e4[_0x3d7e('37')]);await get_variable(_0x3d7e('57'),_0x3d7e('a0'));}else if(_0x5993e4[_0x3d7e('9')]==0x76f&&_0x54c8c5==_0x3d7e('91')){await reward_video(_0x3d7e('91'));}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('98')+_0x9806c6+_0x3d7e('a1')+_0x5993e4[_0x3d7e('37')]);}}}catch(_0x3ecae1){console[_0x3d7e('3')](_0x3ecae1,_0x5b09f3);}finally{_0x2f17f0();}});});}function reward_video(_0x47dd25){if(!video_data){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('a2'));}else{let _0x146007=video_data[_0x3d7e('a3')](/[\r\n]/g,'');let _0xbd6f5d={'\x75\x72\x6c':_0x3d7e('a4'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3d7e('a5'),'Content-Type':_0x3d7e('a6'),'Content-Length':_0x146007[_0x3d7e('e')],'Accept-Encoding':_0x3d7e('a7'),'User-Agent':_0x3d7e('a8')},'\x62\x6f\x64\x79':_0x146007};return new Promise((_0x112e50,_0x19575c)=>{$[_0x3d7e('2b')](_0xbd6f5d,async(_0x2999bf,_0x98d138,_0x58a2c7)=>{try{if(_0x2999bf){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('a9'));subTitle+=_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('a9');console[_0x3d7e('3')](_0x2999bf+'\x0a');}else{if(_0x58a2c7[_0x3d7e('aa')](_0x3d7e('ab'))>-0x1){let _0x570103=JSON[_0x3d7e('2e')](_0x58a2c7);if(_0x570103[_0x3d7e('ab')]==0x3){await getAdReward(_0x47dd25);}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('ac'));}}else{let _0x7b49aa=JSON[_0x3d7e('2e')](_0x58a2c7);if(_0x7b49aa[_0x3d7e('9')]==0xea67){await getAdReward(_0x47dd25);}else{console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('ac'));}}}}catch(_0x39ad2d){console[_0x3d7e('3')](_0x39ad2d,_0x98d138);}finally{_0x112e50();}});});}}function upscript(){let _0x5f1fb0={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3d7e('ad'),'User-Agent':_0x3d7e('ae')}};return new Promise((_0x3de7e9,_0x159622)=>{$[_0x3d7e('af')](_0x5f1fb0,async(_0x11c11c,_0x4ed307,_0x323b7b)=>{try{if(_0x11c11c){console[_0x3d7e('3')](_0x3d7e('b0'));subTitle+=_0x3d7e('b0');}else{if(_0x323b7b[_0x3d7e('aa')](_0x3d7e('b1'))>-0x1){if($[_0x3d7e('23')][_0x3d7e('b2')](/版本:(\S*)/)[0x1]!=_0x323b7b[_0x3d7e('b2')](/版本:(\S*)'/)[0x1]){let _0x4b5ddc=__dirname+(_0x3d7e('b3')+$[_0x3d7e('23')][_0x3d7e('b2')](/版本:(\S*)/)[0x1][_0x3d7e('a3')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x3d7e('b4'));fs[_0x3d7e('b5')](_0x4b5ddc,fs[_0x3d7e('b6')](__filename));fs[_0x3d7e('b7')](__filename,_0x323b7b,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x5af500){if(_0x5af500){console[_0x3d7e('3')](_0x5af500);}});}}}}catch(_0x1302ea){console[_0x3d7e('3')](_0x1302ea,_0x4ed307);}finally{_0x3de7e9();}});});}function Post_request(_0x4b9f01,_0x583958,_0x39c4a0){let _0x4b2ceb=_0x3d7e('b8');return{'\x75\x72\x6c':''+_0x4b2ceb+_0x4b9f01,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3d7e('b9'),'Connection':_0x3d7e('ba'),'Content-Length':_0x583958[_0x3d7e('e')],'Pragma':_0x3d7e('bb'),'Cache-Control':_0x3d7e('bb'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x3d7e('bc'),'Accept':_0x3d7e('bd'),'Origin':_0x3d7e('be'),'X-Requested-With':_0x3d7e('bf'),'Sec-Fetch-Site':_0x3d7e('c0'),'Sec-Fetch-Mode':_0x3d7e('c1'),'Sec-Fetch-Dest':_0x3d7e('c2'),'Referer':_0x3d7e('c3'),'Accept-Encoding':_0x3d7e('c4'),'Accept-Language':_0x3d7e('c5')},'\x62\x6f\x64\x79':_0x583958};};function Get_request(_0x218958){let _0x17bcc1=_0x3d7e('b8');return{'\x75\x72\x6c':''+_0x17bcc1+_0x218958,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3d7e('b9'),'Connection':_0x3d7e('ba'),'Content-Length':0x0,'Pragma':_0x3d7e('bb'),'Cache-Control':_0x3d7e('bb'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x3d7e('bc'),'Accept':_0x3d7e('bd'),'Origin':_0x3d7e('be'),'X-Requested-With':_0x3d7e('bf'),'Sec-Fetch-Site':_0x3d7e('c0'),'Sec-Fetch-Mode':_0x3d7e('c1'),'Sec-Fetch-Dest':_0x3d7e('c2'),'Referer':_0x3d7e('c3'),'Accept-Encoding':_0x3d7e('c4'),'Accept-Language':_0x3d7e('c5')}};};function RSA_encryption(_0x5bc776){var _0x1b3c92=new RSA_js();_0x1b3c92[_0x3d7e('c6')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x3d7e('c7')});_0x1b3c92[_0x3d7e('c8')](_0x3d7e('c9'),_0x3d7e('ca'));var _0x178d7c=_0x1b3c92[_0x3d7e('cb')](_0x5bc776,_0x3d7e('cc'));return _0x178d7c;}function get_variable(_0x4c3d91,_0x4926c1){let _0x4d5445=$[_0x3d7e('0')]()?require(_0x3d7e('2')):'';if(!_0x4d5445){console[_0x3d7e('3')](_0x3d7e('2c')+$[_0x3d7e('1f')]+_0x3d7e('cd'));return;}else{_0x4d5445=JSON[_0x3d7e('ce')](_0x4d5445);}let _0x4115e8=JSON[_0x3d7e('ce')](current);let _0x10b7c7=_0x4d5445[_0x3d7e('cf')](0x0,_0x4d5445[_0x3d7e('aa')](_0x4115e8));let _0x80b804=_0x4d5445[_0x3d7e('e')]-_0x10b7c7[_0x3d7e('e')]-_0x4115e8[_0x3d7e('e')];let _0x302917=_0x4d5445[_0x3d7e('cf')](_0x4d5445[_0x3d7e('e')]-_0x80b804,_0x4d5445[_0x3d7e('e')]);let _0x5567e1='';if(_0x4c3d91==_0x3d7e('91')&&_0x4926c1==_0x3d7e('d0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d1'),'\x67\x69'),_0x3d7e('d2'))));}else if(_0x4c3d91==_0x3d7e('57')&&_0x4926c1==_0x3d7e('d0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d3'),'\x67\x69'),_0x3d7e('d4'))));}else if(_0x4c3d91==_0x3d7e('3a')&&_0x4926c1==_0x3d7e('d0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d5'),'\x67\x69'),_0x3d7e('d6'))));}else if(_0x4c3d91==_0x3d7e('91')&&_0x4926c1==_0x3d7e('a0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d1'),'\x67\x69'),_0x3d7e('d2'))));}else if(_0x4c3d91==_0x3d7e('57')&&_0x4926c1==_0x3d7e('a0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d3'),'\x67\x69'),_0x3d7e('d4'))));}else if(_0x4c3d91==_0x3d7e('3a')&&_0x4926c1==_0x3d7e('a0')){_0x5567e1=JSON[_0x3d7e('2e')](JSON[_0x3d7e('ce')](_0x4115e8[_0x3d7e('a3')](new RegExp(_0x3d7e('d5'),'\x67\x69'),_0x3d7e('d6'))));}fs[_0x3d7e('b7')](_0x3d7e('2'),_0x3d7e('d7')+_0x10b7c7+_0x5567e1+_0x302917,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x1c5204){if(_0x1c5204){console[_0x3d7e('3')](_0x1c5204);}});};_0xodU='jsjiami.com.v6';



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
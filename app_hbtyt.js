/*

软件名:红包跳一跳 收益2/天

软件下载地址:https://tool-s.lanzoui.com/im5Efrtdx4b

特别注意:不要提现3元以上的大额  不要提现3元以上的大额   不要提现3元以上的大额

使用条件:先去玩下游戏,达到0.3元提现条件后提现后看到不到帐,到账就可以挂,不到就是黑号/设备

变量填写:

export HBTYT_phead=''

变量值获得办法.抓包,是 过滤host whaleunique.com

随便找条连接,把请求里面的协议头里面 phead 值全部复制天道变量,

(注意,是一个json格式的,如开头部分 {"pversion":6,"xxx":"xxx"} {}这个发货也要的)

脚本默认跑100此红包,需要多自行改 cron 时间 默认提现0.3/0.5/1这个档次

cron 0 8 * * *  ##建议天一次

*/ 


const $ = new Env('红跳一跳');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭
let subTitle = ``
let apptyq = process.env.tyq//是否填邀请，默认true
let apptz = process.env.ts//是否推送，默认true
let apptx=true//默认提现假,需要自行修改变量 RL_tx=true/false
let appje=''//提现金额,默认1.0元,需要修改自行添加变量 RL_tx=''
let HBTYT_phead=[],ywkey=[],qrsn=[]

if ($.isNode()) {
    
    if (process.env.HBTYT_phead && process.env.HBTYT_phead.indexOf('@') > -1) {
        phead = process.env.HBTYT_phead.split('@');
        
    } else if (process.env.HBTYT_phead && process.env.HBTYT_phead.indexOf('\n') > -1) {
        phead = process.env.HBTYT_phead.split('\n');
        
    } else {
        phead = process.env.HBTYT_phead.split()
    };
    Object.keys(phead).forEach((item) => {
        if (phead[item]) {
            HBTYT_phead.push(phead[item])
        }
    });
    
    
    
    if(!apptx){apptx = true}
    if(!apptz){apptz = true}
    
}

!(async () => {
  if (!HBTYT_phead[0]) {
        $.msg($.name, '【提示】请先获取变量再试')
        return;
  } else {
      
console.log(`-------- 共 ${HBTYT_phead.length} 个账号 --------`)

    console.log(
`\n\n=============== 脚本执行 - 北京时间(UTC+8)：${new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
).toLocaleString()} ===============\n`);



    for (i = 0; i < HBTYT_phead.length; i++) {
        if(HBTYT_phead[i]){
            HBTYTphead = HBTYT_phead[i]

            $.index = i + 1;
            console.log(`\n----- 开始【第 ${$.index} 个账号】-----`)
            await HBTYT_qid();
            await $.wait(1000)
            await HBTYT_hblist()
            
        }  
    }
    //推送消息
    if(apptz){
        if ($.isNode()){
            if(subTitle !=''){
                await notify.sendNotify($.name, subTitle)
            }
        }
    }

  }})()

  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//取广告id
function HBTYT_qid() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://whaleunique.com/whale-game-base/redpackage/generate`,
            headers : {
                "Content-Type":"application/json;charset=UTF-8",
                "Content-Length":47,
                "Host":"whaleunique.com",
                "phead":`${HBTYTphead}`},
            body : '{"key":"jumpgame_common_red_packet","level":24}',
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.result.status == 1) {
                if(result.data.baseRedpackageVoList.length==0){
                    console.log(`\n【${$.name}--提示】: 获取红包广告id过快`)
                }else{
                    hbid=result.data.baseRedpackageVoList[0].id
                    console.log(`\n【${$.name}--提示】: 获得一个广告ID:${result.data.baseRedpackageVoList[0].id}`)
                    hbboby=`{"redpackageId":${result.data.baseRedpackageVoList[0].id},"realWatchAd":true}`
                    await $.wait(1000)
                    await HBTYT_khb(hbboby) 
                }
                
            } else {
               console.log(`\n【${$.name}--提示】: ${result.result.msg}`)
            }
            resolve()
        })
    })
}
//开广告红包
function HBTYT_khb(boby) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://whaleunique.com/whale-game-base/redpackage/receive`,
            headers : {
                "Content-Type":"application/json;charset=UTF-8",
                "Content-Length":boby.length,
                "Host":"whaleunique.com",
                "phead":`${HBTYTphead}`},
            body : boby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.result.status == 1) {
                if(!result.data.redpackageVo.showAmount){
                    console.log(`\n【${$.name}--提示】: 开启广告红包时间过快`)
                }else{
                   console.log(`\n【${$.name}--开红包】: 获得 ${result.data.redpackageVo.showAmount} 红包币`)
                console.log(`\n【${$.name}--提示】: 延时5秒继续开红包`)
                for (let i = 0; i < 100; i++) {
                    await $.wait(5000)
                    await HBTYT_qid();
                }
                
                }
                
            } else {
               console.log(`\n【${$.name}--提示】: ${result.result.msg}`)
            }
            resolve()
        })
    })
}
//查看提现列表
function HBTYT_hblist() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://whaleunique.com/whale-game-activity/wechat-withdraw/list`,
            headers : {
                "Host":"whaleunique.com",
                "phead":`${HBTYTphead}`},
                //"ispage":"1"
            //body : boby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if(result.result.status == 1){
                //提现0.3元
                je=result.data.userBalanceVo.coinCash
                if(result.data.amountList[0].limit.remainCount!=0){
                   if(je>=0.3){
                       HBTYT_tx_boby=`{"ispage":1,"amountId":1,"action":"wechat-withdraw","service":"static","isapp":"0","href":"http://whaleunique.com/frontend_member_service/common?appid=3&funname=wechat-withdraw&activityEntrance=00000&activityId=00000","referer":""}`
                      await  HBTYT_tx('0.3')
                   }
                }
                //提现0.5元
                if(result.data.amountList[1].limit.remainCount!=0){
                    if(je>=0.5){
                        HBTYT_tx_boby=`{"ispage":1,"amountId":2,"action":"wechat-withdraw","service":"static","isapp":"0","href":"http://whaleunique.com/frontend_member_service/common?appid=3&funname=wechat-withdraw&activityEntrance=00000&activityId=00000","referer":""}`
                      await  HBTYT_tx('0.5')
                   }
                }
                //提现1元
                if(result.data.amountList[2].limit.remainCount!=0){
                    if(je>=1){
                        HBTYT_tx_boby=`{"ispage":1,"amountId":3,"action":"wechat-withdraw","service":"static","isapp":"0","href":"http://whaleunique.com/frontend_member_service/common?appid=3&funname=wechat-withdraw&activityEntrance=00000&activityId=00000","referer":""}`
                      await  HBTYT_tx('1')
                   }
                }
            }
            
            
            
            
            resolve()
        })
    })
}
//提现
function HBTYT_tx(je) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://whaleunique.com/whale-game-activity/wechat-withdraw/submit`,
            headers : {
                "Content-Length":HBTYT_tx_boby.length,
                "ispage":"1",
                "Host":"whaleunique.com",
                "Content-Type": "application/json",
                "Referer":"http://whaleunique.com/frontend_member_service/common?appid=3&funname=wechat-withdraw&activityEntrance=00000&activityId=00000",
                "phead":`${HBTYTphead}`},
            body : HBTYT_tx_boby,
        }, async(error, response, data) => {
            console.log(data) 
            let result = JSON.parse(data)
            if (result.result.status == 1) {
               console.log(`\n【${$.name}--提现】: 红包跳一跳提现 ${je} 成功`)
               subTitle +=`\n【${$.name} 账号: $.index --提现】: 红包跳一跳提现 ${je} 成功`
               await HBTYT_hblist()
               await $wait(1000)
               await HBTYT_hblist()
            } else {
               console.log(`\n【${$.name}--提示】: ${result.result.msg}`)
            }
            resolve()
        })
    })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
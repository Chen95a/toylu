# jd_task
## 之前文件名_改-是为了避免xx面板集成了这个库,跟作者朋友使用的脚本重名,不得不改名   目前看到有其他脚本库自己改名回去,为避免上述的事情发生,将重新改名
## function目录是脚本引用的必要文件夹,请连同function文件一起放到srcrips目录,一起更新



此模块助力逻辑:所有账户会去助力前面的主号,而不是所有账户轮流助力

JdMain为你想设置的主号数,假如你docker挂了10个号,前面2个号是你自己的主要账户,后面8个号都是代挂,那么这10个号都会去助力前面2个主要账号

如果,你想单独设置某一个任务的助力次数,假如这个任务的文件名叫jd_help_test.js,你想助力前面三个账号,那么就单独添加 export jd_help_test = 3

如果都没添加,那么会根据脚本中的min参数来设置主要助力个数

如需排除账号做某一个任务,只需在全局变量filename_except中添加账户pt_pin,用","隔开;比如export jd_help_test_except = 'pt_pin1,pt_pin2'


### 全局助力次数: JdMain (_help_xxx)

export JdMain = 2



### 单任务助力次数: filename(单独设置某个任务助力个数,-替换成_)

export jd_help_grapbean = 3

### 跳过当前账号: filename_except

export jd_help_test_except = 'jd_1,jd_2'

### 自定义配置: user.js
module.exports = {'key1':'value1','key2':'value2'}

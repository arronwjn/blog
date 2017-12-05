

/*
 *  项目名称
*/
const AppName =  `咨讯`


/*
 *  项目平台
*/
const AppPlatform = 'mobile web'


/*
 *  项目存储前缀名称
*/
const AppStorageName =  `CaoXianSheng`


/*
 *  错误收集接口地址
*/
const errorCollectApi =  `http://doc.wenshuai.cn/api/error/add`


/*
 *  项目图标
*/
// const AppIcon = require('../images/logo.png')


/*
 *  项目版本
*/
const AppVersion = '1.0.0'


/*
 *  项目环境
*/
const AppEnv = 'debug'
// const AppEnv = __DEV__ ? 'debug' : 'release'


/*
 *  项目开发者    (如果你加入了开发这个项目还没有填写个人信息的话，那么请在下面的allDeveloper中加入你的信息，并给自己起一个炫酷的id)
*/
const developer =  {
    main : {                                //主要负责开发者
        name : '王健男',
        phone : 15333347509,
    },
    allDeveloper : {
        xuanhe : {
            name : '王健男',
            phone : 15333347509,
        }
    }
}


/*
 *  开发环境基础配置
*/
const developmentConfig =  {

    // api域名
    domain : 'http://cio.ueepub.cn',
    // domain : 'http://192.168.1.252/mojishop',

    // 是否开启输出日志
    log : true,

    // 是否显示输出日志
    showLog : true,

    // 是否显示接口错误信息
    showNetWorkErrorInfo : true,

    // 是否静默提交接口错误信息
    defaultUploadNetWorkErrorInfo : false,

    // dev : __DEV__,
}


/*
 *  生产环境基础配置
*/
const productionConfig =  {

    // api域名
    domain : 'http://cio.ueepub.cn',

    // 是否开启输出日志
    log : false,

    // 是否显示输出日志
    showLog : false,

    // 是否显示接口错误信息
    showNetWorkErrorInfo : false,

    // 是否静默提交接口错误信息
    defaultUploadNetWorkErrorInfo : true,

    // dev : __DEV__,
}


/*
 *  系统环境配置
*/
const env = (()=>{
    if(process.env.NODE_ENV == 'development'){                    //开发环境
        return developmentConfig
    }else {                         //生产环境
        return productionConfig
    }
    // return developmentConfig
})()

const closeLogger = ()=>{
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}
const closeShowLogger = ()=>{
    console.disableYellowBox = true;
}

env.showLog ? undefined : closeShowLogger()
env.log ? undefined : closeLogger()


export {
    AppName,
    AppPlatform,
    // AppIcon,
    AppVersion,
    AppEnv,
    AppStorageName,
    errorCollectApi,
    developmentConfig,
    productionConfig,
    env,
    developer
}

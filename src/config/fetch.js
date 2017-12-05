// import "isomorphic-fetch";
// import "babel-polyfill";
import { API_URL } from "../service/apiUrl";
// import {
//     Toast,
//     Modal,
// } from "antd-mobile";
import {
    AppName,
    AppPlatform,
    errorCollectApi,
    env,
    developer,
 } from "./apiConfig";
 // import UserStatusModule from './UserStatusModule'
 // import NavigatorModule from './NavigatorModule'


 export default class FetchDataModule {
     /*
      *  请求入口
     */
     static fetch(ApiName, params) {
         if (ApiName) {
            //  if (API_URL[ApiName].needLogin) {
            //    console.log(ApiName)
            //    console.log(UserStatusModule.GetUserStatus())
            //      if (UserStatusModule.GetUserStatus()) {
            //         return FetchDataModule.fetchData(ApiName, params);
            //      } else {
            //         return new Promise(() => {
            //           NavigatorModule.push('/user/loginRegister')
            //         });
            //      }
            //  } else {
            //      return FetchDataModule.fetchData(ApiName, params);
            //  }
            return FetchDataModule.fetchData(ApiName, params);
         } else {
             Alert.alert("FetchDataModule模块调用异常，请检查传递参数");
         }
     }

     /*
      *  处理请求的接口
     */
     static fetchData(ApiName, params) {
         if (API_URL[ApiName].showLoading) {
            //  Toast.loading('loading...', 0, ()=>{}, true)
         }
         if (API_URL[ApiName].method == "GET") {
             return FetchDataModule.get(ApiName, params);
         } else if (API_URL[ApiName].method == "POST") {
             return FetchDataModule.post(ApiName, params);
         } else {
            //  Modal.alert("接口预定义信息错误", `接口名:${ApiName}${"\b"}错误类型:请求方式异常`, [
            //      {
            //          text: "查看接口描述",
            //          onPress: () => {
            //              console.warn(
            //                  `接口预定义信息错误的接口描述:${API_URL[ApiName].remark}`
            //              );
            //          }
            //      },
            //      {
            //          text: "查看接口地址",
            //          onPress: () => {
            //              console.warn(
            //                  `接口预定义信息错误的接口地址:${API_URL[ApiName].fetchUrl}`
            //              );
            //          }
            //      },
            //      {
            //          text: "确定",
            //          onPress: () => {
            //              console.warn("请处理错误接口");
            //          }
            //      }
            //  ]);
         }
     }

     /*
      *  GET请求
     */
     static get(ApiName, params) {
         return fetch(API_URL[ApiName].fetchUrl + "?" + toQueryString(params), {
             method: "GET",
             headers: {
                //  latitude: FetchDataModule.state.latitude,
                //  longitude: FetchDataModule.state.longitude,
                //  city: FetchDataModule.state.city,
                 "Content-Type": "application/x-www-form-urlencoded",
                 // 'Accept': 'application/json',
                //  "User-Id": FetchDataModule.state.user_id,
                //  "Access-Token": FetchDataModule.state.access_token,
                //  device_identification: FetchDataModule.state.device_identification,
                //  ccyp_province_id: FetchDataModule.state.ccyp_province_id,
                //  dj_province_id: FetchDataModule.state.dj_province_id,
                //  district: encodeURIComponent(FetchDataModule.state.district),
                //  Source : FetchDataModule.state.Source,
             },
             // mode: "no-cors",
         })
             .then(res => {
                 return FetchDataModule.HandleRequestResults(
                     res,
                     ApiName,
                     params
                 );
             })
             .catch(error => {
                 // errorHandler(error,API_URL[ApiName].showLoading);
                 return new Promise((resolve, reject) => {reject(error)});
             });
     }

     /*
      *  POST请求
     */

     static post(ApiName, params) {
         var str=[];
         for(var p in params){
             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
         };
      //  alert(FetchDataModule.state.user_id)
         return fetch(API_URL[ApiName].fetchUrl, {
             method: "POST",
             headers: {
                //  latitude: FetchDataModule.state.latitude,
                //  longitude: FetchDataModule.state.longitude,
                //  city: FetchDataModule.state.city,
                 "Content-Type": "application/x-www-form-urlencoded",
                // 'Accept': 'application/json',

                // "User-Id": FetchDataModule.state.user_id,
                // "Access-Token": FetchDataModule.state.access_token,
                //  device_identification: FetchDataModule.state.device_identification,
                //  ccyp_province_id: FetchDataModule.state.ccyp_province_id,
                //  dj_province_id: FetchDataModule.state.dj_province_id,
                //  district: encodeURIComponent(FetchDataModule.state.district),
                // Source : FetchDataModule.state.Source
             },
            //  mode: "no-cors",
             body: str.join('&')
         })
             .then(res => {
                 return FetchDataModule.HandleRequestResults(
                     res,
                     ApiName,
                     params
                 );
             })
             .catch(error => {
                 // errorHandler(error,API_URL[ApiName].showLoading);
                 return new Promise((resolve, reject) => {reject(error)});
             });
     }

     /*
      *  处理请求结果
      *  res.headers.map['content-type'][0]                      非debug
      *  res._bodyBlob.type                                      debug
     */
     static HandleRequestResults(res, ApiName, params) {
         if (API_URL[ApiName].showLoading) {
            //  Toast.hide();
         }
         if (!res.ok) {
             if(env.showNetWorkErrorInfo){
                 res.text()
                 .then(err => {
                    //  Modal.alert(
                    //      "接口请求错误", `接口名:${API_URL[ApiName].apiUrl}`,
                    //      [
                    //          {
                    //              text: "上报接口异常",
                    //              onPress: () => {
                    //                  FetchDataModule.ErrorApiFetch(
                    //                      ApiName,
                    //                      err,
                    //                      params
                    //                  );
                    //              }
                    //          },
                    //          { text: "查看报错信息", onPress: () => console.warn(err) },
                    //          { text: "确定", onPress: () => {} }
                    //      ]
                    //  );
                 });
             }
             if(env.defaultUploadNetWorkErrorInfo){
                //  Toast.info('捕获到服务器返回数据类型异常，正在自动提交错误信息');
                 res.text().then(e => {
                     FetchDataModule.ErrorApiFetch(ApiName, e, params);
                 });
             }
             return new Promise((resolve, reject) => {reject()});
         } else {
             return res
                 .json()
                 .then(res => {
                     return new Promise(resolve => {
                         if (res.errcode != -999) {
                             resolve(res);
                         } else {
                            //  Toast.info("token验证异常，请重新登录");
                            //  UserStatusModule.RemoveUserInfo();
                         }
                     });
                 })
         }
     }

     /*
      *  微信专用请求
     */
     static wechat(url, params, callback) {
         fetch(url + "?" + toQueryString(params), {
             method: "GET",
             headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
             }
         })
             .then(res => res.json())
             .then(data => {
                 callback(data);
             })
             .catch(error => {
                 errorHandler(error);
             });
     }

     /*
      *  检索 url code
     */
      static GetRequest() {
        let url = location.search; //获取url中"?"符后的字串
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
          let str = url.substr(1);
          let strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
          }
        }
        return theRequest;
      }
     /*
      *  设置请求头部信息和附属对象
     */
     static SetSate(key, value) {
        FetchDataModule.state[key] = value;
     }

     /*
      *  显示请求等待
     */
     static ShowLoading() {
         FetchDataModule.state.FetchDataLoading._show();
     }

     /*
      *  关闭请求等待
     */
     static HideLoading() {
         FetchDataModule.state.FetchDataLoading._hide();
     }

     /*
      *  请求错误处理
     */
     static ErrorApiFetch(ApiName, errmsg, params) {
         const errorApiDeveloper = developerVerification(API_URL[ApiName].developer)
         fetch(errorCollectApi, {
             method: "POST",
             headers: {
                 city: encodeURIComponent(FetchDataModule.state.city),
                 "Content-Type": "application/x-www-form-urlencoded",
                 user_id: FetchDataModule.state.user_id,
                 access_token: FetchDataModule.state.access_token
             },
             body: toQueryString({
                 project: `${AppName}${AppPlatform}端`,
                 post_author: errorApiDeveloper.name,
                 server_return: errmsg,
                 api_address: `${API_URL[ApiName].method}:${API_URL[ApiName].fetchUrl}?${toQueryString(params)}`,
                 api_author: API_URL[ApiName].author
             })
         })
         .then(res => {
             if (!res.ok) {
                //  Modal.alert("提交错误的接口都报错了", `肿么办ﾍ(;´Д｀ﾍ)`, [
                //      {
                //          text: "GG",
                //          onPress: () => {
                //           //  Toast.warn('你选择了GG')
                //          }
                //      },{
                //          text: "人肉联系开发人员",
                //          onPress: () => {
                //              Modal.alert(
                //                  `接口的使用者是 ${errorApiDeveloper.name}`,
                //                  '是否要拨打电话联系开发者',
                //                  [
                //                      {
                //                          text: '取消',
                //                          onPress: () => {}
                //                      },
                //                      {
                //                          text: '拨打',
                //                          onPress: () => {
                //                             //  Linking.openURL(`tel:${errorApiDeveloper.phone}`).catch(err => console.warn('拨打电话失败，请检查当前环境'));
                //                          }
                //                      },
                //                  ]
                //              )
                //          }
                //      },{
                //          text: "确定",
                //          onPress: () => {}
                //      }
                //  ]);
             }else {
                 res.json()
                 .then(e => {
                    //  Toast.info("服务器异常提交成功");
                 })
             }
         })
     }
 }

 FetchDataModule.state = {
    city: null,
    user_id: null,
    access_token: null,
    FetchDataLoading: null,
    device_identification: null,
    latitude: null,
    longitude: null,
    Source : 'web',
    ccyp_province_id: 0,
    dj_province_id: 0,
    district: null
 };

 // 获取开发者信息
 const developerVerification = (developerName)=>{
     if(developerName){
         if(developer.allDeveloper[developerName]){
             return developer.allDeveloper[developerName]
         }else {
            //  Toast.error('检测到定义了错误的接口开发者，请审查APP_ROOT_NETWORK_CONFIG')
             return developer.main
         }
     }else {
         return developer.main
     }
 }

 function toQueryString(obj) {
     return obj
         ? Object.keys(obj)
               .sort()
               .map(function(key) {
                   var val = obj[key];
                   if (Array.isArray(val)) {
                       return val
                           .sort()
                           .map(function(val2) {
                               return encodeURIComponent(key) +
                                   "[]=" +
                                   encodeURIComponent(val2);
                           })
                           .join("&");
                   }
                   if (val) {
                       return encodeURIComponent(key) +
                           "=" +
                           encodeURIComponent(val);
                   } else {
                       return encodeURIComponent(key) + "=";
                   }
               })
               .join("&")
         : "";
 }

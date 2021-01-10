// 首先导入 axios

import axios from 'axios'

// 自己创建一个axios对象
// axios.defaults.timeout = 5000;   //响应时间
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
// axios.defaults.baseURL = 'http://8.131.98.159:3000';   //配置接口地址
// 请求拦截器
const request = axios.create({
  //baseURL: 'http://8.131.98.159:3000',  //这句话加上就没办法访问
  timeout: 3000 ,  // 请求超时，3000毫秒
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',

  }
})
//相应拦截器
request.interceptors.request.use( config => {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 处理请求错误
    return Promise.reject(error);
  });

// 相应拦截器
request.interceptors.response.use( response => {
    // 在2xx范围内的任何状态代码都会触发此功能
    // 处理响应数据
    return response;
  }, function (error) {
  // 任何超出2xx范围的状态代码都会触发此功能
    // 处理响应错误
    return Promise.reject(error);
  });

export default request  // 导出自定义创建的 axios 对象

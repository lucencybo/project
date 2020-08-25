//就是我们发送ajax请求的模板
//目的是为了对axios进行二次封装
//1.配置基础路径和超时限制
//2.添加进度条信息  nprogress
//3.返回的响应不在需要从data属性当中拿数据，而是响应就是我们要的数据
//4.统一处理请求错误，具体请求也可以选择处理货不处理

//一般我们在二次封装axios的时候不会直接在axios身上去使用
//而是通过create创建一个新的axios实例进行操作

import axios from "axios";
import NProgress from "nprogress"; //引入的js
import "nprogress/nprogress.css"; //引入css
import store from "@/store";

//创建一个新的axios实例
const instance = axios.create({
  baseURL: "/api", //配置请求基础路径  都是以api开头
  timeout: 20000, //配置请求超时时间，超过20s没有响应结果，就会自动中断
});

//请求和响应拦截器
//请求拦截器当中添加打开进度条的功能，发起请求就会触发
instance.interceptors.request.use((config) => {
  //处理config（请求报文）
  //把用户的临时身份标识添加到每次请求的请求头中
  let userTempId = store.state.user.userTempId;
  config.headers.userTempId = userTempId;

  //把登录后的标识也添加到请求头中
  let token = store.state.user.userInfo.token;
  //判断是否登录
  if(token){
    config.headers.token = token;
  }

  //添加额外的功能（使用进度条）
  NProgress.start(); //发送请求之前，先触发请求拦截器，再去发送请求
  return config; //返回这个config 请求继续发送  发送的报文信息就是新的config对象
});

//响应拦截器修改响应为直接返回的数据
instance.interceptors.response.use(
  (response) => {
    //成功的回调
    NProgress.done(); //接受响应时，先触发响应拦截器，再触发后面的
    //默认返回去的是response也就是我们的响应报文信息 如果我们要拿到数据 response.data去获取
    //现在我们返回响应之前把响应直接改成了数据，所以我们拿数据不需要再去.data了
    //console.log(response.data.data)
    return response.data;
  },
  (error) => {
    //失败的回调
    NProgress.done();
    alert("发送请求失败" + error.message || "未知错误");
    //error.message:出错信息;
    //如果需要进一步去处理这个错误，那么就返回一个失败的promise
    // return Promise.reject(new Error("请求失败")) new Error就是自定义错误的信息
    //如果不需要再去处理这个错误，那么就返回一个pending状态的promise（终止promise链）
    return new Promise(() => {});
  }
);

export default instance; //暴露出去我们的axios工具，后面发请求使用

import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "@/store";
import './validate'
import "@/mock/mockServer";

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/yue.jpg'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})






//部分引入element-ui当中的MessageBox,Message
import { MessageBox,Message,Pagination} from 'element-ui'; //引入了还没有注册或者声明使用
//声明使用或者注册
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

//第一种写法
Vue.use(Pagination)
//第二种写法
// Vue.component(Pagination.name,Pagination)

import * as API from '@/api'


//import '@/api' //为了测试用的
//或者这样写
//import {reqCategoryList}  from '@/api'   //这样写api可以不用写export
//reqCategoryList()  //为了测试
import "swiper/css/swiper.min.css";

//注册三大步：定义  注册  使用
import TypeNav from "./components/TypeNav";
import SliderLoop from "@/components/SliderLoop";
// import Pagination from "@/components/Pagination";

//全局注册TypeNav，因为他是一个公用的组件
Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);
// Vue.component("Pagination", Pagination);

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
     //配置全局事件总线
     Vue.prototype.$API = API;
     //目的并不是为了以他作为事件总线，因为它没法用$on和$emit，我们只是为了让所有的组件能用API，把这个对象放到原型上
  },

  store,
  // el:"#app",
  router, //注册注入给vue添加路由功能并且让每个组件内部都有两个对象可以拿到$router $route
  render: (h) => h(App), //1.注册组件App   2.使用组件  3.渲染组件
}).$mount("#app");

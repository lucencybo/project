// import Home from "../pages/Home";  //配置对象
//import 函数 1.把对应路径的东西最终打包成单个文件
            //2.懒加载的功能：当访问对应的组件的时候，import函数才调用实现懒加载
const Home = () => import('@/pages/Home')  //函数

// import Login from "../pages/Login";
const Login = () => import('@/pages/Login') 

import Register from "../pages/Register";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import AddCartSuccess from "../pages/AddCartSuccess";
import ShopCart from "../pages/ShopCart";
import Trade from "../pages/Trade";
import Pay from "../pages/Pay";
import PaySuccess from "../pages/PaySuccess";
import Center from "../pages/Center";
import GroupOrder from "../pages/Center/GroupOrder";
import MyOrder from "../pages/Center/MyOrder";
import store from '@/store'


export default [
  //专门配置各种路由的地方   路由和路由器要区分
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'myorder',
        component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'',
        redirect: 'myorder'
      }
    ]
  },
  {
    path: "/paySuccess",
    component: PaySuccess,
    //  //独享路由守卫
    beforeEnter: (to,from,next) => {
      if(from.path === '/pay'){
         next()
       }else{
         next(false)
       }
      }
  },
  {
    path: "/pay",
    component: Pay,
    //  //独享路由守卫
     beforeEnter: (to,from,next) => {
     if(from.path === '/trade'){
        next()
      }else{
        next(false)
      }
     }
  },
  {
    path: "/trade",
    component: Trade,
    //独享路由守卫
    beforeEnter: (to, from, next) => {
     if(from.path === '/shopCart'){
       next()
     }else{
       next(false)
     }
    }
  },
  {
    path: "/shopCart",
    component: ShopCart,
  },
  {
    path: "/addCartSuccess",
    component: AddCartSuccess,
    //路由守卫
    // beforeEnter:(to,from,next) => {
    //   let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
    //  if(to.query.skuNum && skuInfo){
    //    next()
    //  }else{
    //    next(false)
    //  }
    // }
  },
  {
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true, //证明要隐藏footer
    },
    //路由独享守卫
    beforeEnter:(to,from,next) => {
      if(!store.state.user.userInfo.name){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHide: true, //证明要隐藏footer
    },
  },
  {
    path: "/search/:keyword?", //?代表这个params参数可以传也可以不传
    component: Search,
    name: "search",
    //props:true  //布尔值写法：代表只是把params参数通过属性传递给相应的组件
    //props:{name:'xiaozhan'} 对象写法，只能传递静态的数据 几乎不用 因为需要额外传递静态数据才会用得到
    // props(route){//route 收集好参数的路由对象
    //     //把传递过来的params参数和query参数一起映射为组件的属性（）
    //     return {keyword:route.params.keyword,keyword2:route.query.keyword}

    // }
  },
  {
    path: "/",
    redirect: "/home",
  },
];

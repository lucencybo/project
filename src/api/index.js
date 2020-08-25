//这个文件是所有的接口请求函数的文件
//每一个请求接口数据功能都给他定义成一个函数，以后哪里需要去请求数据，就调用对应的这个接口请求函数就好

import Ajax from "@/ajax/Ajax"; //刚才暴露出去的instance
import mockAjax from "@/ajax/mockAjax";

//reqCategoryList  请求类名列表
export const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList", //找api文档里的路径
    method: "get", //method 属性有两种方法get和post
  });
};

// reqCategoryList()  //这个要引到mian中，因为这个是个单独的模块，不会运行，因为项目找的是main ,这个是为了测试用的

//请求banner和floor  mock的接口的请求数据
export const reqBannerList = () => {
  return mockAjax({
    url: "/banner",
    method: "get",
  });
};

export const reqFloorList = () => {
  return mockAjax({
    url: "/floor",
    method: "get",
  });
};

//searchParams代表搜索参数，这个参数必须要有，至少得是一个没有属性的空对象
//参数如果是一个空的对象，代表搜索请求获取的是全部的数据
//参数如果有搜索条件，代表获取的就是搜索条件匹配的数据
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "post",
    data: searchParams,
  });
};

//reqGoodsListInfo({}) //用于测试

export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: "get",
  });
};

//请求添加或者修改购物车（或者修改购物车  数量）
///api/cart/addToCart/{ skuId }/{ skuNum }     POST

export const reqAddOrUpdateCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
};

//请求购物车列表数据
//api/cart/cartList   get   无

export const reqShopCartList = () => {
  return Ajax({
    url: "/cart/cartList",
    method: "get",
  });
};
//还有对象的写法
// export const reqShopCartList = () => Ajax.get('/cart/cartList')

//修改单个状态（单选）
///api/cart/checkCart/{skuId}/{isChecked}   GET
export const reqUpdateIsCheck = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
};

//删除单个
///api/cart/deleteCart/{skuId}   DELETE  skuId
export const reqDeleteCart = (skuId) => {
  return Ajax({
    url: `cart/deleteCart/${skuId}`,
    method: "delete",
  });
};

///api/user/passport/register  POST
//mobile  password  code
//请求注册
export const reqRegister = (userInfo) => {
  return Ajax({
    url: "/user/passport/register",
    method: "post",
    data: userInfo,
  });
};

///api/user/passport/login   POST  {mobile，password}
//请求登录
export const reqLogin = (userInfo) => {
  return Ajax({
    url: "/user/passport/login",
    method: "post",
    data: userInfo,
  });
};

///api/user/passport/logout  GET
//请求退出登录
export const reqLogout = () =>{
    return Ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}
 
///api/order/auth/trade   GET 
//请求创建订单交易的数据
export const reqTradeInfo = () => {
  return Ajax({
    url:"/order/auth/trade",
    method:'get'
  })
}

//请求创建提交订单
///api/order/auth/submitOrder?tradeNo={tradeNo}  POST
export const reqSubmitOrder = (tradeNo,tradeInfo) => {
  return Ajax({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data:tradeInfo
  })
}

//获取支付页面的支付信息 
///api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => {
  return Ajax({
    url: `/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}

///api/payment/weixin/queryPayStatus/{orderId}  GET
//获取订单支付状态的信息
export const reqOrderStatus = (orderId) => {
  return Ajax({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
  })
}

///api/order/auth/{page}/{limit}   GET
//请求获取我的订单分类列表
export const reqMyOrderInfo = (page,limit) => {
  return Ajax({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
  })
}

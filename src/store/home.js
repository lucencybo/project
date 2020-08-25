
import {reqCategoryList,reqBannerList,reqFloorList} from "@/api"   //因为是分别暴露的，所以要结构赋值

//用来集中式管理多个组件共享的状态数据
const state = {
    categoryList:[],  //等待存放后端数据的接收数组
    bannerList:[],
    floorList:[]

}
const mutations = {
    //直接修改数据（不允许出现if for 异步操作）
    // RECEIVECATEGORYLIST 起的名字  意思是拿到请求类名列表
    RECEIVECATEGORYLIST(state,categoryList){
        state.categoryList = categoryList //把数据修改放到数组里
    },

    RECEIVEBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },

    RECEIVEFLOORLIST(state,floorList){
        state.floorList = floorList
    },

}
//包含n个用来间接修改state的方法对象，用来触发mutation函数的调用
const actions = {
    //异步请求获取数据 允许if for 异步操作
    async getCategoryList({commit}){
       // commit方法一旦调用，就会触发相应的mutation函数
        //reqCategoryList().then(result => {
        // commit("RECEIVECATEGORYLIST",result.data)
        //})

        //await必须等待的是成功的结果，但是await必须放在async函数中，所以要加async
        const result = await reqCategoryList()
        if(result.code === 200){  //如果是200,那就成功了
            commit('RECEIVECATEGORYLIST',result.data)
        }
    },
 
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
            commit('RECEIVEBANNERLIST',result.data)
        }
    },

    async getFloorList({commit}){
        const result = await reqFloorList()
        if(result.code === 200){
            commit('RECEIVEFLOORLIST',result.data)
        }
    }
}

//用来集中式管理多个组件共享的状态数据（计算属性数据）
const getters = {
    //categoryList1(state){
    //return state.categoryList
    //}
}

export default {
    state,
    mutations,
    actions,
    getters
}
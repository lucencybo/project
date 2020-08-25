<template>
<div>
  <Header></Header>
 <router-view></router-view>
  <!-- <Footer v-if="$route.path === '/home' || $route.path === '/search'"></Footer> -->
  <Footer v-if="!$route.meta.isHide"></Footer>
</div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },

   mounted() {
    //这个是钩子函数
    //如果getCategoryList函数要执行，必须先执行钩子函数
    //这个钩子函数完成了对getCategoryList函数的调用
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      // this.$store.dispatch(type)
      // type 是action函数名称
      //触发getCategoryList
      this.$store.dispatch("getCategoryList");
    },
  },
  
}
</script>

<style lang="less" scoped>

</style>
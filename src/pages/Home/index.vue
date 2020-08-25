<template>
  <div>
    Home...
    <TypeNav></TypeNav>
    <Container></Container>
   <Recommend></Recommend>
   <Rank></Rank>
   <Like></Like>
   <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor='floor'></Floor>
   <Brand></Brand>
  </div>
</template>

<script>
import Container from "./Container";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: {
    Container,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted(){
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  }
}; 
</script>

<style lang="less" scoped>
</style>
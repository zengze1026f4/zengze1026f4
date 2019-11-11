<template>
  <div>
    <van-swipe :autoplay="3000" style="height:180px">
      <van-swipe-item v-for="(image, index) in imageList" :key="index">
        <img :src="image" style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      imageList: [
        require(`../assets/lunbo1.jpg`),
        require(`../assets/lunbo2.jpg`),
        require(`../assets/lunbo3.jpg`),
        require(`../assets/lunbo4.jpg`)
      ]
    };
  }
};
</script>

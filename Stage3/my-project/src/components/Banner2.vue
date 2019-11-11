<template>
  <div>
    <van-swipe @change="onChange" class="ban2" v-if="src.length>0">
      <van-swipe-item>
        <img :src="imgsrc(src)" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/lunbo2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/lunbo3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/lunbo4.jpg" alt />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import qs from "qs";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      current: 0,
      goodsinf: [],
      src: ""
    };
  },
  created() {
    this.bannerinf();
  },
  methods: {
    bannerinf() {
      this.gid = this.$route.query.gid; //拿到地址栏的商品gid
      let params = {
        gid: this.gid
      };
      params = qs.stringify(params);
      // window.console.log(this.gid);
      this.$axios
        .post("http://localhost:3000/detail", params)
        .then(async ({ data }) => {
          this.goodsinf = await data;
          // window.console.log(this.goodsinf[0].imgUrl);
          this.src = this.goodsinf[0].imgUrl; //拿到对应的数据渲染
          return this.src;
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    onChange(index) {
      this.current = index;
    },
    imgsrc(src) {
      return require(`@/${src}`);
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.ban2 {
  height: vw(390);
  img {
    width: 100%;
    height: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: vw(4);
    bottom: vw(4);
  }
}
</style>
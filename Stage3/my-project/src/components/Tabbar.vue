<template >
  <van-tabbar v-model="active" active-color="#FF734C" class="tabbars">
    <van-tabbar-item to="/main/home" icon="wap-home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/main/search" icon="search">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart-o" :info="countNum">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="smile-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import qs from "qs";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      countNum: ""
    };
  },
  created() {
    this.carNum();
  },
  methods: {
    async carNum() {
      let token = localStorage.getItem("Authorization");
      if (token) {
        let params = {
          username: token
        };
        params = qs.stringify(params);
        await this.$axios
          .post("http://localhost:3000/carnum", params)
          .then(({ data }) => {
            // window.console.log(data);
            this.countNum = data;
          })
          .catch(error => {
            window.console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="scss">
.tabbars {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.van-info {
  background-color: rgb(255, 115, 76);
}
</style>
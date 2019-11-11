<template>
  <div class="nav1">
    <van-nav-bar title="购物车" @click-left="back" left-arrow class="return">
      <van-icon name="wap-nav" slot="right" style="font-size:20px;" @click="res()" />
    </van-nav-bar>
    <ul class="tan" :style="{display:navis==true?'block':'none'}">
      <li>
        <router-link to="/main/home">
          <van-icon name="home-o" to="/main/home" />
          <span>主页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/main/search">
          <van-icon name="records" to="/main/search" />
          <span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <van-icon name="shopping-cart-o" to="/cart" />
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/main/mine">
          <van-icon name="smile-o" />
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
Vue.use(NavBar).use(Icon);
export default {
  data() {
    return {
      navis: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    res() {
      this.navis = !this.navis;
      return this.navis;
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.van-nav-bar .van-icon {
  color: #232628;
  font-size: vw(18);
}
.nav1 {
  width: 100%;
  .tan {
    position: absolute;
    top: vw(48);
    right: vw(10);
    width: vw(100);
    height: vw(180);
    z-index: 3;
    display: none;
    // text-align: left;
    background-color: #fff;

    li {
      margin-left: vw(3);
      text-align: left;
      height: vw(30);
      line-height: vw(30);
      padding: vw(4) vw(8);
      margin-top: vw(6);
      font-size: vw(14);
      display: block;
      span {
        margin-left: vw(10);
      }
      a {
        color: black;
      }
    }
  }
}
</style>

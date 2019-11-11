<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-left" @click="back">
        <a href="###">
          <van-icon name="arrow-left" />
        </a>
      </div>
      <div class="headerbar-logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="headerbar-right" id="onlineChat" @click="res()">
        <div class="headerbar-right-kf">
          <van-icon name="wap-nav" />
        </div>
      </div>
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
    </header>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
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

<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.headerbar {
  height: vw(60);
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  align-items: center;
  .headerbar-left {
    width: vw(40);
    height: vw(40);
    line-height: vw(40);
    margin-left: vw(22);
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    a {
      height: 100%;
      width: 100%;
      font-size: vw(25);
    }
  }
  .headerbar-logo {
    img {
      width: vw(200);
      height: vw(30);
    }
  }
  .headerbar-right {
    width: vw(40);
    height: vw(40);
    line-height: vw(40);
    margin-right: vw(5);
    .headerbar-right-kf {
      height: 100%;
      width: 100%;
      font-size: vw(28);
    }
  }
}
.tan {
  position: absolute;
  top: vw(48);
  right: vw(10);
  width: vw(100);
  height: vw(180);
  z-index: 3;
  display: none;
  background-color: #fff;

  li {
    text-align: left;
    margin-left: vw(3);
    height: vw(30);
    line-height: vw(30);
    padding: vw(4) vw(8);
    margin-top: vw(6);
    display: block;
    font-size: vw(14);
    span {
      margin-left: vw(10);
    }
    a {
      color: black;
    }
  }
}
</style>
<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-left">
        <router-link to="/main/search">
          <a href="javascript:;">
            <van-icon name="wap-nav" />
          </a>
        </router-link>
      </div>
      <div class="headerbar-logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="headerbar-right" id="onlineChat">
        <div class="headerbar-right-kf">
          <van-icon name="service-o" />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {};
</script>

<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.headerbar {
  height: vw(60);
  display: flex;
  justify-content: space-around;
  background: #435448;
  overflow: hidden;
  color: #fff;
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
      color: #fff;
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
      color: #fff;
      font-size: vw(25);
    }
  }
}
</style>
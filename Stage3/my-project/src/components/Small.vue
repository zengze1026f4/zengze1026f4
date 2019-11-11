<template>
  <div>
    <ul class="tan">
      <li>
        <van-icon name="home-o" />
        <span>主页</span>
      </li>
      <li>
        <van-icon name="records" />
        <span>分类</span>
      </li>
      <li>
        <van-icon name="shopping-cart-o" />
        <span>购物车</span>
      </li>
      <li>
        <van-icon name="smile-o" />
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";

Vue.use(NavBar).use(Icon);
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.tan {
  position: absolute;
  top: vw(48);
  right: vw(10);
  //   display: none;
  ul {
    width: vw(100);
    height: vw(160);
    z-index: 3;
    li {
      text-align: center;
      height: vw(20);
      line-height: vw(20);
      padding: vw(4) vw(8);
      margin-top: vw(6);
      span {
        margin-left: vw(10);
      }
    }
  }
}
</style>

<template >
  <div class="slide-left">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item to="/main/search/slide1" title="热门推荐" />
      <van-sidebar-item to="/main/search/slide2" title="礼篮" />
      <van-sidebar-item to="/main/search/slide3" title="绿植花卉" />
      <van-sidebar-item to="/main/search/slide1" title="鲜花" />
      <van-sidebar-item to="/main/search/slide2" title="永生花" />
      <van-sidebar-item to="/main/search/slide3" title="蛋糕" />
      <van-sidebar-item to="/main/search/slide1" title="特色礼品" />
    </van-sidebar>
  </div>
</template>
<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}

.slide-left {
  width: 21%;
  float: left;
  overflow: hidden;
  border: none;
}
</style>
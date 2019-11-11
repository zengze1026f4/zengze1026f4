<template>
  <!-- <van-icon name="checked" /> -->
  <div class="conpany-info">
    <div class="conpany">
      <van-icon name="checked" />
      <span>认证龙头企业</span>
    </div>
    <div class="conpany">
      <van-icon name="checked" />
      <span>14年品牌</span>
    </div>
    <div class="conpany">
      <van-icon name="checked" />
      <span>3小时送花</span>
    </div>
    <div class="conpany">
      <van-icon name="checked" />
      <span>最近338227条好评</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.conpany-info {
  display: flex;
  justify-content: space-between;
  padding: 0 vw(5);
  height: vw(30);
  align-items: center;
  font-size: vw(10);
  span {
    margin-left: 2px;
  }
}
</style>
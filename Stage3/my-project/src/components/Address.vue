<template>
  <div>
    <section class="skuselect">
      <div class="media">
        <div class="media-left">配送至</div>
        <div class="media-center">
          <p>
            <van-icon name="location-o" />&nbsp;
            <span>请选择配送地区</span>
          </p>
          <p class="media-desc"></p>
        </div>
        <div class="media-right">
          <van-icon name="ellipsis" />
        </div>
      </div>
    </section>
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
.skuselect {
  margin-top: vw(8);
  .media {
    display: flex;
    background-color: #fff;
    padding: vw(14) vw(16);
    align-items: center;
    margin-bottom: vw(20);
    margin-bottom: vw(5);
    .media-left {
      width: vw(42);
      min-width: vw(41);
      font-size: vw(14);
      font-weight: 500;
      line-height: vw(22);
    }
    .media-center {
      flex: 1;
    }
    .media-right {
      width: vw(20);
      text-align: right;
      font-size: vw(18);
    }
  }
}
</style>
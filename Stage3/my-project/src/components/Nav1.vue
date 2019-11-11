<template lang="">
    <div>
        <van-nav-bar title="个人中心" @click-left="back" left-text="返回" left-arrow  >
        </van-nav-bar>
    </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>
<style lang="scss">
.van-nav-bar__text {
  color: #232628;
  font-size: 16px;
}
</style>
<template>
  <div>
    <van-nav-bar left-arrow @click-left="back"></van-nav-bar>
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
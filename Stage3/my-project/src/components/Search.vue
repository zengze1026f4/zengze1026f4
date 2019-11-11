<template lang="">
    <div>
     <div class="nav">
     <van-icon name="arrow-left" @click="back" />
      <van-search placeholder="请输入搜索关键词" v-model="value" @blur="searchText(value)" class="navright" />
     <van-icon name="search" @click="jump()" />
     </div>
    
    </div>
</template>
<script>
import Vue from "vue";
import store from "../stores/vuex.js";
import { Icon, Search } from "vant";
// import store from "../stores/vuex";
Vue.use(Icon);
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      value1: ""
    };
  },
  // mounted() {
  //   this.onSearch();
  // },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    jump() {
      this.$router.push("/list");
    },
    searchText(value1) {
      window.console.log(store);
      // window.console.log(value1);
      let _ = this;
      this.value1 = value1;
      store.dispatch("setAuthor", {
        value1: _.value1
      });
    }

    // onSearch() {
    //   // this.$store1.dispatch("setAuthor", {
    //   //   value1: this.value1
    //   // });

    //   window.console.log(this.value1);
    // }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.nav {
  height: vw(30);
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: vw(10) vw(5);
  .navright {
    flex: 1;
    margin-left: vw(16);
  }
}
</style>
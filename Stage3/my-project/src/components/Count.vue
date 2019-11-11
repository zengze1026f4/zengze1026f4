<template lang="">
    <div style="width:100%">
    <van-submit-bar
  :price="newComputed*100"
  button-text="结算"
  @submit="onSubmit"
 >
  <van-checkbox v-model="newCheckedAll"  >全选</van-checkbox>
</van-submit-bar>
    </div>
</template>
<script>
import Vue from "vue";
import { SubmitBar } from "vant";
import store from "../stores/total.js";
Vue.use(SubmitBar);
// window.console.log(store.state);
export default {
  data() {
    return {
      state: store.state
    };
  },
  computed: {
    newComputed() {
      if (this.state.sum) {
        return this.state.sum;
      } else {
        return false;
      }
    },
    newCheckedAll: {
      get: function() {
        return this.state.checkedAll;
      },
      set: function(val) {
        store.setCheckedAll(val);
      }
    }
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss">
.van-button--danger {
  border: 1px solid #ff734c;
  background-color: #ff734c;
}
.van-submit-bar__price {
  color: #ff734c;
}
</style>
<template>
  <div>
    <van-tabs v-model="active" color="#FF734C">
      <van-tab title="综合"></van-tab>
      <van-tab title="销量"></van-tab>
      <van-tab title="价格升序"></van-tab>
      <van-tab title="新品"></van-tab>
    </van-tabs>
    <nav class="purpose">
      <div class="purpose-list">
        <div class="purpose-item">
          <a href="###" class="navigation actives">送女友</a>
        </div>
        <div class="purpose-item">
          <a href="###" class="navigation">送男性</a>
        </div>
        <div class="purpose-item">
          <a href="###" class="navigation">送朋友</a>
        </div>
        <div class="purpose-item">
          <a href="###" class="navigation">送长辈</a>
        </div>
        <div class="purpose-item" id="showFilter">
          <a href="javascript:;" class="navigation">
            <van-cell @click="showPopup">筛选</van-cell>
            <van-popup
              v-model="show"
              position="right"
              get-container="#showFilter"
              :style="{ width: '80%',height:'100% '}"
            >
              <aside class="purpose-layer" id="purposeAside">
                <h4>人群</h4>
                <div class="purpose-layer-list">
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">送女友</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">送男性</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">送朋友</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">送长辈</a>
                  </div>
                </div>
                <h4>场合</h4>
                <div class="purpose-layer-list">
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">爱情鲜花</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">生日鲜花</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">祝福庆贺</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">婚庆鲜花</a>
                  </div>
                </div>
                <h4>花材</h4>
                <div class="purpose-layer-list">
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation actives">玫瑰</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">百合</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">康乃馨</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">向日葵</a>
                  </div>
                  <div class="purpose-layer-item">
                    <a href="###" class="navigation">扶郎</a>
                  </div>
                </div>
                <div class="purpose-layer-clear">
                  <a href="###" class="navigation">清除选择</a>
                </div>
              </aside>
            </van-popup>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Popup, Cell } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Cell);

export default {
  data() {
    return {
      show: false,
      active: ""
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return document.querySelector("#showFilter");
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.purpose {
  width: 100%;
  background-color: #fff;
  position: relative;
  height: vw(44);
  .purpose-list {
    padding: vw(10) vw(4);
    .purpose-item {
      float: left;
      width: 17%;
      padding: 0 vw(4);
      text-align: center;
      .navigation {
        display: block;
        width: 100%;
        height: vw(32);
        line-height: vw(32);
        border: 1px solid #f7f9fa;
        background-color: #f7f9fa;
        font-size: vw(12);
        border-radius: vw(7);
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: black;
        text-decoration: none;
      }
      .actives {
        background-color: #fff;
        border-color: #ff734c;
        color: #ff734c;
      }
      h4 {
        font-weight: 500;
        font-size: vw(18);
        text-align: left;
        margin-left: vw(20);
      }
      .purpose-layer-list {
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        clear: both;
        height: vw(144);

        .purpose-layer-item {
          float: left;
          width: 23.33333333%;
          text-align: center;
          padding: 0 vw(6);
          margin-bottom: vw(12);

          .navigation {
            height: vw(34);
            line-height: vw(34);
            background-color: #f7f9fa;
            border-radius: vw(10);
            border: 1px solid #f7f9fa;
            font-size: vw(14);
            display: block;
            color: black;
            text-decoration: none;
          }
          .actives {
            background-color: #fff;
            border-color: #ff734c;
            color: #ff734c;
          }
        }
      }
    }
  }
  .purpose-layer-clear {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: vw(48);
    line-height: vw(48);
    font-size: vw(20);
    text-align: center;
    background-color: #e9ecf0;
    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>

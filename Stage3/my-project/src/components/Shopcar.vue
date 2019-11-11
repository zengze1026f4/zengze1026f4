<template>
  <div class="shopcar clearfix">
    <div class="biaoti">
      <input type="checkbox" v-model="allCheck" @change="checkAll($event.currentTarget)" />
      <!-- <input type="checkbox" v-model="allCheck" @click="checkAll(allCheck)" /> -->
      <li>商品图片</li>
      <li>商品规格</li>
      <li>操作</li>
    </div>
    <div class="cart-list clearfix" v-if="token">
      <!--活动类商品 根据促销类型放在promo-list列表下-->
      <div class="promo-list clearfix" v-for="(item,index) in carlist" :key="index">
        <div class="cart-item nochange-item" :data-id="item.gid">
          <div class="cart-item-checkbox">
            <input type="checkbox" v-model="checkeds[index]" />
            <i class="iconfont iconfont-checkout"></i>
          </div>
          <div class="cart-item-right clearfix">
            <div class="cart-item-details">
              <div class="cart-item-pic">
                <a href="/product/9012437.html">
                  <img :src="imgsrc(item.imgUrl)" alt="粉雪佳人" />
                </a>
              </div>
              <div class="cart-item-info">
                <p class="cart-item-title">
                  <a href="###" v-text="item.title"></a>
                </p>
                <!--发货地显示-->
                <div class="cart-item-inputs">
                  <div class="cart-item-num">
                    <span>数量</span>
                    <div class="cart-item-setnum">
                      <van-stepper
                        v-model="item.num"
                        :min="1"
                        :max="item.kucun"
                        @change="changeNum($event,item.gid)"
                      />
                    </div>
                  </div>
                  <el-button type="text" @click="open(index,item.gid)" class="del">
                    <van-icon name="delete" />
                  </el-button>
                </div>
                <p class="cart-item-price">
                  <em>单价 : ￥</em>
                  <span v-text="item.price"></span>
                  <em>小计 : ￥</em>
                  <span>{{item.price*item.num}}</span>
                  <span style="display:none">{{sum}}{{checkNum()}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="token==null" class="weilogin">登陆后才可以查看购物车奥~~~</div>
  </div>
</template>
<script>
import Vue from "vue";
import qs from "qs";
import store from "../stores/total.js";
// window.console.log(store.state.sum);
import { Icon, Checkbox, Stepper, Toast } from "vant";
Vue.use(Icon)
  .use(Checkbox)
  .use(Stepper)
  .use(Toast);
export default {
  data() {
    return {
      state: store.state,
      token: localStorage.getItem("Authorization"),
      value: "",
      carlist: [],
      allCheck: false,
      checkeds: [] //初始化成list的长度,
    };
  },
  created() {
    this.requestinf();
  },

  computed: {
    // 1、只能取值，不能设置值,为函数//2、改为对象，可设置，可取值
    //计算总价
    sum() {
      let sum = 0;
      for (let i in this.carlist) {
        if (this.checkeds[i])
          //如果checkeds[i]的结果为truth，则进行累加
          sum += this.carlist[i].price * this.carlist[i].num;
      }
      store.setSumText(sum);
      // window.console.log(store.setSumText(sum));
      return sum;
    }
  },
  methods: {
    async requestinf() {
      //获取数据
      let params = {
        username: this.token
      };
      params = qs.stringify(params);
      await this.$axios
        .post("http://localhost:3000/car", params)
        .then(({ data }) => {
          this.carlist = data;
          return this.carlist;
          // window.console.log(data);
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    async removegood(gid) {
      //删除商品
      let params = {
        username: this.token,
        gid
      };
      window.console.log(params);
      params = qs.stringify(params);
      await this.$axios
        .post("http://localhost:3000/del", params)
        .then(({ data }) => {
          window.console.log(data);
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    async changegood(e, gid) {
      //更改数量
      let params = {
        username: this.token,
        gid,
        num: e
      };
      // window.console.log(params);
      params = qs.stringify(params);
      await this.$axios
        .post("http://localhost:3000/modified", params)
        .then(({ data }) => {
          window.console.log(data);
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    //拿到图片地址
    imgsrc(src) {
      return require(`@/${src}`);
    },
    // 改变数量
    changeNum(e, gid) {
      // window.console.log(e, gid); //数量,下标
      this.changegood(e, gid);
    },
    //弹窗+删除
    open(index, gid) {
      this.$confirm("您确定要删除该商品吗, 是否继续?", "花花提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });

          this.carlist.splice(index, 1); //只需要从数组中移除对应项，视图会自动更新
          this.removegood(gid);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    checkAll(event) {
      window.console.log(event.checked);
      //这里的event就是全选checkbox对象
      if (event.checked) {
        //如果全选的checkbox选中，将checkeds所有的值设置为true，对应商品checkbox的选中状态自动更新
        for (let i = 0; i < this.checkeds.length; i++) {
          Vue.set(this.checkeds, i, true);
        }
      } else {
        //否则就进行与上面相反的操作
        for (let i = 0; i < this.checkeds.length; i++) {
          Vue.set(this.checkeds, i, false);
        }
      }
    },
    checkNum() {
      //计算勾选款被选中的状态
      let num = 0;
      for (let i in this.checkeds) {
        if (this.checkeds[i]) {
          num++;
        }
      }
      // window.console.log(num == this.carlist.length);
      if (num == this.carlist.length) {
        store.setCheckedAll(true);
        this.allCheck = true;
      } else {
        this.allCheck = false;
      }
      return num;
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
html,
body {
  height: 100%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
.shopcar {
  width: 100%;
  height: 100%;
  margin-top: vw(20);
  margin-bottom: vw(50);
  overflow: auto;
  li {
    list-style: none;
  }
  .biaoti {
    display: flex;
    height: vw(30);
    line-height: vw(30);
    font-size: vw(14);
    justify-content: space-between;
    align-items: center;
    padding: 0 vw(14);
    margin-bottom: vw(6);
  }
  .cart-list {
    border-top: 1px solid #e9ecf0;
    background-color: #fff;
    height: vw(140);
    .promo-list {
      border-bottom: 1px solid #e9ecf0;
      padding: vw(7) 0 0;
      border: none;
      .cart-item-checkbox {
        position: relative;
        display: inline-block;
        width: 11.73%;
        height: vw(114);
        vertical-align: top;
        text-align: center;
      }
      .cart-item-right {
        margin-bottom: vw(14);
        display: inline-block;
        width: 88.27%;
        vertical-align: top;
        .cart-item-details {
          height: vw(140);
          .cart-item-pic {
            display: inline-block;
            width: 31.41993958%;
            vertical-align: top;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
          .cart-item-info {
            position: relative;
            display: inline-block;
            width: 60%;
            height: vw(114);
            padding: 0 vw(12);
            vertical-align: top;
            .cart-item-title {
              width: 100%;
              padding: 0;
              margin: 0;
              a {
                display: inline-block;
                max-width: 100%;
                font-size: vw(14);
                line-height: vw(16);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
                color: black;
              }
            }

            .cart-item-inputs {
              display: flex;
              .del {
                margin-left: vw(16);
                margin-top: vw(8);
                display: inline-block;
                font-size: vw(22);
                color: black;
              }
              .cart-item-num {
                margin-top: vw(16);
                // overflow: hidden;
                height: vw(28);
                line-height: vw(28);
                display: flex;
                span {
                  font-size: vw(14);
                  line-height: vw(14);
                  i {
                    font-style: normal;
                  }
                }
                .cart-item-setnum {
                  display: inline-block;
                  height: vw(28);
                  margin-left: vw(14);
                  background-color: #f7f9fa;
                }
              }
            }

            .cart-item-price {
              position: absolute;
              left: vw(12);
              bottom: 0;
              font-size: vw(14);
              color: #ff734c;
              font-weight: 500;
              span {
                margin-right: vw(10);
              }
              em {
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }

  .weilogin {
    color: #ff734c;
    font-size: vw(20);
    position: absolute;
    top: 40%;
    left: 10%;
  }
}
</style>
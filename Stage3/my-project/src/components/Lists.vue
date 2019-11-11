<template>
  <div class="product">
    <h3>送恋人/爱情鲜花</h3>
    <div class="product-list">
      <div class="product-item product-item-horizontal" v-for="(item,index) in list" :key="index">
        <a href="javascript:;" class="navigation">
          <div class="product-item-pic" @click="changeId(item.id)">
            <img :src="imageList(index)" alt />
          </div>
          <div class="product-item-info">
            <p class="product-item-info-name" v-text="item.descript"></p>
            <p class="product-item-info-desc" v-text="item.title"></p>
            <div class="product-item-info-promo" v-text="item.tag"></div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices" style="opacity: 1;">
                  <strong v-text="item.price"></strong>
                  <s>¥315</s>
                </p>
                <p class="product-item-info-sales" v-text="item.sale"></p>
              </div>
              <div class="product-item-info-bottom-right" :datdid="item.id">
                <van-icon name="shopping-cart-o" @click="addcar(item.id)" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="product-more">
      <router-link to="/list">
        <a href class="product-more-btn">查看更多</a>
      </router-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, Dialog } from "vant";
import qs from "qs";
Vue.use(Icon).use(Dialog);
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.listinfs();
  },
  methods: {
    async listinfs() {
      await this.$axios
        .get("http://localhost:3000/list")
        .then(({ data }) => {
          // window.console.log(data);
          data.forEach((element, index) => {
            if (index > 5) {
              this.list = this.list.concat(element);
            }
            return this.list;
          });
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    imageList(index) {
      return require(`../assets/sj${1 + index}.jpg`);
    },
    changeId(gid) {
      this.$router.push({
        path: "/detail", //路径
        query: { gid: gid }
      });
    },
    async addcar(gid) {
      //点击加入购物车
      // window.console.log(1);
      //发送ajax把当前数据传入数据库，如果未登录就弹出登陆后才可以加入购物车
      let token = localStorage.getItem("Authorization");
      if (token) {
        window.console.log(gid);
        let params = {
          gid,
          username: token,
          num: 1 //数量
        };
        params = qs.stringify(params);
        await this.$axios
          .post("http://localhost:3000/addcar", params)
          .then(({ data }) => {
            // window.console.log(data.inf);
            Dialog.alert({
              message: data.inf
            }).then(() => {
              // on close
            });
          })
          .catch(error => {
            window.console.log(error);
          });
      } else {
        Dialog.alert({
          message: "登陆后才可以加入购物车奥~"
        }).then(() => {
          // on close
        });
      }
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.product {
  h3 {
    height: vw(56);
    line-height: vw(56);
    text-align: center;
    font-size: vw(16);
    font-weight: 100;
  }
  .product-list {
    padding: 0 vw(10) vw(8);
    color: #232628;
    margin-bottom: vw(20);
    .navigation {
      box-shadow: 0 vw(2) vw(4) 0 #e9ecf0;
      border-radius: vw(2);
      display: flex;
      margin-bottom: vw(20);
      .product-item-pic {
        width: vw(176);
        height: vw(192);
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .product-item-info {
        flex: 1;
        max-width: vw(176);
        padding: 0 vw(20);
        position: relative;
        .product-item-info-name {
          padding-top: vw(18);
          color: #232628;
          margin: 0;
        }
        .product-item-info-desc {
          font-size: vw(12);
          margin: 0%;
          color: #232628;
        }
        .product-item-info-promo {
          margin-top: vw(12);
          padding: vw(10) 0;
          border-top: 1px solid #e9ecf0;
          border-bottom: 1px solid #e9ecf0;
          font-size: vw(10);
          font-weight: 500;
          color: #232628;
        }
        .product-item-info-bottom {
          height: vw(35);
          position: absolute;
          bottom: vw(20);
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .product-item-info-bottom-left {
            flex: 1;
            p {
              margin: 0;
              font-size: vw(10);
              color: #232628;
              strong {
                font-size: vw(14);
                color: #ff734c;
              }
              s {
                font-size: vw(10);
                margin-left: vw(2);
              }
            }
          }
          .product-item-info-bottom-right {
            margin-left: vw(50);
            font-size: vw(25);
            color: #232628;
          }
        }
      }
    }
  }
  .product-more {
    font-size: vw(14);
    margin-bottom: vw(80);
    a {
      display: block;
      margin: 0 auto;
      border: 1px solid #232628;
      width: vw(94);
      height: vw(24);
      line-height: vw(24);
      text-align: center;
      border-radius: vw(4);
      color: #232628;
    }
  }
}
</style>
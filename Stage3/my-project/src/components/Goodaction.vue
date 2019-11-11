<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="countNum" @click="gocart" />
      <van-goods-action-button color="#3D4D42" type="warning" text="加入购物车" @click="shows()" />
      <van-goods-action-button color="#FF734C;" type="danger" text="立即购买" />
    </van-goods-action>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>
<script>
import Vue from "vue";
import qs from "qs";
import {
  Sku,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Dialog
} from "vant";

// 全局注册
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Sku)
  .use(Toast)
  .use(Dialog);
export default {
  data() {
    return {
      show: false,
      countNum: "",
      gid: "",
      goodsId: "0",
      goods: {
        // 商品标题
        // title: "测试商品",
        // 默认商品 sku 缩略图
        picture: ""
      },
      quotaUsed: 0,
      quota: 1, //限购数量
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215",
                name: "白色",
                imgUrl: ""
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存,
          }
        ],

        price: "100", // 默认价格（单位元）
        stock_num: 99, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        hide_stock: false // 是否隐藏剩余库存,false不隐藏
      },
      skuData: {
        // 商品 id
        goodsId: "",
        // 选择的商品数量
        selectedNum: 1
        // 选择的 sku 组合
      }
    };
  },
  created() {
    this.addcar();
    this.carNum();
  },
  methods: {
    async addcar() {
      this.gid = this.$route.query.gid; //拿到地址栏的商品gid
      let params = {
        gid: this.gid
      };
      params = qs.stringify(params);
      await this.$axios
        .post("http://localhost:3000/detail", params)
        .then(({ data }) => {
          // window.console.log(data[0]);
          this.goodsId = data[0].id;
          this.sku.list[0].price = String(data[0].price.slice(1) * 100);
          this.sku.list[0].stock_num = data[0].kucun * 1;
          // window.console.log(this.sku.list[0].stock_num);
          this.goods.picture = require(`@/${data[0].imgUrl}`); //图片
          this.sku.tree[0].v[0].imgUrl = require(`@/${data[0].imgUrl}`);
          // window.console.log(this.sku.tree[0].v[0].imgUrl);
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    shows() {
      // window.console.log(this.show);
      this.show = !this.show;
      return this.show;
    },
    gocart() {
      this.$router.push("/cart");
    },
    async onAddCartClicked() {
      //点击加入购物车
      // window.console.log(1);
      //发送ajax把当前数据传入数据库，如果未登录就弹出登陆后才可以加入购物车
      let token = localStorage.getItem("Authorization");
      if (token) {
        this.gid = this.$route.query.gid; //拿到地址栏的商品gid
        // window.console.log(this.skuData.selectedNum);
        let params = {
          gid: this.gid,
          username: token,
          num: this.skuData.selectedNum //数量
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
            if (data.code) {
              this.countNum++;
            }
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
    },
    async carNum() {
      let token = localStorage.getItem("Authorization");
      if (token) {
        let params = {
          username: token
        };
        params = qs.stringify(params);
        await this.$axios
          .post("http://localhost:3000/carnum", params)
          .then(({ data }) => {
            // window.console.log(data);
            this.countNum = data;
          })
          .catch(error => {
            window.console.log(error);
          });
      }
    }
  }
};
</script>
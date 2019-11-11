<template>
  <div class="details" v-if="goodsinf.length>0">
    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">{{goodsinf[0].title}}</div>
      </div>
      <div class="proinfo-head-collect">
        <div class="text-orange">98%好评率，热销推荐</div>
        <!-- <van-icon name="star-o" /> -->
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </div>

      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg" v-text="goodsinf[0].price"></span>
          <s class="proinfo-body-price-jg">¥292</s>
        </div>
        <div class="proinfo-body-sales">
          已售
          <span v-text="goodsinf[0].sale"></span>件
        </div>
      </div>
    </section>
    <div class="media">
      <div class="media-left">
        <van-icon name="graphic" />
      </div>
      <div class="media-center">
        <font class="fontsize-16">
          APP下单立减
          <i>5</i> 元
        </font>
      </div>
      <div class="media-right">
        <van-icon name="arrow" />
      </div>
    </div>
    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div class="detailsinfo-item-desc" v-text="goodsinf[0].title"></div>
      </div>
      <div class="detailsinfo-item two">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">
          19枝香槟玫瑰，白色石竹梅10枝
          <br />
        </div>
      </div>
      <div class="detailsinfo-item two">
        <div class="detailsinfo-item-title">配送</div>
        <div class="detailsinfo-item-desc">全国</div>
      </div>
    </section>
    <section class="skuselect">
      <div class="media">
        <div class="media-left">配送至</div>
        <div class="media-center">
          <p>
            <van-icon name="location-o" @click="isshowinf()" />&nbsp;
            <span style="font-size:14px;">请选择配送地区</span>
          </p>
          <p class="media-desc"></p>
        </div>
        <div class="media-right">
          <van-icon name="ellipsis" />
        </div>
      </div>
      <van-area :area-list="areaList" v-show="isshow" />
    </section>
    <section class="panel">
      <div class="panel-head">
        <div class="panel-head-title">订单评价</div>
        <div class="panel-head-link">
          <a href="###">
            最近已有{{goodsinf[0].comment}}条评价
            <van-icon name="location-o" />
          </a>
        </div>
      </div>
      <div class="panel-body comments">
        <div class="comments-item">
          <div class="comments-item-head">
            <div class="comments-item-head-left">
              <img src="../assets/logo.png" alt="付*宇" class="comments-item-head-pic" />
              <span class="comments-item-head-name">付*宇</span>
            </div>
            <div class="comments-item-head-right">
              <van-icon name="star-o" />
            </div>
          </div>
          <div class="comments-item-content">早上送的时候朋友未接到电话，后面联系改了地址，也很快送达了，花很新鲜，十分满意！</div>
          <div class="comments-item-imglist">
            <div
              class="comments-item-imglist-item"
              style="background-image: url(&quot;//img.hua.com/reviewpic/app/2019/09/21/a894be44de254b7aa8d745fdd0bf839d.png&quot;);"
            ></div>
          </div>
          <div class="comments-item-address">
            <van-icon name="location-o" />福建福州市台江区
          </div>
        </div>
      </div>

      <div class="panel-footer">
        <div class="comments-more">
          <a href="###" title="查看更多评价">查看更多评价</a>
        </div>
      </div>
    </section>
    <section class="well mt-8">
      <div class="well-title">
        <h4 class="well-title-linename">为什么选择我们</h4>
      </div>
      <div class="well-body">
        <ul class="brandlist">
          <li class="brandlist-item">
            <img src="../assets/xz1.png" />
            <p>获评鲜花龙头企业</p>
          </li>
          <li class="brandlist-item">
            <img src="../assets/xz2.png" />
            <p>当日新鲜花材制作</p>
          </li>
          <li class="brandlist-item">
            <img src="../assets/xz3.png" />
            <p>赛事冠军花艺师团队</p>
          </li>
          <li class="brandlist-item">
            <img src="../assets/xz4.png" />
            <p>严选花材</p>
          </li>
          <li class="brandlist-item">
            <img src="../assets/xz5.png" />
            <p>12道严苛品控标准</p>
          </li>
          <li class="brandlist-item">
            <img src="../assets/xz6.png" />
            <p>500万用户信赖好评</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="panel">
      <div class="panel-head">
        <div class="panel-head-title">图文详情</div>
      </div>
      <div class="panel-body">
        <div class="proimgdetails">
          <img src="../assets/bon1.jpg" alt="产品详情图" style />
          <img src="../assets/bon2.jpg" alt="产品详情图" style />
          <img src="../assets/bon3.jpg" alt="产品详情图" style />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, Area } from "vant";
Vue.use(Icon).use(Area);

import qs from "qs";
export default {
  data() {
    return {
      value: 3.7,
      gid: "",
      goodsinf: [],
      isshow: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
          // ....
        }
      },
      code: [
        {
          code: "110000",
          name: "北京市"
        },
        {
          code: "110100",
          name: "北京市"
        },
        {
          code: "110101",
          name: "东城区"
        }
      ]
    };
  },
  created() {
    this.detailinf();
  },
  methods: {
    isshowinf() {
      this.isshow = !this.isshow;
    },
    async detailinf() {
      this.gid = this.$route.query.gid; //拿到地址栏的商品gid
      let params = {
        gid: this.gid
      };
      params = qs.stringify(params);
      // window.console.log(this.gid);
      await this.$axios
        .post("http://localhost:3000/detail", params)
        .then(({ data }) => {
          this.goodsinf = data;
          // window.console.log(this.goodsinf); //拿到对应的数据渲染
          return this.goodsinf;
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.details {
  background: #e6e6e6;
  margin-bottom: vw(50);
  .proinfo {
    padding: vw(12) vw(16);
    background: #fff;
    margin-bottom: vw(5);
    font-size: vw(14);
    .proinfo-head {
      .proinfo-head-title {
        font-size: vw(18);
      }
    }
    .proinfo-head-collect {
      height: 100%;
      display: flex;
      margin-top: vw(10);
      margin-bottom: vw(10);
      .text-orange {
        flex: 1;
        font-size: vw(16);

        color: #ff734c;
        text-align: left;
      }
    }

    .proinfo-body {
      display: flex;
      align-items: center;
      .proinfo-body-price {
        flex: 1;
        .proinfo-body-price-sjg {
          font-size: vw(18);
          color: #ff734c;
          font-weight: 600;
        }
        .proinfo-body-price-jg {
          color: #b4babf;
          margin-left: vw(6);
          font-size: vw(12);
          margin-right: vw(16);
        }
      }
    }
  }
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
      margin-right: vw(10);
    }
    .media-center {
      flex: 1;
      .fontsize-16 {
        font-size: vw(14);
      }
    }
    .media-right {
      width: vw(20);
      text-align: right;
      font-size: vw(18);
    }
  }
  .detailsinfo {
    margin-top: vw(8);
    background: #fff;
    padding: vw(8) vw(16);
    font-size: vw(14);
    margin-bottom: vw(5);
    .detailsinfo-item {
      position: relative;
      display: flex;

      .detailsinfo-item-title {
        width: vw(42);
        font-weight: 500;
        color: #232323;
        padding: vw(12) 0;
      }
      .detailsinfo-item-desc {
        flex: 1;
        padding: vw(12) 0;
        font-size: vw(12);
        justify-content: center;
      }
    }
    .two {
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 2.85714286rem;
        right: 0;
        height: 0;
        border-bottom: 1px solid #e9ecf0;
      }
    }
  }
  .skuselect {
    margin-top: vw(8);
    margin-bottom: vw(5);
  }
  .panel {
    background-color: #fff;
    margin-top: vw(8);
    .panel-head {
      display: flex;
      align-items: center;
      padding: vw(12) vw(16);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .panel-head-title {
        flex: 1;
      }
      .panel-head-link {
        flex: 1;
        text-align: right;
        a {
          font-size: vw(12);
          color: #71797f;
        }
      }
    }
    .comments {
      border-top: 1px solid #e9ecf0;
      .comments-item {
        padding: vw(12) vw(16);
        background-color: #fff;
        .comments-item-head {
          display: flex;
          align-items: center;
          .comments-item-head-left {
            flex: 1;
            img {
              width: vw(20);
              height: vw(20);
              border-radius: 50%;
              vertical-align: middle;
              overflow: hidden;
            }
            span {
              font-size: vw(10);
              margin-left: vw(10);
            }
          }
          .comments-item-head-right {
            width: vw(60);
            height: vw(10);
            font-size: vw(10);
            overflow: hidden;
            text-align: right;
          }
        }
        .comments-item-content {
          margin-top: vw(12);
          font-size: vw(14);
        }
        .comments-item-imglist {
          margin-top: vw(14);
          display: flex;
          position: relative;
          .comments-item-imglist-item {
            flex: 1;
            max-width: vw(80);
            height: vw(80);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
        }
        .comments-item-address {
          margin-top: vw(8);
          color: #b4babf;
          font-size: vw(10);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .panel-footer {
      .comments-more {
        text-align: center;
        padding: vw(8) vw(24);
        padding-bottom: vw(30);
        a {
          display: inline-block;
          font-size: vw(14);
          color: #232323;
          border: 1px solid #232628;
          padding: vw(4) vw(8);
        }
      }
    }
  }
  .well {
    background-color: #fff;
    margin-top: vw(8);
    overflow: hidden;
    .well-title {
      text-align: center;
      padding: vw(24) vw(16) vw(14);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      h4 {
        display: inline-block;
        font-size: vw(16);
        font-weight: 400;
        padding: 0 vw(12);
      }
    }
    .well-body {
      box-sizing: border-box;
      padding: 0 vw(10) vw(10);
      ul {
        display: block;
        list-style: none;
        height: vw(220);
        clear: both;
        li {
          float: left;
          width: 33.33333333%;
          text-align: center;
          margin-top: vw(24);
          img {
            width: vw(64);
            height: vw(64);
          }
          p {
            font-size: vw(10);
            padding: vw(2) 0 vw(4);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .proimgdetails {
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
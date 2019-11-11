<template lang="">
  <div class="main">
   <div class="userinformation  ">
        <div class="userinformation-notlogin" >
          <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
          <div class="userinformation-notlogin-gologin" v-show="isshow==true" >    
            <div class="log">
              <img src="../assets/list6.jpg"/>
              <span v-text="token +'      欢迎您~'"></span>
              <el-button type="text" class="del">
                    <span class="exit" @click="exit">点击退出</span>
               </el-button>
              
            </div>
          </div>
          <!-- :style="{display:isreturn()==true?'none':'block'} -->
          <p class="userinformation-notlogin-gologin wei" v-show="isshow==false"   >
              <router-link  to="/login">
              <a href="javascript:;"  style="font-size:16px">登录</a>
              </router-link>/
              <router-link  to="/reg">
                <a href="javascript:;" style="font-size:16px">注册</a>
              </router-link>
          </p>
        </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-title">我的订单</div>
                <div class="panel-head-right">
                  全部订单 >
                </div>
            </div>
            <div class="panel-body">
                <div class="order">
                    <div class="order-item">
                        <a href="/Member/Order?oper=dfk" class="navigation">
                            <img class="order-item-icon" src="../assets/bg1.png">
                            <p class="order-item-txt">待付款</p>
                        </a>
                    </div>
                    <div class="order-item">
                        <a href="/Member/Order?oper=jrps" class="navigation">
                            <img class="order-item-icon" src="../assets/bg2.png">
                            <p>今日配送</p>
                        </a>
                    </div>
                    <div class="order-item">
                        <a href="/Member/Order?oper=dpj" class="navigation">
                            <img class="order-item-icon" src="../assets/bg3.png">
                            <p>待评价</p>
                        </a>
                    </div>
                    
                </div>
            </div>

        </div>
        <div class="panel1">
            <van-grid :column-num="4">
            <van-grid-item
                v-for="(item,index) in icons"
                :key="index"
                :icon="item.icon"
                :text="item.text"
                icon-size="10px"
            />
        </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import { Grid, GridItem, Skeleton } from "vant";

Vue.use(Grid)
  .use(GridItem)
  .use(Skeleton);
export default {
  data() {
    return {
      icons: [
        {
          icon: "bill-o",
          text: "优惠卷"
        },
        {
          icon: "vip-card-o",
          text: "权益卡"
        },
        {
          icon: "after-sale",
          text: "余额"
        },
        {
          icon: "diamond-o",
          text: "会员积分"
        },
        {
          icon: "location-o",
          text: "收货地址"
        },
        {
          icon: "clock-o",
          text: "生日提醒"
        },
        {
          icon: "star-o",
          text: "我的收藏"
        },
        {
          icon: "tosend",
          text: "浏览历史"
        },
        {
          icon: "service-o",
          text: "联系客服"
        },
        {
          icon: "question-o",
          text: "帮助中心"
        },
        {
          icon: "warning-o",
          text: "关于花礼"
        },
        {
          icon: "setting-o",
          text: "设置"
        }
      ],
      token: localStorage.getItem("Authorization"),
      isshow: false
    };
  },
  created() {
    this.isreturn();
  },
  methods: {
    isreturn() {
      // window.console.log(this.token);
      // this.token = localStorage.getItem("Authorization");
      if (this.token === "" || this.token === null) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    },
    exit() {
      this.$confirm("您确定要退出吗, 是否继续?", "花花提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          localStorage.removeItem("Authorization");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.main {
  width: 100%;
  background: url(../assets/bg.png) no-repeat;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% vw(150);
  font-size: vw(10);
  .userinformation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    height: vw(132);
    .userinformation-notlogin-hi {
      text-align: center;
      font-size: vw(16);
      color: #fff;
    }
    .userinformation-notlogin-gologin {
      a {
        color: black;
      }
    }
    .wei {
      background-color: #fff;
      margin-top: vw(8);
      height: vw(36);
      line-height: vw(36);
      text-align: center;

      border-radius: vw(40);
    }
  }
  .log {
    width: 100%;

    img {
      width: vw(64);
      height: vw(64);
      box-sizing: border-box;
      margin-right: vw(10);
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      font-size: vw(16);
      margin-left: vw(10);
    }
    .exit {
      text-align: center;
      display: inline-block;
      color: #ff734c;
      border-radius: vw(10);
      margin-left: vw(50);
      font-size: vw(16);
      height: vw(20);
      width: vw(80);
      line-height: vw(20);
      background-color: #fff;
    }
  }
  .panel {
    background: #fff;
    margin: 0 vw(8);
    border-radius: vw(4);
    overflow: hidden;
    box-shadow: 0 vw(7) vw(14) 0 #dee2e5;
    .panel-head {
      display: flex;
      width: 100%;
      height: vw(44);
      line-height: vw(44);
      padding: 0 vw(16);
      overflow: hidden;
      position: relative;

      .panel-head-title {
        flex: 1;
        font-size: vw(14);
        font-weight: 400;
      }
      .panel-head-right {
        flex: 1;
        font-size: vw(14);
        text-align: right;
        margin-right: vw(20);
        font-weight: 400;
      }
    }
    .panel-body {
      border: 0;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      .order {
        display: flex;
        align-items: center;
        .order-item {
          flex: 1;
          max-width: 32%;
          text-align: center;
          padding: vw(12) vw(6);
          position: relative;
          font-size: vw(12);
          a {
            display: block;
            p {
              color: black;
              border: 0;
              padding: 0;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            img {
              width: vw(52);
              height: vw(52);
            }
          }
        }
      }
    }
  }
  .panel1 {
    margin-top: vw(20);
    background: #fff;
    font-size: vw(10);
    border-radius: vw(4);
    overflow: hidden;
  }
}
</style>
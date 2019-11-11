<template lang="">
    <div class="reg">
       <div><van-icon name="cross" @click="back" /></div>
       <div class="zhuce">手机号注册</div>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          ref="username"
           @blur=" register(username) "
          placeholder="请输入用户名"
           :right-icon="ushows"
        />
        <van-cell-group>
          <van-field
              v-model="phone"
              required
              clearable
              label="手机号" 
              @blur="sendSmsCode(phone)"            
             ref="phone"
              placeholder="请输入手机号"
              :right-icon="shows"
          >
            <!-- <van-button slot="button" size="small" type="primary">发送验证码</van-button> -->
          </van-field>
        <van-cell-group>
        <!-- <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
           >
          
        </van-field> -->
        </van-cell-group>
        <van-field
            v-model="password"
            type="password"
            label="密码"
             ref="password"
            placeholder="请输入密码" 
             :right-icon="pshows"
             @blur="pswCode(password)" 
            required />
    </van-cell-group>
   <div class="btns">  <input type="button" class="btn" value="注册"  @click="regs()"/></div>
    </div>
    
</template>
<script>
import Vue from "vue";
import { Field, Button, Icon, CellGroup, Toast } from "vant";
Vue.use(Field)
  .use(Button)
  .use(Icon)
  .use(CellGroup)
  .use(Toast);
import qs from "qs";
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      shows: "",
      ushows: "",
      pshows: "",
      uoks: false,
      oks: false,
      poks: false
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    register(username) {
      //用户名正则，4到16位（字母，数字，下划线，减号）
      var reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!username) {
        //未输入
        Toast("请输入用户名");
        return;
      }
      if (!reg.test(username)) {
        //不合法
        Toast("您输入的用户名不合法，请重新输入");
        this.username = "";
        this.$refs.username.focus();
      } else {
        this.ushows = "success";
        this.uoks = true;
      }
    },
    sendSmsCode(phone) {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/; //手机号正则验证
      if (!phone) {
        //未输入手机号
        Toast("请输入手机号码");
        return;
      }
      if (!reg.test(phone)) {
        //手机号不合法
        this.phone = "";
        this.$refs.phone.focus();
        Toast("您输入的手机号码不合法，请重新输入");
      } else {
        this.shows = "success";
        this.oks = true;
      }
    },
    pswCode(password) {
      //密码不能含有非法字符，长度在4-10之间
      var reg = /^[a-zA-Z0-9]{4,10}$/;
      if (!password) {
        //未输入手机号
        Toast("请输入密码");
        return;
      }
      if (!reg.test(password)) {
        //密码不合法
        this.password = "";
        this.$refs.password.focus();
        Toast("您输入的密码格式不合法，密码不能含有非法字符，长度在4-10之间");
        password = "";
      } else {
        this.pshows = "success";
        this.poks = true;
      }
    },
    regs() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });
      let _this = this;
      if (_this.oks && _this.uoks && _this.poks) {
        let params = {
          username: _this.username,
          password: _this.password,
          phone: _this.phone
        };
        // window.console.log(params);
        params = qs.stringify(params);
        this.$axios
          .post("http://localhost:3000/reg", params)
          .then(({ data }) => {
            // window.console.log(data.code);

            if (data.code) {
              Toast("您输入的用户名太受欢迎了，请换一个名字吧");
              // window.console.log(data.code);
            } else {
              // window.alert("注册成功");
              Toast.success("注册成功，请先登录");
              _this.$router.push("/login"); //成功就跳转到登录页
            }
          })
          .catch(error => {
            window.console.log(error);
          });
      } else {
        Toast("*号内容不能为空");
      }
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.reg {
  padding: vw(10);
}
.btns {
  text-align: center;
  margin-top: vw(50);
  width: 100%;
  .btn {
    width: 80%;
    height: vw(46);
    line-height: vw(46);
    text-align: center;
    color: #fff;
    background: #ff734c;
    border: 1px solid #ff734c;
    font-size: vw(16);
    box-shadow: 0 vw(4) vw(6) 0 #ffb6a2;
    border-radius: vw(100);
    outline: none;
  }
}
.zhuce {
  font-size: vw(20);
  line-height: vw(30);
  height: vw(30);
  text-align: center;
  margin-bottom: vw(40);
  margin-top: vw(10);
}
</style>
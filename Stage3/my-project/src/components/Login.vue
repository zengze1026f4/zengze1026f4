<template lang="">
   <div class="login">
       <div class="logos">
                <img src="../assets/logo.png" />
           </div>
        <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required />
            </van-cell-group>
        <div class="loginbtns" >
             <input type="button" class="loginbtn" @click="login()" value="登录"/>
      </div>
          <router-link  to="/reg">
            <div class="regs">没有账号？马上注册</div>
          </router-link>
      </div>
   </template>
<script>
import Vue from "vue";
import qs from "qs";
import { mapMutations } from "vuex";
import { Field, Button, Icon, CellGroup, Toast } from "vant";
Vue.use(Field)
  .use(Button)
  .use(Icon)
  .use(CellGroup)
  .use(Toast);
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
      let token = localStorage.getItem("Authorization");
      // window.console.log(token);
      if (token) {
        Toast("你已经登陆过了");
        // this.$router.go(-1);
      } else {
        Toast.loading({
          message: "登录中...",
          forbidClick: true
        });
        if (this.username === "" || this.password === "") {
          Toast("账号或密码不能为空");
        } else {
          let params = {
            username: this.username,
            password: this.password
          };
          params = qs.stringify(params);
          this.$axios
            .post("http://localhost:3000/login", params)
            .then(({ data }) => {
              if (data.code) {
                //为零密码错误
                // window.console.log(data);
                Toast("密码错误");
              } else {
                this.userToken = this.username; //Bearer令牌是。。。
                // 将用户token保存到vuex中
                this.changeLogin({ Authorization: this.userToken });
                Toast.success("登陆成功，欢迎来到花花~");
                this.$router.push("/");
                // window.alert("登陆成功");
              }
            })
            .catch(error => {
              window.console.log(error);
            });
        }
      }
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}

.login {
  padding: vw(10);
  overflow: hidden;
  .logos {
    text-align: center;
    margin-bottom: vw(40);
    margin-top: vw(20);
    img {
      width: vw(190);
      height: vw(25);
      vertical-align: middle;
    }
  }
  .loginbtns {
    text-align: center;
    margin-top: vw(50);
    width: 100%;
    .loginbtn {
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
}
.regs {
  margin-top: vw(20);
  font-size: vw(10);
}
</style>
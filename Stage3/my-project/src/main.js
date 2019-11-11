import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import router from './routers'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // stores,
  render: h => h(App),
}).$mount('#app')

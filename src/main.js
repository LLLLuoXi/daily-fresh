/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 22:20:53
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import Vant from "vant";
import "vant/lib/index.css";
import api from "./api";

Vue.prototype.$api = api
Vue.use(Vant);

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

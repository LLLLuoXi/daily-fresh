/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-10 21:36:41
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

Vue.use(Vant);

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-18 22:14:50
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import Classify from "../views/Classify/index.vue";
import Shopping from "../views/Shopping/index.vue";
import Search from "../views/Search/index.vue";

VueRouter.prototype.back = false
VueRouter.prototype.goBack = function goBack() {
  this.back = true
  this.go(-1)
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'classify',
        name: 'classify',
        component: Classify
      },
      {
        path: 'shopping',
        component: Shopping
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '*',
    redirect: '/home/classify'
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

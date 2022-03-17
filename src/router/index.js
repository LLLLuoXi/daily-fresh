/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 21:52:12
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import Classify from "../views/Classify/index.vue";
import Shopping from "../views/Shopping/index.vue";
import Search from "../views/Search/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'classify',
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

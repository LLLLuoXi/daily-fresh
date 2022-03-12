/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-12 22:14:56
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import Classify from "../views/Classify/index.vue";
import Shopping from "../views/Shopping/index.vue";

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

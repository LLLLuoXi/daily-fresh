<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-15 23:45:59
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="tab-bar-container">
    <van-tabbar fixed route>
      <van-tabbar-item icon="bag-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
      <van-tabbar-item
        icon="cart-o"
        to="/home/shopping"
        :badge="badge"
        id="shop-car"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    badge() {
      const count = Object.values(this.counterMap).reduce(
        (prev, next) => prev + next,
        0
      );
      if (count > 99) {
        return "99+";
      }
      return count;
    },
  },
};
</script>

<style>
</style>
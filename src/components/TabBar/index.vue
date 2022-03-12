<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-12 22:00:41
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="tab-bar-container">
    <van-tabbar fixed route>
      <van-tabbar-item icon="bag-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/home/shopping"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
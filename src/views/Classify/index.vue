<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-13 01:49:10
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="classify-container">
    <div class="search-btn">
      <van-icon name="search" />
      <span>苹果特价9.9</span>
    </div>
    <OneTab />
    <SideBar />
  </div>
</template>

<script>
import OneTab from "@/components/OneTab";
import SideBar from "@/components/SideBar";
export default {
  components: { OneTab, SideBar },
};
</script>

<style lang="less" scope>
.classify-container {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
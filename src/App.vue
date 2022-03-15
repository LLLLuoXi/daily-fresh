<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-15 22:51:33
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
export default {
  components: { TabBar },
  created() {
    const counterMap = JSON.parse(localStorage.getItem("goods")) || {};
    this.$store.commit("setCounterMap", counterMap);
  },
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>

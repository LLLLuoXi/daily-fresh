<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-10 22:14:11
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
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>

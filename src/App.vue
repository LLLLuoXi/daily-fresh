<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-18 23:08:10
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div id="app">
    <transition
      :name="transitionName"
      :mode="this.$router.back ? 'out-in' : 'in-out'"
    >
      <router-view class="view" />
    </transition>

    <TabBar />
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
export default {
  data() {
    return {
      transitionName: "left",
    };
  },
  components: { TabBar },
  created() {
    const counterMap = JSON.parse(localStorage.getItem("goods")) || {};
    this.$store.commit("setCounterMap", counterMap);
  },
  watch: {
    $route(to, from) {
      console.log("this.transitionName", this.transitionName);
      if (to.name === "classify" && from.name === "search") {
        this.$router.back = true;
      }
      if (this.$router.back) {
        this.transitionName = "right";
      } else {
        this.transitionName = "left";
      }
      this.$router.back = false;
    },
  },
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}
.left-enter {
  transform: translate(100%, 0);
}
.right-leave-to {
  transform: translate(100%, 0);
}
</style>

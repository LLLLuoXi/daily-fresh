<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-18 22:35:40
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="classify-container">
    <router-link class="search-btn" tag="div" to="/search">
      <van-icon name="search" />
      <span>苹果特价9.9</span>
    </router-link>
    <OneTab />
    <SideBar />
    <template v-if="showContent">
      <SideBar />
      <GoodsList />
    </template>
    <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import OneTab from "@/components/OneTab";
import SideBar from "@/components/SideBar";
import GoodsList from "@/components/GoodsList";

export default {
  components: { OneTab, SideBar, GoodsList },
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      setSideList: (state) => state.setSideList,
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(["resetGoodsList"]),
    ...mapActions(["getGoodsList"]),
  },
  watch: {
    showContent() {
      if (this.showContent == true) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: "all" });
      }
    },
  },
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
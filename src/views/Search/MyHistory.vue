<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-18 23:17:42
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="history-container">
    <h4>历史记录</h4>
    <div
      class="his-item"
      v-for="item in searchList"
      :key="item.time"
      @click="search(item.value)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHistory",
  props: {
    searchList: {
      default: () => [],
    },
  },
  methods: {
    search(value) {
      this.$emit("search", value);
    },
  },
};
</script>

<style lang="less" scope>
.history-container {
  h4 {
    margin: 10px 0 0 10px;
  }
  .his-item {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #eee;
    border-radius: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    display: inline-block;
    letter-spacing: 3px;
    // font-weight: bold;
  }
}
</style>
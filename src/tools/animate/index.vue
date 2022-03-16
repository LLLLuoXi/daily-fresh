<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 00:11:26
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div
    v-if="exist"
    class="item"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      opcity: opcity,
      transform: `translate(${moveX}px, ${moveY}px) scale(${sx}, ${sy})`,
    }"
  >
    <img :src="src" />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.moveX, this.opcity);
  },
};
</script>

<style lang="less" scope>
.item {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.7s;
  transform-origin: 0% 0%;
}
img {
  width: 100%;
  border-radius: 50%;
}
</style>
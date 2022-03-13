<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-13 21:41:30
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <div class="side-bar-container" ref="side">
    <div
      v-for="(item, i) in sideList"
      :key="item"
      :class="{ active: index === i }"
      @touchend="scrollTo(i, $event)"
      @touchstart="isMoving = false"
      @touchmove="isMoving = true"
    >
      {{ i === 0 ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import tool from "../../utils/tool";
export default {
  data() {
    return {
      isMoving: false,
      index: 0,
    };
  },
  computed: {
    ...mapState({
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    scrollTo(i, e) {
      if (this.isMoving) {
        return;
      }
      this.index = i;
      const { side } = this.$refs;
      const sonTop = e.target.getBoundingClientRect().top;
      const sonHeight = e.target.offsetHeight;
      const pTop = side.getBoundingClientRect().top;
      const pHeight = side.offsetHeight;
      // side.scrollTop += sonTop + sonHeight / 2 - pTop - pHeight / 2;
      tool.moveTo(
        side.scrollTop,
        sonTop + sonHeight / 2 - pTop - pHeight / 2,
        side,
        "scrollTop"
      );
    },
  },
};
</script>

<style scoped lang="less">
.side-bar-container {
  position: fixed;
  left: 0;
  top: 145px;
  bottom: 50px;
  width: 79px;
  overflow: auto;
  background-color: #f8f8f8;
  &::-webkit-scrollbar {
    width: 0px;
    background: none;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 6px;
    height: 18px;
    background-color: #ff1a90;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  div {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
  }
}
</style>

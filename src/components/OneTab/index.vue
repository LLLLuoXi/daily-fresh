<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-13 21:39:31
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="one-tabar-container" ref="oneTab">
    <div
      class="tab-item"
      :class="{ active: index == i }"
      v-for="(item, i) in menuList"
      :key="item.title"
      @touchend="scrollTo(i, $event)"
      @touchstart="isMoving = false"
      @touchmove="isMoving = true"
    >
      <div class="img-container">
        <img :src="item.imgURL" />
      </div>
      <div class="tab-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import tool from "../../utils/tool";
export default {
  data() {
    return {
      menuList: [
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "http://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
      ],
      index: 0,
      isMoving: false,
    };
  },
  methods: {
    ...mapActions(["getSideList"]),
    scrollTo(i, e) {
      if (this.isMoving) {
        return;
      }
      this.index = i;
      const { oneTab } = this.$refs;
      const itemWidth = e.target.offsetWidth;
      const itemLeft = e.target.getBoundingClientRect().left;
      const containerWidth = oneTab.offsetWidth;
      //   oneTab.scrollLeft += itemWidth / 2 + itemLeft - containerWidth / 2;
      tool.moveTo(
        oneTab.scrollLeft,
        itemWidth / 2 + itemLeft - containerWidth / 2,
        oneTab,
        "scrollLeft"
      );
      console.log("i", i);
      this.getSideList(this.menuList[i].title);
    },
  },
  mounted() {
    this.getSideList(this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.one-tabar-container {
  width: 375px;
  height: 104px;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
    background: none;
  }
  .tab-item {
    width: 50px;
    height: 70px;
    padding: 10px 5px;
    &.active {
      .img-container {
        border-color: #d13193;
      }
      .tab-title {
        color: #fff;
        background-color: #d13193;
        font-weight: bold;
        border-radius: 30px;
      }
    }
    .img-container {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-width: 2px;
      border-style: solid;
      border-color: #fff;
      border-radius: 23px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        align-self: center;
      }
    }
    .tab-title {
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>
<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-12 23:19:11
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
      this.moveTo(
        oneTab.scrollLeft,
        itemWidth / 2 + itemLeft - containerWidth / 2
      );
      console.log("i", i);
    },
    moveTo(start, end) {
      let dis = 0;
      let speed = 5;
      if (end < 0) {
        speed *= -1;
      }
      const t = setInterval(() => {
        dis += speed;
        this.$refs.oneTab.scrollLeft = start + dis;
        if (Math.abs(dis) > Math.abs(end)) {
          this.$refs.oneTab.scrollLeft = start + end;
          clearInterval(t);
        }
      }, 2);
    },
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
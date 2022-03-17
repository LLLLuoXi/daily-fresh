<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-17 22:08:07
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="search-wrapper">
    <div class="search-head">
      <van-icon name="arrow-left" class="arr-left" />
      <van-search
        class="search-content"
        v-model="value"
        :placeholder="place"
        @search="onSearch"
        @cancel="onCancel"
        @input="inputDebounce"
        @focus="focus"
      />
      <div @touchend="onSearch(value)" v-if="!showList">搜索</div>
      <van-icon
        name="cart-o"
        id="shop-car"
        class="shop-car"
        :badge="badge"
        v-else
      />
    </div>
    <div class="like-search" v-if="likeList.length && !showList">
      <van-list>
        <van-cell v-for="item in likeList" :key="item" @click="onSearch(item)">
          <template>
            <span class="custom-title" v-html="formatHTML(item)"></span>
          </template>
        </van-cell>
      </van-list>
    </div>
    <div class="goods-list" v-if="showList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <GoodsCard
          v-for="item in goodsList"
          :key="item.id"
          v-bind="item"
          :num="counterMap[item.id]"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import tool from "../../utils/tool";
import GoodsCard from "@/components/GoodsList/GoodsCard.vue";
export default {
  data() {
    return {
      place: "酒",
      value: this.place,
      likeList: [],
      loading: false,
      finished: false,
      page: 1,
      size: 5,
      goodsList: [],
      showList: false,
      total: 0,
    };
  },
  components: { GoodsCard },
  computed: {
    ...mapState({ counterMap: (state) => state.counterMap }),
    badge() {
      const count = Object.values(this.counterMap).reduce(
        (prev, next) => prev + next,
        0
      );
      if (count > 99) {
        return "99+";
      }
      return count;
    },
  },
  created() {
    this.inputDebounce = tool.debounce(this.getlikeList, 300);
    // console.log("this.inputDebounce", this.inputDebounce);
  },
  mounted() {
    // console.log("this.inputDebounce", this.inputDebounce);
  },
  methods: {
    async onLoad() {
      console.log("onload");
      this.showList = false;
      let { value, page, size } = this;
      const result = await this.$api.search(value, page, size);
      console.log(result);
      this.goodsList = [...this.goodsList, ...result.list];
      this.showList = true;
      this.total = result.total;
      this.loading = false;
      if (this.goodsList.length >= this.total) {
        this.finished = true;
      } else {
        this.page += 1;
      }
    },
    onSearch(value) {
      console.log("value", value);
      if (value === "") {
        this.value = this.place;
      } else {
        this.value = value;
      }
      this.likeList = [];
      this.page = 1;
      this.finished = false;

      this.onLoad();
    },
    // 防抖
    async input() {
      if (this.value === "") {
        this.likeList = [];
        return;
      }
    },
    async getlikeList() {
      console.log("执行了");
      const value = await this.$api.likeSearch(this.value);
      this.likeList = value.result;
    },

    focus() {
      this.showList = false;
    },
    onCancel() {},
    formatHTML(item) {
      console.log("item", item);
      const reg = new RegExp(this.value, "g");
      console.log("reg", reg);
      return item.replace(reg, this.value.fontcolor("red"));
      // console.log(item.replace(reg, this.value.fontcolor("red")));
    },
  },
};
</script>

<style lang="less" scope>
.search-wrapper {
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #fff;
  .search-head {
    width: 345px;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 15px;
    z-index: 22px;
    .arr-left {
      font-size: 22px;
    }
    .search-content {
      flex: 1;
    }
    .shop-car {
      font-size: 18px;
    }
  }
  .like-search {
    position: relative;
    top: 50px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 30px;
  }
  .goods-list {
    position: relative;
    width: 345px;
    margin: 48px auto 0;
    z-index: 10;
    background-color: #fff;
  }
}
</style>
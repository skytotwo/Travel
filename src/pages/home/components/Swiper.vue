<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array   // 获取到父组件传递的值
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      // swiperList: [{ // 指定循环数据
      //   id: '0001',
      //   imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
      // },{
      //   id: '0002',
      //   imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg"
      // }]
    }
  },
  computed: {
    showSwiper () {  // 如果加载好了才展示
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active /*样式穿透，因为不能直接控制，对应的class名字在swiper里面，我们不可见，需要下到swiper里面*/
      background: #fff
  .wrapper /*保持轮播图占位，宽高比*/
    width: 100%
    height: 0
    padding-bottom: 29%  /*宽高比*/
    background: #eee /*在图片没有加载出来的时候，给定一个默认背景色*/
    .swiper-img
      width: 100%
</style>

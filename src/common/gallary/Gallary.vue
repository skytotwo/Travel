<template>
  <div class="container" @click="handleGallaryClick">  <!--点击画廊组件，传值给父亲组件，关闭画廊组件-->
    <div class="wrapper">  <!--利用swiper来实现轮播效果-->
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',  // 定义下标分页显示为 1/3 的形式
        observeParents: true,  // 当监听到父组件dom元素发生变化时，就刷新swiper
        observer: true  // 一样
      }
    }
  },
  methods: {
    handleGallaryClick () {  // 点击图片表示关闭，传值给banner组件标识关闭
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex  //弹性盒子模型
    flex-direction: column
    justify-content: center  // 表示在中部
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

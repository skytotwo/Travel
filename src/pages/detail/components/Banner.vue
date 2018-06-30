<template>
  <div>
    <div class="banner" @click="handleBannerClick">  <!--点击出现画廊组件-->
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63e;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>  <!--定义动画组件，将轮播组件插入-->
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>  <!--使用画廊组件并且将数据传递过去-->
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'  // 引入共用图片画廊组件
import FadeAnimation from 'common/fade/FadeAnimation'  // 引入自定义的动画效果
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,  // 默认隐藏这个组件，因为需要在点击banner的时候才出来 
    }
  },
  methods: {
    handleBannerClick () {  // 点击banner的时候显示画廊组件
      this.showGallary = true
    },
    handleGallaryClose () {  // 当画廊组件点击，传值close告知banner时，关闭画廊组件
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))  //渐变效果
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>

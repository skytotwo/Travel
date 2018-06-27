<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>  <!--显示的返回小圆点-->
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >  <!--显示主内容的header--> 
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,  // 定义header是否显示
      opacityStyle: {
        opacity: 0  // 隐藏显示过度样式，0代表透明
      }
    }
  },
  methods: {
    handleScroll () {  // 调用滚动方法
      const top = document.documentElement.scrollTop  // 滑动时，获取滚动的高度（被卷去的高度）
      if (top > 60) {  // 根据滑动，不断进行判断，动态给过度属性opacityStyle赋值，以实现渐隐渐现的效果
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false  // 隐藏
      } else {
        this.showAbs = true  // 显示
      }
    }
  },
  activated () {  // 因为页面是keepalive的，这里表示页面显示
    window.addEventListener('scroll', this.handleScroll)  // 绑定全局事件，调用方法
  },
  deactivated () {  // 因为页面是keepalive的，这里表示页面隐藏
    window.removeEventListener('scroll', this.handleScroll)  // 对全局事件进行解绑（很重要），调用方法
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs  // banner中圆点的样式
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed  // header的样式
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back  // header中返回的样式
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>

<template>
  <div class="list" ref="wrapper">  <!--使用better-scroll必须在节点外添加一个div，用ref绑定dom-->
    <!--ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。
    如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例-->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key"> <!--循环对象，第二个参数就是key-->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"  v-for="innerItem in item" :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {  // 页面加载完dom
    this.scroll = new Bscroll(this.$refs.wrapper)  // 创建一个better-scroll实例，将dom节点传进去
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  watch: { // 监听器
    letter() {  // 监听字母组件--父组件传递过来的值，有变化就触发
      if (this.letter) {
        const element = this.$refs[this.letter][0]  // 取出传入的字母的所在循环节点区域，[0]取出一个dom元素
        this.scroll.scrollToElement(element)  // 将该dom元素传入scroll定义的方法里，显示该字母城市区域
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before  // 这个伪元素在真正页面元素内部之前添加新内容
      border-color: #ccc
    &:after  // 这个伪元素在真正页面元素内部之后添加新内容
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title  // 标题样式
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button  // 按钮样式
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

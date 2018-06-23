<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array  // 获取到父组件传递的值
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
  //       title: '签到广州长隆',
  //       desc: '来广州来长隆，就对了，就够了~'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/96/c5401993cd3b48.jpg_r_640x214_18948dd3.jpg',
  //       title: '开启激情逐浪之旅',
  //       desc: '畅爽一夏从这里开始！'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1506/fd/08f524fa9455b4.jpg_r_640x214_b37dbb39.jpg',
  //       title: '暑期玩转粤港澳',
  //       desc: '这个假期开启最高大上的国内游'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>

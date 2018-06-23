<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array  // 获取到父组件传递的值
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
  //       title: '广州长隆旅游度假区',
  //       desc: '酷爽夏日消暑乐园，享受您的美好时光'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
  //       title: '广州长隆旅游度假区',
  //       desc: '酷爽夏日消暑乐园，享受您的美好时光'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
  //       title: '广州长隆旅游度假区',
  //       desc: '酷爽夏日消暑乐园，享受您的美好时光'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title  //栏目标题样式
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img  //图片样式
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title  //项目标题样式
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc  //项目详情样式
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button  //查看详情按钮样式
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>

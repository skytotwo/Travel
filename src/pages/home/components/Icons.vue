<template>
  <div class="icons">
    <swiper class="swiper-container" :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false  // 设置轮播图不自动滚动
      }
    }
  },
  // data () {
  //   return {
  //     iconList: [{
  //       id: "0001",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
  //       desc: "景点门票"
  //     },{ 
  //       id: "0002",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
  //       desc: "必游榜单"
  //     },{ 
  //       id: "0003",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
  //       desc: "动植物园"
  //     },{ 
  //       id: "0004",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
  //       desc: "公园"
  //     },{ 
  //       id: "0005",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
  //       desc: "游船游艇"
  //     },{ 
  //       id: "0006",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
  //       desc: "夏日玩水"
  //     },{ 
  //       id: "0007",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
  //       desc: "名胜古迹"
  //     },{ 
  //       id: "0008",
  //       imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
  //       desc: "一日游"
  //     }]
  //   }
  // },
  computed: { //计算属性，对iconList中的元素进行数量计算，将元素插入到对应的页数数组中返回，供swiper使用
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon  /*单个图标样式*/
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img  /*图标图片样式*/
        position: absolute
        top: 0
        left: 0
        right: 0 
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc  /*图标文字样式*/
        position: absolute
        left: 0
        right: 0 
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>

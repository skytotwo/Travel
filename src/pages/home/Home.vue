<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入header组件
import HomeSwiper from './components/Swiper' // 引入swiper组件
import HomeIcons from './components/Icons' // 引入icons组件
import HomeRecommend from './components/Recommend' // 引入recommend组件
import HomeWeekend from './components/Weekend' // 引入weekend组件
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)  // get返回一个异步promise对象，需要回调函数
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {  // 如果后端正确的返回了结果，并且有数据
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {  // 页面挂载好后
    this.getHomeInfo()  // 获取ajax数据
  }
}
</script>

<style>

</style>
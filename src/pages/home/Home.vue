<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入header组件
import HomeSwiper from './components/Swiper' // 引入swiper组件
import HomeIcons from './components/Icons' // 引入icons组件
import HomeRecommend from './components/Recommend' // 引入recommend组件
import HomeWeekend from './components/Weekend' // 引入weekend组件
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
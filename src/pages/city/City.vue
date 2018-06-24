<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'  // header栏目
import CitySearch from './components/Search'  // 搜索框
import CityList from './components/List'  // 城市列表
import CityAlphabet from './components/Alphabet'  // 右边字母列
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''  // 暂时存放字母组件传递过来的数据
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)  // 获取数据，调用回调函数取出数据
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities  // 将数据放入定义的city对象中
        this.hotCities = data.hotCities  // 将数据放入定义的热门城市hotCities数组中
      }
    },
    handleLetterChange (letter) {  //字母组件向外传值触发的事件
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>

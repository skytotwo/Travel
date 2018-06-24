<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>

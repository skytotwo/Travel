<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div
      class="search-content"
      ref="search" 
      v-show="keyword"
    >  <!--ref="search"为钩子获取节点加滚动条；v-show="keyword"表示有输入关键词才显示-->
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">  <!--调用计算属性，无搜索结果才显示-->
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {  // 判断搜索结果是否有值
      return !this.list.length
    }
  },
  watch: {  // 监听函数
    keyword () {  // 当输入的keyword有变化时
      if (this.timer) {
        clearTimeout(this.timer)  // 如果已经在执行截流函数，则将该函数清除
      }
      if (!this.keyword) {  // 当输入值清空时，将list结果清空，也就进一步使得搜索结果页面不显示
        this.list = []
        return
      }
      this.timer = setTimeout(() => {  // 使用截流函数，设置延时100毫秒，提高性能
        const result = []
        for (let i in this.cities) { // 得到A:{...},B:{...}对象
          this.cities[i].forEach((value) => {  // 得到A对象里的{id:...,spell:...,name:...}
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)  // 如果该项中拼写和名字包含输入的keyword，就将该项放入数组中返回，用以展示
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {  // 页面数据绑定加载后
    this.scroll = new Bscroll(this.$refs.search)  // 给搜索出的城市加上滚动效果
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search  //背景样式
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input  // input框样式
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content  // 搜索显示页面样式
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item  // 搜索显示城市样式
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>

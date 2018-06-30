<template>
  <div>
    <ul class="list">
      <li class="item" 
      v-for="item in letters" 
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >  <!--循环对象，第二个参数就是key;prevent代表阻止默认行为，真机上滚动字母就不会拉动屏幕-->
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters  // 计算属性，返回数组类似于['A','B','C'.....]
    }
  },
  data () {
    return {
      touchStatus: false,  // 状态位，滑动事件
      startY: 0,
      timer: null
    }
  },
  updated () {  // 当数据重新加载的时候就会走这里
    this.startY = this.$refs['A'][0].offsetTop // 获取到字母A到header栏的距离
  },
  methods: {
    handleLetterClick (e) {  // 字母点击事件，城市列表显示对应首字母的城市
      this.$emit('change', e.target.innerText)  // 向父节点传点击的字母，然后再由父节点传给list组件
    },
    handleTouchStart () {  // 滑动效果，手指点击时
      this.touchStatus = true
    },
    handleTouchMove (e) {  // 滑动效果，手指滑动时
      if (this.touchStatus) {
        if (this.timer) {  // 刚滑动时，如果已经在执行截流函数，则将该函数清除
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {  // 使用函数截流，延迟16毫秒执行操作，提升性能
          const touchY = e.touches[0].clientY - 79  // 手指点击的高度,除去header栏的高度
          const index = Math.floor((touchY - this.startY) / 20) // 得出字母的下标
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // 同样调用父组件的change事件
          }
        }, 16)
      }
    },
    handleTouchEnd () {  // 滑动效果，手指离开时
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

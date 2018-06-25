import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  //这里不需要调用转发
  // actions: {  // 组件调用actions用来转发请求，进而调用commit操作mutations
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  getters: {  // 类似于组件中的计算属性
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'  // 为了满足部分手机不支持promise的情况
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body) // 解决移动端300毫秒点击延迟
Vue.use(VueAwesomeSwiper) // 增加轮播图

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 传入新建的vuex存储仓库
  components: { App },
  template: '<App/>'
})

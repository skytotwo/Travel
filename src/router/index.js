import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',  // 动态路由，后面带一个参数，参数放置到id这个变量里面
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {  // 每次进入页面，都让x为0，y也变成0，避免多页面访问展示互相影响
    return { x: 0, y: 0 }
  }
})

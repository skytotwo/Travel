<template>
  <div id="app">
    <keep-alive exclude="Detail">  <!--内置标签，意思是加载一次后就将访问信息保存到内存中-->
      <router-view/>
    </keep-alive>  <!--exclude表示里面定义的组件可以不必缓存-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

<template>
  <div id="app">
    <keep-alive>  <!--内置标签，意思是加载一次后就将访问信息保存到内存中-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

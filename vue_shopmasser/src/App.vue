<template>
  <div id="app">
    <!-- 路由占位符 使路由能生效 切换路由的时候 
    这里的内容也会按照写在router上的规则来替换掉 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>

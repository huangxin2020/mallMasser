<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
    loginOut(){
        // 清空 sessionStorage
        window.sessionStorage.clear();
        // 回到登录页面
        this.$router.push('/login');
    }
  }
}
</script>
<style scoped>
</style>

<template>
  <div>
    <el-button
      type="info"
      @click="logout"
    >退出</el-button>
  </div>

</template>

<script>
export default {
  name: "Home",
  methods: {
    logout () {
      //清除token 处于未登录状态 用编程式导航在重新push 到login页面
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }

}
</script>

<style>
</style>
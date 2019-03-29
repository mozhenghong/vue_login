<template>
  <div class="Home">
    <h3>欢迎 {{name}}</h3>
    <a href="#" @click="quit">注销登录</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    quit() {
      this.$router.push('/')
    }
  }
}
</script>

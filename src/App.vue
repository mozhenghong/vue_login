<template>
  <div id="app">
    <router-view/>
    <!-- <div class="block">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="1000"  v-on:current-change="prevpage">
</el-pagination>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./views/Home";
import Login from "./views/Login";

export default {
  name: "app",
  components: {
    HelloWorld,
    Home,
    Login
  },
  methods: {
    prevpage(pagecount) {
    
      this.$router.push(`/page${pagecount}`)
    }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

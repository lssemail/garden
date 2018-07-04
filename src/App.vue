<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{name: 'Main'}" tag="li" exact>
        <div>main</div>
      </router-link>
      <router-link :to="{name: 'BookDetail', params:{id: 1}}" tag="li" exact>
        <div>bookDetail</div>
      </router-link>
    </div>
    <div class="content">
      <p>列表是子菜单</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.active {
  background-color: aqua;
}
</style>

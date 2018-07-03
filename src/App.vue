<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{name: 'Home'}" tag="li">
        <div>home</div>
      </router-link>
      <router-link :to="{name: 'Cart'}" tag="li">
        <div>cart</div>
      </router-link>
      <router-link :to="{name: 'Explorer'}" tag="li">
        <div>explorer</div>
      </router-link>
      <router-link :to="{name: 'Me'}" tag="li">
        <div>me</div>
      </router-link>
    </div>
    <div class="content">
      <p>this is content</p>
      <router-view></router-view>
    </div>
    <router-view/>
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
</style>

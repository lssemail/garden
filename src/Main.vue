<template>
    <div>
      <router-link :to="{name: 'Home'}" tag="li" exact>
        <div>home</div>
      </router-link>
      <router-link :to="{name: 'Cart'}" tag="li" exact>
        <div>cart</div>
      </router-link>
      <router-link :to="{name: 'Explorer'}" tag="li" exact>
        <div>explorer</div>
      </router-link>
      <router-link :to="{name: 'Me'}" tag="li" exact>
        <div>me</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'mainPage'
}
</script>

<style scoped>

</style>

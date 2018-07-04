<template>
  <div>hello vue book!!!</div>
</template>

<script>
export default {
  name: 'bookDetail',
  created () {
    const params = this.$router.params
    console.log(params)
  },
  watch: {
    '$route': function (to, from) {
      console.log(to)
    }
  }
}
</script>

<style scoped>

</style>

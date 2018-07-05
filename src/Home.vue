<template>
  <div>
    <h2>首页</h2>
    <dialog ref="dialog" @dialogClose="selected=undefined">
      <div slot="header">
        <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
      </div>
      <div><img :src="selected.img_url"/></div>
      <div>{{selected.title}}</div>
    </dialog>
  </div>
</template>

<script>
import Dialog from './components/Dialog.vue'

export default {
  name: 'home',
  components: {
    Dialog
  }
}
</script>

<style scoped>

</style>

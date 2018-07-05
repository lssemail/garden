<template>
  <div class="dialog-wrapper" :class="{'open': is_open}">
    <div class="overlay" @click="close"></div>
    <div class="dialog">
      <div class="heading">
        <slot name="header"></slot>
      </div>
      <slot>
        <!--内容区域-->
      </slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      is_open: false
    }
  },
  methods: {
    open () {
      if (!this.is_open) {
        this.$emit('dialogOpen')
      }
      this.is_open = true
    },
    close () {
      if (this.is_open) {
        this.$emit('dialogClose')
      }
      this.is_open = false
    }
  }
}
</script>

<style scoped>
  .dialog-wrapper {
    height: 100%;
    display: none;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: absolute;
    left: 0px;
    top:0px;
    right: 0px;
    bottom: 0px;
  }

  .dialog {
    position: fixed;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    display: block;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    z-index: 10;
    padding: 24px 14px;
  }

  .dialog .open {
    display: block;
  }

  .dialog .heading {
    padding: 12px;
  }
</style>

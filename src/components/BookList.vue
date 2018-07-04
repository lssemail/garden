<template>
    <div class="book-list">
      <div class="header">
        <div class="heading">{{ heading }}</div>
        <div class="more">更多...</div>
      </div>
      <div class="book-items">
        <div class="book" v-for="book in books" v-bind:key="book.id">
          <div class="cover">
            <img v-bind:src="book.img_url"/>
          </div>
          <div class="title">{{book.title}}</div>
          <div class="authors">{{book.authors | join}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BookList',
  props: [
    'heading',
    'books'
  ],
  filters: {
    join (args) {
      return args.join(',')
    }
  }

}
</script>

<style scoped>

</style>

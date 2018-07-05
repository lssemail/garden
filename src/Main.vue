<template>
    <div>
      <div>
        <div class="section">
          <div>
            <!--热门快讯-->
          </div>
        </div>
        <div class="section">
          <div class="announcement">
            <!--新书推荐-->
            <label>快讯</label>
            <span>{{ announcement }}</span>
            <book-list :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)"></book-list>
          </div>
        </div>
        <div class="section">
          <book-list :books="recommended" heading="编辑推荐"></book-list>
        </div>
      </div>
      <div>
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
      </div>
    </div>
</template>

<script>
import BookList from './components/BookList.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  name: 'mainPage',
  data () {
    return {
      'announcement': '',
      'latestUpdated': [],
      'recommended': [],
      selected: undefined
    }
  },
  http: {
    root: '/',
    headers: {}
  },
  created () {
    this.$http.get('static/json/home.json')
      .then((res, prop) => {
        for (prop in res.body) {
          this[prop] = res.body[prop]
        }
      }, (error) => {
        console.log(`获取数据失败: ${error}`)
      })
  },
  components: {
    BookList
  },
  methods: {
    preview (book) {
      this.selected = book
      this.$refs.dialog.open()
    }
  }
}
</script>

<style scoped>

</style>

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
            <book-list :books="latestUpdated" heading="最新更新"></book-list>
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

export default {
  name: 'mainPage',
  data () {
    return {
      announcement: '今日上架的图书全部8折',
      latestUpdated: [{
        'id': 1,
        'title': '该睡觉了吧',
        'authors': ['good', 'night'],
        'img_url': './assets/common.jpg'
      }],
      recommended: [{
        'id': 1,
        'title': '该睡觉了吧',
        'authors': ['good', 'night'],
        'img_url': './assets/common.jpg'
      }]
    }
  },
  components: {
    BookList
  }
}
</script>

<style scoped>

</style>

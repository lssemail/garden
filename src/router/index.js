import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../Home.vue'
import Cart from '../Cart.vue'
import Explorer from '../Explorer.vue'
import Me from '../Me.vue'
import BookDetail from '../BookDetail.vue'
import Main from '../Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})

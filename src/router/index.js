import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../Home.vue'
import Cart from '../Cart.vue'
import Explorer from '../Explorer.vue'
import Me from '../Me.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/explorer',
      name: 'Explorer',
      component: Explorer
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})

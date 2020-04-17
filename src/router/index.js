import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/msglistinfo',
    name: 'MsgListInfo',
    component: () => import('../views/MsgListInfo.vue')
  }


];

const router = new VueRouter({
  routes
})

export default router

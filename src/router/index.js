import Vue from 'vue'
import VueRouter from 'vue-router'
import DataVisible from '../view/DataViseble/index.vue'
import Cate from '../view/Categories/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    direactive: '/wellcome',
    component: DataVisible
  },
  {
    path: '/wellcome',
    component: DataVisible
  },
  {
    path: '/cate',
    component: Cate
  }
]

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
  routes
})

export default router

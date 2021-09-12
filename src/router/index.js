import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Menu from '../views/Menu.vue'
import RelationOrder from '../views/RelationOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Baş sahypa',
    component: Home
  },
  {
    path: '/login',
    name: 'Login  ',
    component: LogIn
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/gatnashyk-nyzam',
    name: 'Gatnshyk-nyzam',
    component: RelationOrder
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name} |  ${process.env.VUE_APP_TITLE}`
  next()
})

export default router

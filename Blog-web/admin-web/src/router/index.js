import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const routerHistory = createWebHistory()

const router = new createRouter({
  history: routerHistory,
  routes
})

export default router
import { createApp } from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

createApp(App).use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/admin',
    name:'admin',
    component:Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
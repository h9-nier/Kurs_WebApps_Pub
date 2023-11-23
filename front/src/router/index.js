import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/StartView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

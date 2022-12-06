import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModuleView from '../views/ModuleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/module/:id',
      name: 'module',
      component: ModuleView
    }
  ]
})

export default router

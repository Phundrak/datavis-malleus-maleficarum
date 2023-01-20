import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Fragment from '@/components/Fragment.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/full-text',
      name: 'full-text',
      component: () => import('../views/FullTextView.vue')
    },
    {
      path: '/fragment/:id',
      name: 'fragment',
      component: Fragment
    }
  ]
})

export default router

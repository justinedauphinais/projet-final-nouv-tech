import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RecetteView from '../views/RecetteView.vue'
import CatalogueView from '../views/CatalogueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recette/:id',
      name: 'recette',
      component: RecetteView 
    },
    {
      path: '/catalogue', 
      name: 'catalogue',
      component: CatalogueView 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

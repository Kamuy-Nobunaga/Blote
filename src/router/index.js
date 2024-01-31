import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'sign up',
    component: () => import('../views/SignupPage.vue')
  },
  {
    path: '/add-blote',
    name: 'add blote',
    component: () => import('../views/BloteAddView.vue')
  }, 
  {
    path: '/blog/:id',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  }, 
  {
    path: '/blog/:id/edit',
    name: 'blog-edit',
    component: () => import('../views/BlogEditView.vue')
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

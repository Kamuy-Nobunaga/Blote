import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useBlogStore } from '@/stores/BlogStore';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blotes',
    name: 'blotes',
    component: () => import('../views/BlotesView.vue'),
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

router.beforeEach(to => {
    const blogStore = useBlogStore()

    // 登入頁（首頁）不用驗證
    if (to.fullPath === '/') return;
    
    if (!blogStore.isLogin) {
      return '/';
    }
  return true;
});
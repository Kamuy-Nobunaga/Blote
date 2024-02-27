import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useBlogStore } from '@/stores/BlogStore';
// import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all-blotes',
    name: 'blotes',
    component: () => import('../views/BlotesView.vue'),
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: () => import('../views/SignupPage.vue')
  },
  {
    path: '/add-blote',
    name: 'addBlote',
    component: () => import('../views/BloteAddView.vue')
  }, 
  {
    path: '/blog/:id',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  }, 
  {
    path: '/blog/:id/edit',
    name: 'blogEdit',
    component: () => import('../views/BlogEditView.vue')
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// router.beforeEach(() => {
//   const adminCheck = localStorage.getItem('admin')
//     if (adminCheck) return;
//     if(!adminCheck) {
//         console.log('go login!!');
//         return '/'
//     }
//to.fullPath === '/' || to.fullPath === '/sign-up'
//   return true;
// });

router.beforeEach(( to ) => {
  const adminCheck = localStorage.getItem('user')
  if (to.name === 'home' || to.name === 'signUp') return;
  if (to.name !== 'home' && to.name !== 'signUp' && adminCheck) return;
  if(!adminCheck) {
    return ({ name: 'home'})
  }
  
})

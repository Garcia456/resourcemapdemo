import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/trigger',
      name: 'trigger',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
  ]
})
export default router

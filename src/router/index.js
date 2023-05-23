import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import TenantDetailPage from "../views/TenantDetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/TenantDetailPage',
      name: 'TenantDetailPage',
      component: TenantDetailPage
    },
  ]
})

export default router

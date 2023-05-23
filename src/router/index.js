import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import TenantDetailPageView from "../views/TenantDetailPage.vue"
import TenantPageView from "../views/TenantPage.vue"
import TextView from "../views/Text.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },{
      path: '/TenantDetailPage/:getid',
      name: 'TenantDetailPage',
      component: TenantDetailPageView,
      props: true
    },{
      path: '/karinushi',
      name: 'TenantPage',
      component: TenantPageView
    },{
      path: '/Text',
      name: 'Text',
      component: TextView
    }
  ]
})

export default router

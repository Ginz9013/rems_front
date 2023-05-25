import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import TenantDetailPageView from "../views/TenantDetailPage.vue"
import TenantPageView from "../views/TenantPage.vue"
import LandlordPageView from "../views/LandlordPage.vue"
import LandlordDetilPageView from "../views/LandlordDetilPage.vue"



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
      path: '/kashinushi',
      name: 'LandlordPage',
      component: LandlordPageView
      
    }
    ,{
      path: '/LandlordDetilPage/:getid',
      name: 'LandlordDetilPage',
      component: LandlordDetilPageView,
      props: true
    },
    
  ]
})

export default router

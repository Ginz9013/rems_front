import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import ContractDetailsView from "../views/ContractDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/contract-details',
      name: 'ContractDetails',
      component: ContractDetailsView
    }
  ]
})

export default router

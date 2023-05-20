import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import MainView from "../views/MainContract.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'maincontract',
      component: MainView
    }
  ]
})

export default router

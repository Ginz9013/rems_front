import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import SearchHouse from "../views/SearchHouse.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/bukken',
      name: 'SearchHouse',
      component: SearchHouse
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import Homepage from "../views/Homepage.vue";
import bukken from "../components/Property.vue";
import kashinushi from "../components/addPropertyPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/bukken',
      name: 'Bukken',
      component: bukken
    },
    {
      path: '/kashinushi',
      name: 'Kashinushi',
      component: kashinushi
    }
  ]
})

export default router

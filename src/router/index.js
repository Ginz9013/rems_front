import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import Homepage from "../views/Homepage.vue";
import Property from "../components/Property.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/property',
      name: 'Property',
      component: Property
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 登入頁面
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      // 首頁
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      // 物件首頁
      path: '/bukken',
      name: 'bukken',
      // component: ,
      children: [
        {
          // 物件詳細頁面(含修改)
          path: 'info',
          // component:
        }
      ]
    },
    {
      // 契約首頁
      path: '/Keiyaku',
      name: 'Keiyaku',
      // component:,
      children: [
        {
          // 契約詳細頁面(包含歷史契約)
          path: 'info',
          // component:,
        }
      ]
    },
    {
      // 貸主首頁
      path: '/kashinushi',
      name: 'kashinushi',
      // component: ,
      children: [
        {
          // 貸主詳細頁面(含修改)
          path: 'info',
          // component:
        }
      ]
    },
    {
      // 借主首頁
      path: '/karinushi',
      name: 'karinushi',
      // component: ,
      children: [
        {
          // 借主詳細頁面(含修改)
          path: 'info',
          // component:
        }
      ]
    },
  ]
})

export default router

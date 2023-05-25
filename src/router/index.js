import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
// import Homepage from "../views/Homepage.vue";
import Property from "../components/Property.vue";
import addPropperty from "../components/addPropertyPage.vue"

import SearchHouse from "../views/SearchHouse.vue";
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
      // component:
    },
    {
      // 物件首頁
      path: '/bukken',
      name: 'bukken',
      component: SearchHouse
    },
    {
      // 物件詳細頁面(含修改)
      path: '/bukken/info',
      name: 'bukkenInfo',
      component:Property,
    },
    {
      // 契約首頁
      path: '/keiyaku',
      name: 'keiyaku',
      component:addPropperty,
    },
    {
      // 契約詳細頁面(包含歷史契約)
      path: '/keiyaku/info',
      name: 'keiyakuInfo',
      // component:,
    },
    {
      // 貸主首頁
      path: '/kashinushi',
      name: 'kashinushi',
      // component: ,
    },
    {
      // 貸主詳細頁面(含修改)
      path: '/kashinushi/info',
      name: 'kashinushiInfo',
      // component:
    },
    {
      // 借主首頁
      path: '/karinushi',
      name: 'karinushi',
      // component: 
    },
    {
      // 借主詳細頁面(含修改)
      path: '/karinushi/info',
      name: 'karinushiInfo',
      // component:
    }
  ]
})

export default router

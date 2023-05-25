import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/Login.vue";
<<<<<<< HEAD
import HomeView from "../views/Home.vue";
import ContractDetailsView from "../views/ContractDetails.vue";
import ContractView from "../views/Contract.vue";
=======
import TenantDetailPageView from "../views/TenantDetailPage.vue"
import TenantPageView from "../views/TenantPage.vue"
import LandlordPageView from "../views/LandlordPage.vue"
import LandlordDetilPageView from "../views/LandlordDetilPage.vue"
>>>>>>> landlord_hana

//home不需要
// import Homepage from "../views/Homepage.vue";
import Property from "../components/property.vue";
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
<<<<<<< HEAD
      component: HomeView
=======
      // component:
>>>>>>> landlord_hana
    },
    {
      // 物件首頁
      path: '/bukken',
      name: 'bukken',
<<<<<<< HEAD
      component: SearchHouse
=======
      // component: ,
>>>>>>> landlord_hana
    },
    {
      // 物件詳細頁面(含修改)
      path: '/bukken/info',
<<<<<<< HEAD
      name: 'bukkenInfo',
      component:Property,
=======
      name: 'bukkenInfo'
      // component:
>>>>>>> landlord_hana
    },
    {
      // 契約首頁
      path: '/keiyaku',
      name: 'keiyaku',
<<<<<<< HEAD
      component: ContractView,
    },
    {
      // 契約詳細頁面(包含歷史契約)
      path: '/Keiyaku/info/:contract_id',
      name: 'keiyaku_info',
      component: ContractDetailsView,
      props:true
=======
      // component:,
    },
    {
      // 契約詳細頁面(包含歷史契約)
      path: '/keiyaku/info',
      name: 'keiyakuInfo',
      // component:,
>>>>>>> landlord_hana
    },
    {
      // 貸主首頁
      path: '/kashinushi',
      name: 'kashinushi',
<<<<<<< HEAD
      // component: ,
    },
    {
      // 貸主詳細頁面(含修改)
      path: '/kashinushi/info',
      name: 'kashinushiInfo',
      // component:
=======
      component: LandlordPageView
    },
    {
      // 貸主詳細頁面(含修改)
      path: '/kashinushi/info/:getLandlordId',
      name: 'kashinushiInfo',
      component:LandlordDetilPageView,
      props: true
>>>>>>> landlord_hana
    },
    {
      // 借主首頁
      path: '/karinushi',
      name: 'karinushi',
<<<<<<< HEAD
      // component: 
    },
    {
      // 借主詳細頁面(含修改)
      path: '/karinushi/info',
      name: 'karinushiInfo',
      // component:
=======
      component:TenantPageView
    },
    {
      // 借主詳細頁面(含修改)
      path: '/karinushi/info/:getTenantId',
      name: 'karinushiInfo',
      component:TenantDetailPageView,
      props: true
>>>>>>> landlord_hana
    }
  ]
})

export default router

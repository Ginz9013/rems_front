<script>
import { RouterLink, RouterView } from 'vue-router' 
import SearchBar from "../components/SearchBar.vue";
import ModalView from "../components/ModalView.vue";
import TenantInfo from "../components/TenantInfo.vue";
import TenantPage from "../components/TenantPage.vue";
export default {
    components: {
        SearchBar,
        ModalView,
        TenantInfo,
        TenantPage,
    },
    data() {
        return {
            modalShow: false,
            showID:false,
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        emitID(){
            
        }

    }
}
</script>
<template>
    <div>
        <!-- <h1>Log in Page / 元件範例</h1>
        <h2>元件說明: (元件內部也有註解說明)</h2>
        <p>請 props "searchCondition" 傳入搜索條件的陣列，並 @emmit 一個 SearchResponse ，會回傳 [搜索條件, 搜索關鍵字] 的陣列資訊</p> -->
        <SearchBar :searchCondition="['物件','借主', '契約コード']"/>

        <!-- <p>請由外部綁定 v-if 作為顯示切換，並 props 傳入標題字串，@close綁定視窗右上角取消事件</p>
        <p></p> -->
       <!-- <button @click="switchModal">新增貸主</button> -->
        <TenantPage />
   
        
        <TenantInfo />
    </div>
</template>
<style scoped>
</style>
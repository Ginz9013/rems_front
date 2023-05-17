<script>
import SearchBar from "../components/SearchBar.vue";
import ModalView from "../components/ModalView.vue";

export default {
    components: {
        SearchBar,
        ModalView
    },
    data() {
        return {
            modalShow: false,
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        }
    }
}
</script>
<template>
    <div>
        <h1>Log in Page / 元件範例</h1>
        <h2>元件說明: (元件內部也有註解說明)</h2>
        <p>請 props "searchCondition" 傳入搜索條件的陣列，並 @emmit 一個 SearchResponse ，會回傳 [搜索條件, 搜索關鍵字] 的陣列資訊</p>
        <SearchBar :searchCondition="['物件','借主', '契約コード','tonyfu']"/>

        <p>請由外部綁定 v-if 作為顯示切換，並 props 傳入標題字串，@close綁定視窗右上角取消事件</p>
        <p></p>
        <button @click="switchModal">Open Modal</button>
        <ModalView v-if="modalShow" :title="'test info'" @close="closeModal">
            <div>
                <h2>此處可自行撰寫</h2>
            </div>
        </ModalView>
    </div>
</template>
<style scoped>
</style>
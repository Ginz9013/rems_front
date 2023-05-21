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
            modalShow: true,
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
        <SearchBar :searchCondition="['物件','借主', '契約コード']"/>

        <p>請由外部綁定 v-if 作為顯示切換，並 props 傳入標題字串，@close綁定視窗右上角取消事件</p>
        <p></p>
        <button @click="switchModal">Open Modal</button>
        <ModalView v-if="modalShow" :title="'貸主追加'" @close="closeModal">
            <form>
                <div class="d-flex justify-content-center my-2">
                <label for="lastname" placeholder="">姓</label>
                <input type="text" id="lastname">
                <label for="name">名</label>
                <input type="text" id="name">
            </div>
            <div class="d-flex justify-content-center my-2">
                <label for="saru">セル：</label>
                <input type="text" id="saru">
                <label for="mai">メイ：</label>
                <input type="text" id="mai">
            </div>
            <div class="d-flex justify-content-center my-2">
                <label for="mai">生年月日：</label>
                <input type="text" id="brather">
                <label for="phome">電話番号：</label>
                <input type="text" id="phome">
            </div>
            <div class="d-flex justify-content-center my-2">
                <label for="mynumbercard">マイナンバー</label>
                <input type="text" id="mynumbercard">
                <label for="mai">免許番号：</label>
                <input type="text" id="mai">
            </div>
            <div class="d-flex justify-content-center my-2">
                <label for="mai">住所：</label>
                <input type="text" id="mai" class="w-100">
            </div>
            <div class="d-flex justify-content-center my-2">
                <label for="mai">Email：</label>
                <input type="text" id="mai" class="w-100">
                
            </div>
            <div class="d-flex justify-content-center">
                <label for="mai">支払方法：</label>
                <input type="text" id="mai">
                <label for="mai">口座番号：</label>
                <input type="text" id="mai">
            </div>
            <button type="sumit" class="d-flex justify-content-center ">追加</button>
                

            </form>
            
        </ModalView>
    </div>
</template>
<style scoped>


</style>
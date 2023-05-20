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
    <div class="filed">
        <div>
            <h1>契約情報</h1>
        </div>
        <div>
            <div class="flexblock">
                <p>物件名</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>家主名</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>借主名</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>礼金</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>敷金</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>契約開始時間</p>
                <p>:</p>
                <p>表示</p>
            </div>
            <div class="flexblock">
                <p>契約終了時間</p>
                <p>:</p>
                <p>表示</p>
            </div>
        </div>
        <div class="flexblock">
            <button type="button">更新手続き</button>
            <button type="button">解約する</button>
        </div>
        <div>
            <div>
                <h1>入金情報</h1>
                <button type="button">入金追加</button>
            </div>
            //表格無邊框
        </div>
        <div>
            <h1>詳細契約リスト</h1>
        </div>
        <div>
            <div class="flexblock">
                <h1>契約開始時間:yyyy/mm/dd</h1>
                <button type="button"></button>
            </div>
            <div class="flexblock">
                <h1>契約開始時間:yyyy/mm/dd</h1>
                <button type="button"></button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.filed {
    width: 100vh;
    height: 100vw;
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    margin-right: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.flexblock {
    display: flex;
}</style>
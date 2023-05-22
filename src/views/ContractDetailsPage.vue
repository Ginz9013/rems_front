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
    <div class="contract-area">
        <h2 class="fw-bolder text-center mt-5 text-primary">契約情報</h2>
        <hr class="border border-secondary border-2">
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">物件名</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">貸主名</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">借主名</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">礼金</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">敷金</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">契約開始時間</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <dl class="row ms-6">
            <dt class="col-sm-2 text-primary">契約終了時間</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-7 border-bottom border-1 border-secondary">info</dt>
        </dl>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary mx-5 fw-bolder m-3">更新手続き</button>
            <button type="button" class="btn btn-danger mx-5 fw-bolder m-3">解約する</button>
        </div>
    </div>

    <div class="payment-area">
        <h4 class="fw-bolder text-center mt-5 text-primary">入金情報</h4>
        <hr class="border border-secondary border-2">
        <dl class="row ms-4">
            <dt class="col-sm-2 text-primary">入金種類</dt>
            <dt class="col-sm-2 text-primary">入金日</dt>
            <dt class="col-sm-2 text-primary">支払期限</dt>
            <dt class="col-sm-2 text-primary">入金額</dt>
            <dt class="col-sm-2 text-primary">入金状況</dt>
        </dl>
        <dl class="row ms-4">
            <dt class="col-sm-2">種類</dt>
            <dt class="col-sm-2">-</dt>
            <dt class="col-sm-2">-</dt>
            <dt class="col-sm-2">＄</dt>
            <dt class="col-sm-2">無し</dt>
            <dt class="col-sm-2">
                <button type="button" class="btn btn-secondary text-white fw-bolder px-3 py-0">状態更新</button>
            </dt>
        </dl>
    </div>

    <div class="contractDetail-area">
        <h4 class="fw-bolder text-center mt-5 text-primary">詳細契約リスト</h4>
        <hr class="border border-secondary border-2">
        <dl class="row ms-6">
            <dt class="col-sm-2">契約開始時間</dt>
            <dt class="col-sm-1">：</dt>
            <dt class="col-sm-5">2023-05-20</dt>
            <dt class="col-sm-2">契約中</dt>
        </dl>
    </div>

</template>
<style scoped>
.contract-area {
    margin: 0 300px; 
}
.payment-area {
    margin: 0 300px;
}
.contractDetail-area {
    margin: 0 300px;
}


</style>
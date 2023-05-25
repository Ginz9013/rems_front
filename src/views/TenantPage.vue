<script >
import SearchBar from "../components/SearchBar.vue";
import ModalView from "../components/ModalView.vue";
import TenantInfoCompo from "../components/TenantInfo.vue";

export default {
    components: {
        SearchBar,
        ModalView,
        TenantInfoCompo
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
    <div class="bodyArea">
        <SearchBar :searchCondition="['借主姓名', '借主電話番号']" class="SearchBar" />

        <button @click="switchModal" class="tenantAddBtn">借主追加</button>
        <TenantInfoCompo />
        <ModalView v-if="modalShow" :title="'借主追加'" @close="switchModal" class="modalArea">
            <div class="field">
                <div class="flex">
                    <p class="phead">姓</p>
                    <p class="pdot">:</p>
                    <input type="text" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">名</p>
                    <p class="pdot2">:</p>
                    <input type="text" class="twiinput2">
                </div>
                <div class="flex">
                    <p class="phead">セイ</p>
                    <p class="pdot">:</p>
                    <input type="text" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">メイ</p>
                    <p class="pdot2">:</p>
                    <input type="text" class="twiinput2">
                </div>
                <div class="flex">
                    <p class="phead">生年月日</p>
                    <p class="pdot">:</p>
                    <input type="date" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">電話番号</p>
                    <p class="pdot2">:</p>
                    <input type="number" class="twiinput2">
                </div>
                <div class="flex">
                    <p class="phead">マイナンバー</p>
                    <p class="pdot">:</p>
                    <input type="number" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">免許番号</p>
                    <p class="pdot2">:</p>
                    <input type="number" class="twiinput2">
                </div>
                <div class="flex">
                    <p class="phead">住所</p>
                    <p class="pdot">:</p>
                    <p style="height: 20px;"></p>
                    <input type="text" class="soloinput">
                </div>
                <div class="flex">
                    <p class="phead">Email</p>
                    <p class="pdot">:</p>
                    <p style="height: 20px;"></p>
                    <input type="email" class="soloinput">
                </div>
                <div class="flex">
                    <p class="phead">支払方法</p>
                    <p class="pdot">:</p>
                    <input type="text" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">口座番号</p>
                    <p class="pdot2">:</p>
                    <input type="number" class="twiinput2">
                </div>
                <button type="button" class="confirmToAddBtn" @click="addTenantInfo">追加</button>
            </div>
        </ModalView>
    </div>
</template>

<style lang="scss" scoped>
.bodyArea {
    // margin: 20px 300px 20px 300px;
    width: 800px;
    margin: 0 auto;
}

.modalArea{
    width: 100%;
}

.field {
    // margin-left: 24vw;
    // margin-right: 24vw;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: relative;

    .flex {
        text-align: center;
        justify-content: center;
        display: flex;
    }
}

.tenantAddBtn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 9px 21px;
    border: 0px solid #45ab71;
    border-radius: 9px;
    background: #45ab71;
    color: #ffffff;
    text-decoration: none;
}

.confirmToAddBtn {
    width: 10vw;
    position: absolute;
    left: 260px;
    top: 300px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 9px 21px;
    border: 0px solid #692bff;
    border-radius: 9px;
    background: #692bff;
    color: #ffffff;
    text-decoration: none;
}

.SearchBar {
    margin: 1rem;
    width: 50vw;
}

.phead {
    position: absolute;
    left: 0;
}

.pfooter {
    position: absolute;
    left: 345px;
}

.pdot {
    position: absolute;
    left: 100px;
}

.pdot2 {
    position: absolute;
    left: 445px;

}

.twiinput {
    position: absolute;
    left: 120px;
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
}

.twiinput2 {
    position: absolute;
    left: 465px;
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
}

.a {
    position: absolute;
    left: 465px;
    height: 25px;
    width: 150px;
}

.soloinput {
    position: absolute;
    left: 120px;
    height: 25px;
    width: 495px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
}
</style>
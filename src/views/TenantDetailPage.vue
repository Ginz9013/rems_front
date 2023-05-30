<script>
import { RouterLink, RouterView } from 'vue-router'

import ModalView from "../components/ModalView.vue";
export default {
    props: [
        "getTenantId"
    ],
    components: {
        ModalView
    },
    data() {
        return {
            modalShow: false,
            isShow: true,
            // 詳細資料
            tenantDetail: [],
            paymentMethod: '1' // 預設支付方式為振り込み

        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        change() {
            this.isShow = !this.isShow; //F/T相反
        },
        getTenant() {
            return fetch('http://localhost:8080/findByIdGetDetilTenantInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "tenantId": this.getTenantId
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    this.tenantDetail = data.tenant;
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        //詳細資料更新
        upDate() {
            // //轉字串
            let number = this.tenantDetail.phone.toString();
            // console.log(this.tenantDetail.paymentAccount)
            // let paymentAccount = this.tenantDetail.paymentAccount.toString();
            // //去除多餘字
            this.tenantDetail.phone = number.replace(/-/g, '');
            // this.tenantDetail.paymentAccount =paymentAccount.replace(/-/g, '');

            return fetch('http://localhost:8080/reviseTenantInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "tenantId": this.getTenantId,
                    "firstName": "123",
                    "firstNamekana": "123",
                    "lastName": "123",
                    "lastNameKana": "123",
                    //"mynumber":this.tenantDetail.myNumber,
                    "license": this.tenantDetail.license,
                    "phone": this.tenantDetail.phone,
                    "email": this.tenantDetail.email,
                    "birthDate": this.tenantDetail.birthDate,
                    "address": this.tenantDetail.address,
                    "payment": this.tenantDetail.payment,
                    "payment_account": this.tenantDetail.paymentAccount
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    this.tenantDetail = data.tenant;

                    alert(data.errorMessage)
                    this.change()

                })
                .catch((error) => {
                    console.error(error);
                })
        },
    },
    mounted() {
        this.getTenant()
    }
}
</script>
<template>
    <div class="field">
        <div>
            <h1>借主情報</h1>
        </div>
        <div>
            <div class="flex">

                <p class="phead">姓</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ this.tenantDetail.firstName }}</p>
                <input v-else type="text" class="twiinput" v-model="tenantDetail.firstName">
                <p style="height: 20px;"></p>
                <p class="pfooter">名</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ tenantDetail.lastName }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.lastName">
            </div>
            <div class="flex">
                <p class="phead">セイ</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ tenantDetail.firstNameKana }}</p>
                <input v-else type="text" class="twiinput" v-model="tenantDetail.firstNameKana">
                <p style="height: 20px;"></p>
                <p class="pfooter">メイ</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ tenantDetail.lastNameKana }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.lastNameKana">
            </div>
            <div class="flex">
                <p class="phead">生年月日</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ tenantDetail.birthDate }}</p>
                <input v-else type="date" class="twiinput" v-model="tenantDetail.birthDate">
                <p style="height: 20px;"></p>
                <p class="pfooter">電話番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ tenantDetail.phone }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.phone">
            </div>
            <div class="flex">
                <p class="phead">マイナンバー</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ tenantDetail.mynumber }}</p>
                <input v-else type="number" class="twiinput" v-model="tenantDetail.mynumber">

                <p style="height: 20px;"></p>
                <p class="pfooter">免許番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ tenantDetail.license }}</p>
                <input v-else type="number" class="twiinput2" v-model="tenantDetail.license">
            </div>
            <div class="flex">
                <p class="phead">住所</p>
                <p class="pdot ms-4">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{ tenantDetail.address }}</p>
                <input v-else type="text" class="soloinput " v-model="tenantDetail.address">
            </div>
            <div class="flex">
                <p class="phead">Email</p>
                <p class="pdot ms-4">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{ tenantDetail.email }}</p>
                <input v-else type="email" class="soloinput" v-model="tenantDetail.email">
            </div>
            <!-- 支付方式 -->
            <div class="flexsolo">
                <div class="d-flex">
                    <p style="height: 20px;"></p>
                    <p class="phead">支払方法</p>
                    <p class="pdot">:</p> </div>
               

                <template v-if="isShow" v-model="tenantDetail.payment">
                    <p v-if="tenantDetail.payment === 0" class="readding ms-5">現金</p>
                    <p v-else-if="tenantDetail.payment === '1'" class="readding" value="1">振り込み</p>
                </template>
                <select v-else class="twiinput ms-5" v-model="tenantDetail.payment" id="group">
                    <option value="0">現金</option>
                    <option value="1">振り込み</option>
                </select>
                <p style="height: 20px;"></p>
                <div class="flexsolo d-flex">
                    <template v-if="tenantDetail.payment === '1'">
                        <p class="pfooter">口座番号</p>
                        <p class="pdot2 ms-1">:</p>
                        <p class="readding2 ms-1">{{ tenantDetail.paymentAccount }}</p>
                        <input type="number" class="twiinput2" v-model="tenantDetail.paymentAccount">
                    </template>
                </div>
                <!-- <input v-else-if="tenantDetail.payment === '1' && !isShow" v-model="tenantDetail.paymentAccount"
                    type="number" class="twiinput2" /> -->

            </div>

            <div class="flex" style="width: 615px;">
                <button @click="isShow ? change() : upDate()" type="button" class="btnL"> {{ isShow ? "情 報 更新" : "情 報 確 認"
                }}</button>
                <p style="height: 20px;"></p>
                <button type="button" class="btnR">契 約 追 加</button>
            </div>

            <div>
                <h1>物件リスト</h1>
            </div>
            <div class="flex">
                <!-- 追加 -->
                <p style="height: 20px;"></p>
                <p class="phead">圖案</p>
                <p class="pdot">物件名</p>

                <div class="a"><a href="">123</a></div>
            </div>
        </div>


    </div>
</template>
<style lang="scss" scoped>
h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flexsolo {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.field {
    margin-top: 1%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flex {
    /* 其他样式 ... */
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btnL,
    .btnR {
        width: 150px;
        height: 40px;
        font-size: large;
        color: white;
        border-radius: 10px;
        border: 0px solid;
        justify-content: space-between;
        /* 将按钮靠在左右两侧 */

    }

    .btnL {
        background-color: #1962A7;
    }

    .btnR {
        background-color: #B8D26E;
    }

    .btnL:hover,
    .btnR:hover {
        opacity: 0.8;
    }

    .btnL:active,
    .btnR:active {
        opacity: 0.6;
    }


    .phead,
    .pfooter {
        margin: 0;
        width: 100px;
        text-align: left;
        /* Added text-align property to align text to the left */
        margin-top: 1%;

    }



    .pdot,
    .pdot2 {
        margin: 0;
        // width: 10px;
    }

    .twiinput {
        height: 25px;
        width: 150px;
        /* Width remains unchanged */
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
        margin-right: 2%;
    }

    .twiinput {
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
        appearance: none;
    }

    .twiinput2 {
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .readding {
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .readding2 {
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .soloreadding {
        margin-left: 3%;
        height: 25px;
        width: 495px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .a {
        height: 25px;
        width: 150px;
    }

    .soloinput {
        margin-left: 3%;
        height: 25px;
        width: 495px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }
}

.twiinput::after {
    content: '';
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: rgb(100, 165, 3);
}
</style>
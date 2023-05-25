<script>
import { RouterLink, RouterView } from 'vue-router'

import ModalView from "../components/ModalView.vue";
export default {
    props:[
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
            tenantDetail:[],
           
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        change() {
            this.isShow = !this.isShow; //F/T相反
        },
        getTenant(){                      
            return fetch('http://localhost:8080/findByIdGetDetilTenantInfo', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'       
            },
            body: JSON.stringify({
                "tenantId":this.getTenantId
            })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.tenantDetail=data.tenant;
                console.log(this.tenantDetail);                        
                })
            .catch((error) => {
                console.error(error);
            })
        },
        //詳細資料更新
        upDate() {        
            return fetch('http://localhost:8080/reviseTenantInfo', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'       
                },
                body: JSON.stringify({
                    "landlord_id":this.getid,
                    "first_name":this.tenantDetail.firstName,
                    "first_name_kana":this.tenantDetail.firstNameKana,
                    "last_name":this.tenantDetail.lastName,
                    "last_name_kana":this.tenantDetail.lastNameKana,
                    "mynumber":this.tenantDetail.myNumber,
                    "license":this.tenantDetail.license,
                    "phone":this.tenantDetail.phone,
                    "email":this.tenantDetail.email,
                    "birth_date":this.tenantDetail.birthDate,
                    "address":this.tenantDetail.address,
                    "payment":paymentMethod,
                    "payment_account":this.tenantDetail.paymentAccount
                })
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.landlordDe = data.landlordList;
                                            
                    })
                .catch((error) => {
                    console.error(error);
                })
        },
    },
    mounted(){
        this.getTenant()
    }
}
</script>
<template>
    <div class="field">
        <div>
            <h1 style="width: 615px; border:0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;">借主情報</h1>
        </div>
        <div>
            <div class="flex">
                <p class="phead">姓</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{tenantDetail.firstName }}</p>
                <input v-else type="text" class="twiinput" v-model="tenantDetail.firstName">
                <p style="height: 20px;"></p>
                <p class="pfooter">名</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{tenantDetail.lastName }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.lastName" >
            </div>
            <div class="flex">
                <p class="phead">セイ</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{tenantDetail.firstNameKana }}</p>
                <input v-else type="text" class="twiinput" v-model="tenantDetail.firstNameKana">
                <p style="height: 20px;"></p>
                <p class="pfooter">メイ</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{tenantDetail.lastNameKana }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.lastNameKana">
            </div>
            <div class="flex">
                <p class="phead">生年月日</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{tenantDetail.birthDate }}</p>
                <input v-else type="date" class="twiinput" v-model="tenantDetail.birthDate">
                <p style="height: 20px;"></p>
                <p class="pfooter">電話番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{tenantDetail.phone }}</p>
                <input v-else type="text" class="twiinput2" v-model="tenantDetail.phone">
            </div>
            <div class="flex">
                <p class="phead">マイナンバー</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{tenantDetail.myNumber }}</p>
                <input v-else type="number" class="twiinput" v-model="tenantDetail.myNumber">

                <p style="height: 20px;"></p>
                <p class="pfooter">免許番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{tenantDetail.license }}</p>
                <input v-else type="number" class="twiinput2" v-model="tenantDetail.license">
            </div>
            <div class="flex">
                <p class="phead">住所</p>
                <p class="pdot">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{tenantDetail.address }}</p>
                <input v-else type="text" class="soloinput" v-model="tenantDetail.address">
            </div>
            <div class="flex">
                <p class="phead">Email</p>
                <p class="pdot">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{tenantDetail.email }}</p>
                <input v-else type="email" class="soloinput" v-model="tenantDetail.email">
            </div>
            <div class="flex">
                <p class="phead">支払方法</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{tenantDetail.payment }}</p>
                <select v-else =!isShow v-model="paymentMethod" id="group" value="1" class="twiinput" >
                    <!-- <option value="0">支払方法選択</option> -->
                    <option value="0">振り込み</option>
                    <option value="1">現金</option>
                </select>
                <p style="height: 20px;"></p>
                <p v-if="paymentMethod === '1'" class="pfooter">口座番号</p>
                <p v-if="paymentMethod === '1'" class="pdot2">:</p>
                <p v-if="paymentMethod === '1' && isShow" class="readding2">text</p>
                <p v-if="paymentMethod === '1' && isShow" class="readding2">text</p>
                <input v-else-if="paymentMethod === '1' && !isShow" v-model="accountNumber" type="number" class="twiinput2">
            </div>
            <div class="flex" style="width: 615px;">
                <button @click="isShow ? change() : upDate()" type="button" class="btnL"> {{ isShow ? "情 報 更新" : "情 報 確 認" }}</button>
                <p style="height: 20px;"></p>
                <button type="button" class="btnR">契 約 追 加</button>
            </div>

            <div>
                <h1 style="width: 615px; border:0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;">物件リスト</h1>
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

.field {
    margin: -20px 25% ;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: relative;

    .flex {
        text-align: center;
        justify-content: center;
        display: flex;

        .btnL, .btnR {
  width: 150px;
  height: 40px;
  font-size: large;
  position: absolute;
  color: white;
  border-radius: 10px;
  border: 0px solid;
}

.btnL {
  left: 12px;
  background-color: #1962A7;
}

.btnR {
  left: 455px;
  background-color: #B8D26E;
}

.btnL:hover, .btnR:hover {
  opacity: 0.8;
}

.btnL:active, .btnR:active {
  opacity: 0.6;
}
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

    .readding {
        position: absolute;
        left: 120px;
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .readding2 {
        position: absolute;
        left: 465px;
        height: 25px;
        width: 150px;
        border: 0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;
    }

    .soloreadding {
        position: absolute;
        left: 120px;
        height: 25px;
        width: 495px;
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
}

.twiinput::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: rgb(100, 165, 3);
}
</style>
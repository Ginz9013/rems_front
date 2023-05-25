<script>
import { RouterLink, RouterView } from 'vue-router'

import ModalView from "../components/ModalView.vue";
export default {
    props: [
        "getid"
    ],
    components: {
        ModalView
    },
    data() {
        return {
            modalShow: false,
            isShow: true,
            alllandlord: [],
            paymentMethod: 0, // 預設支付方式為振り込み
            accountNumber: ""
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        change() {
            this.isShow = !this.isShow; //F/T相反
        },
        getLandlord() {
            let alllandlord = [];
            console.log(this.getid);
            return fetch('http://localhost:8080/get_Landlord', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "landlord_id": this.getid
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    alllandlord = data.landlordList;
                    console.log(alllandlord);
                    this.alllandlord = alllandlord[0];
                    console.log(this.alllandlord);
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        // updatedlandlord() {
        //     return fetch('http://localhost:8080/get_Landlord', {

        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json'       
        //         },
        //         body: JSON.stringify({
        //             "landlord_id":1
        //         })
        //         })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //             this.alllandlord = data.landlordList;
        //             console.log(getid);                        
        //             })
        //         .catch((error) => {
        //             console.error(error);
        //         })
        // },
    },
    mounted() {
        this.getLandlord()
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
                <p v-if="isShow" class="readding">{{ alllandlord.firstName }}</p>
                <input v-else type="text" class="twiinput">
                <p style="height: 20px;"></p>
                <p class="pfooter">名</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ alllandlord.lastName }}</p>
                <input v-else type="text" class="twiinput2">
            </div>
            <div class="flex">
                <p class="phead">セイ</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ alllandlord.firstNameKana }}</p>
                <input v-else type="text" class="twiinput">
                <p style="height: 20px;"></p>
                <p class="pfooter">メイ</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ alllandlord.lastNameKana }}</p>
                <input v-else type="text" class="twiinput2">
            </div>
            <div class="flex">
                <p class="phead">生年月日</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ alllandlord.birthDate }}</p>
                <input v-else type="date" class="twiinput">
                <p style="height: 20px;"></p>
                <p class="pfooter">電話番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ alllandlord.phone }}</p>
                <input v-else type="number" class="twiinput2">
            </div>
            <div class="flex">
                <p class="phead">マイナンバー</p>
                <p class="pdot">:</p>
                <p v-if="isShow" class="readding">{{ alllandlord.myNumber }}</p>
                <input v-else type="number" class="twiinput">

                <p style="height: 20px;"></p>
                <p class="pfooter">免許番号</p>
                <p class="pdot2">:</p>
                <p v-if="isShow" class="readding2">{{ alllandlord.license }}</p>
                <input v-else type="number" class="twiinput2">
            </div>
            <div class="flex">
                <p class="phead">住所</p>
                <p class="pdot">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{ alllandlord.address }}</p>
                <input v-else type="text" class="soloinput">
            </div>
            <div class="flex">
                <p class="phead">Email</p>
                <p class="pdot">:</p>
                <p style="height: 20px;"></p>
                <p v-if="isShow" class="soloreadding">{{ alllandlord.email }}</p>
                <input v-else type="email" class="soloinput">
            </div>
            <div class="flex">
                <p class="phead">支払方法</p>
                <p class="pdot">:</p>
                <select v-model="paymentMethod" id="group" value="1" class="twiinput">
                    <option value="0">支払方法選択</option>
                    <option value="1">振り込み</option>
                    <option value="2">現金</option>
                </select>
                <p style="height: 20px;"></p>
                <p v-if="paymentMethod === '1'" class="pfooter">口座番号</p>
                <p v-if="paymentMethod === '1'" class="pdot2">:</p>
                <p v-if="paymentMethod === '1' && isShow" class="readding2">text</p>
                <p v-if="paymentMethod === '1' && isShow" class="readding2">text</p>
                <input v-else-if="paymentMethod === '1' && !isShow" v-model="accountNumber" type="number" class="twiinput2">
            </div>
            <div class="flex" style="width: 615px;">
                <button @click="change" v-if="isShow" type="button" class="btnL">情 報 更新</button>
                <button @click="change" v-else type="button" class="btnL">情 報 確 認</button>
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
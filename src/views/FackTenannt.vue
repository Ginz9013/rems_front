<script>
import SearchBar from "../components/SearchBar.vue";
import addContrcat from "../components/NewContract.vue";
import PropertySearch from "../components/PropertySearch.vue"

import Child from "../components/PropertiesChild.vue";

export default {
    components: {
        SearchBar,
        addContrcat,
        PropertySearch,
        Child

    },
    props: [
        "img",
        "property_id",
        "property_name",
        "adress",
        "rental_price",
        "build_year",
        "start_year",
        "start_month",
        "start_day",
    ],
    data() {
        return {
            get: "",
            subModalShow: false,
            modalShow: false,
            searchModalShow: false,
            propertyData: [{
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 1,
                property_name: "我愛螺旋完蛋了",
                adress: "你屁股後面",
                rental_price: 9487,
                build_year: 0,
                landlord_name: "阿部高和",
                tenant_name: "野獸前輩",
                key_money: 2,
                deposit: 3

            }],
            startObject: null,
            year: null,
            month: null,
            day: null,
            fname: '',
            lname: '',
            fullname: ''

        }
    },
    methods: {
        switchSubModal() {
            this.subModalShow = !this.subModalShow;
        },
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        handleButtonClick(value) {
            console.log(value); // 打印子组件传递的值
            // 在这里处理子组件传递的值，可以进行其他操作
            this.get = value;
            this.year = value.start_year;
            this.month = value.start_month;
            this.day = value.start_day;
            this.startObject = new Date(this.year, this.month - 1, this.day);
            this.startObject = this.formatDate(this.year, this.month, this.day);
        },
        formatDate(year, month, day) {
            // 將年、月、日轉換為YYYY-MM-DD的日期格式
            return `${year}-${this.padNumber(month)}-${this.padNumber(day)}`;
        },
        padNumber(number) {
            // 將數字補零成兩位數字的字串
            return String(number).padStart(2, '0');
        },
        newContract() {
            this.get = "";
            this.$emit('new');
        },
        switchAndClear() {
            this.newContract();
            this.switchModal();
            this.fullname = this.formatName(this.fname, this.lname)
        },
        formatName(fname, lname) {
            return `${fname}${" "}${lname}`;
        },

    }
}

</script>
<template>
    <div>

        <div class="field">
            <div>
                <h1 style="width: 615px; border:0;
        border-bottom: 1px;
        border-color: rgb(100, 165, 3);
        border-style: solid;">貸主情報</h1>
            </div>
            <div>
                <div class="flex">
                    <p class="phead">姓</p>
                    <p class="pdot">:</p>
                    <input v-model="fname" type="text" class="twiinput">
                    <p style="height: 20px;"></p>
                    <p class="pfooter">名</p>
                    <p class="pdot2">:</p>
                    <input v-model="lname" type="text" class="twiinput2">
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
                    <p class="phead">email</p>
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
                <div class="flex" style="width: 615px;">
                    <button type="button" class="btnL">情 報 確 認</button>
                    <p style="height: 20px;"></p>
                    <button @click="switchAndClear" type="button" class="btnR">物 件 追 加</button>
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
        <!-- <button @click="switchAndClear" type="button">addcontract</button> -->
        <addContrcat v-if="modalShow" :title="'契 約 追 加'" @close="switchModal">
            <div class="addContract">
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">物件名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input v-bind:value="get.property_name" type="text" aria-describedby="inputGroup-sizing-sm"
                            class="form-control">
                    </dt>
                    <dt @click="switchSubModal" style="position: absolute; top: 98px; left: 56vw;"><button
                            type="button">検索</button></dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">貸主名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input v-bind:value="get.landlord_name" type="text" aria-describedby="inputGroup-sizing-sm"
                            class="form-control">
                    </dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">借主名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="fullname" type="text" aria-describedby="inputGroup-sizing-sm"
                            class="form-control"></dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">礼金</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.key_money" type="number"
                            aria-describedby="inputGroup-sizing-sm" class="form-control"></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">敷金</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.deposit" type="number"
                            aria-describedby="inputGroup-sizing-sm" class="form-control"></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">賃料</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.rental_price" type="number"
                            aria-describedby="inputGroup-sizing-sm" class="form-control"></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">契約開始日</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input type="date" aria-describedby="inputGroup-sizing-sm" class="form-control">
                    </dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">期限</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input type="date" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            ></dt>
                </dl>
                <div class="d-flex justify-content-center">
                    <button @click="switchModal" type="button" class="btn btn-primary px-5">確認</button>
                </div>
            </div>
            <PropertySearch v-if="subModalShow" :title="'查詢物件'" @close="switchSubModal">
                <div class="addContract">
                    <SearchBar :conditionList="['物件','借主', '契約コード']" @searchResponse="getInfo" />
                    <div class="list">
                        <div class="addContract">
                            <Child @click="switchSubModal" @button-click="handleButtonClick"
                                v-for="property in propertyData" v-bind:key="property.property_id"
                                v-bind:property="property" />

                        </div>

                    </div>
                </div>
            </PropertySearch>

        </addContrcat>
    </div>
</template>
<style lang="scss" scoped>
.addContract {
    width: 60vw;
    height: 80vh;

    .list {
        margin-top: 15%;
        justify-content: center;
        text-align: center;
        width: 50vw;
        height: 70vh;
    }
}

.field {

    margin-left: 24vw;
    margin-right: 24vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: relative;

    .flex {
        text-align: center;
        justify-content: center;
        display: flex;

        .btnL {
            width: 150px;
            height: 40px;
            font-size: large;
            position: absolute;
            left: 12px;
            color: white;
            border-radius: 10px;
            background-color: #0e4e8a;
        }

        .btnR {
            width: 150px;
            height: 40px;
            font-size: large;
            position: absolute;
            left: 455px;
            color: white;
            border-radius: 10px;
            background-color: rgb(100, 165, 3);
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
</style>
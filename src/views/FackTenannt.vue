<script>
import SearchBar from "../components/SearchBar.vue";
import addPayment from "../components/Payment.vue";
import PropertySearch from "../components/PropertySearch.vue"

import Child from "../components/PropertiesChild.vue";

export default {
    components: {
        SearchBar,
        addPayment,
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
                start_year: 1999,
                start_month: 1,
                start_day: 1,
                landlord_name: "阿部高和",
                tenant_name: "野獸前輩",
                key_money: 2,
                deposit: 3,
                payment_deadline: "2023-09-04",

            },
            {
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 2,
                property_name: "我愛螺旋完蛋了2",
                adress: "你屁股後面1",
                rental_price: 9487,
                build_year: 0,
                start_year: 1911,
                start_month: 1,
                start_day: 1,
                landlord_name: "阿部高和",
                tenant_name: "野獸前輩",
                key_money: 2,
                deposit: 3,
                
            },
            {
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 3,
                property_name: "我愛螺旋完蛋了3",
                adress: "你屁股後面2",
                rental_price: 9487,
                build_year: 0,
                start_year: 1911,
                start_month: 1,
                start_day: 1,
                landlord_name: "阿部高和",
                tenant_name: "野獸前輩",
                key_money: 2,
                deposit: 3,
            }],
            startObject: null,
            year: null,
            month: null,
            day: null,

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
            this.get = value
            this.year = value.start_year,
            this.month = value.start_month,
            this.day = value.start_day
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
        newContract(){
            this.get.property_name = '';
    this.get.landlord_name = '';
    this.get.tenant_name = '';
    this.get.key_money = '';
    this.get.deposit = '';
    this.get.rental_price = '';
    this.startObject = null;
    this.get.payment_deadline = null;
            this.$emit('new');
        }

    },
    mounted() {

    }
}
</script>
<template>
    <div>

        <button @click="switchModal" @new="newContract" type="button">addcontract</button>
        <addPayment v-if="modalShow" :title="'入金資訊'" @close="switchModal">
            <div class="addPayment">
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">物件名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input v-bind:value="get.property_name" type="text" aria-describedby="inputGroup-sizing-sm"
                            class="form-control" placeholder="シティスパイア新富町">
                    </dt>
                    <dt @click="switchSubModal" style="position: absolute; top: 98px; left: 56vw;"><button
                            type="button">検索</button></dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">貸主名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input v-bind:value="get.landlord_name" type="text" aria-describedby="inputGroup-sizing-sm" class="form-control" placeholder="田中 理惠">
                    </dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">借主名</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.tenant_name" type="text" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            placeholder="新垣 結依"></dt>
                </dl>
                <dl class="row d-flex justify-content-center">
                    <dt class="col-sm-2 text-primary">礼金</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.key_money" type="number" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            placeholder=""></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">敷金</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.deposit" type="number" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            placeholder=""></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">賃料</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.rental_price" type="number" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            placeholder=""></dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">契約開始日</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6">
                        <input v-bind:value="startObject" type="date" aria-describedby="inputGroup-sizing-sm"
                            class="form-control" placeholder="">
                    </dt>
                </dl>
                <dl class="row d-flex justify-content-center ">
                    <dt class="col-sm-2 text-primary">期限</dt>
                    <dt class="col-sm-1 text-primary">：</dt>
                    <dt class="col-sm-6"><input v-bind:value="get.payment_deadline" type="date" aria-describedby="inputGroup-sizing-sm" class="form-control"
                            placeholder=""></dt>
                </dl>
                <div class="d-flex justify-content-center">
                    <button @click="switchModal" type="button" class="btn btn-primary px-5">確認</button>
                </div>
            </div>
            <PropertySearch v-if="subModalShow" :title="'查詢物件'" @close="switchSubModal">
                <div class="addPayment">
                    <SearchBar :searchCondition="['物件', '借主', '契約コード']" />
                    <div class="list">
                        <div class="addPayment">
                            <Child @click="switchSubModal" @button-click="handleButtonClick"
                                v-for="property in propertyData" v-bind:key="property.property_id"
                                v-bind:property="property" />

                        </div>

                    </div>
                </div>
            </PropertySearch>

        </addPayment>
    </div>
</template>
<style lang="scss" scoped>
.addPayment {
    width: 60vw;
    height: 80vh;

    .list {
        justify-content: center;
        text-align: center;
        width: 50vw;
        height: 70vh;
    }
}
</style>
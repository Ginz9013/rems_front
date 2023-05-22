<script>
import SearchBar from "../components/SearchBar.vue";
import ModalView from "../components/ModalView.vue";
import SearchView from "../components/PropertyModalView.vue"

import Child from "../components/PropertiesChild.vue";
import { defaultModifiers } from "@popperjs/core/lib/popper-lite";
export default {
    components: {
        SearchBar,
        ModalView,
        SearchView,

        Child

    },
    data() {
        return {
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
                start_year: 1911,
                start_month: 1,
                start_day: 1

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
                start_day: 1
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
                start_day: 1
            }]
        }
    },
    methods: {
        switchSubModal() {
            this.subModalShow = !this.subModalShow;
        },
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        switchSearchModal() {
            this.searchModalShow = !this.searchModalShow;
        }


    }
}
</script>
<template>
    <div>
        <h1>Log in Page / 元件範例</h1>
        <h2>元件說明: (元件內部也有註解說明)</h2>
        <p>請 props "searchCondition" 傳入搜索條件的陣列，並 @emmit 一個 SearchResponse ，會回傳 [搜索條件, 搜索關鍵字] 的陣列資訊</p>
        <SearchBar :searchCondition="['物件', '借主', '契約コード']" />

        <p>請由外部綁定 v-if 作為顯示切換，並 props 傳入標題字串，@close綁定視窗右上角取消事件</p>
        <p></p>

        <div>
            <button @click="switchModal" type="button">addcontract</button>
            <SearchView v-if="subModalShow" :title="'查詢物件'" @close="switchSubModal">

            </SearchView>

            <ModalView @button-clicked="handleButtonClicked" v-if="modalShow" :title="'入金資訊'" @close="switchModal">
                <div class="addPayment">
                    <dl class="row d-flex justify-content-center">
                        <dt class="col-sm-2 text-primary">物件名</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="text" aria-describedby="inputGroup-sizing-sm" class="form-control"
                                placeholder="シティスパイア新富町"></dt>
                        <dt @click="switchSubModal" style="position: absolute; top: 98px; left: 56vw;"><button
                                type="button">検索</button></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center">
                        <dt class="col-sm-2 text-primary">貸主名</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="text" aria-describedby="inputGroup-sizing-sm" class="form-control"
                                placeholder="田中 理惠"></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center">
                        <dt class="col-sm-2 text-primary">借主名</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="text" aria-describedby="inputGroup-sizing-sm" class="form-control"
                                placeholder="新垣 結依"></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center">
                        <dt class="col-sm-2 text-primary">礼金</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="number" aria-describedby="inputGroup-sizing-sm"
                                class="form-control" placeholder=""></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center ">
                        <dt class="col-sm-2 text-primary">敷金</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="number" aria-describedby="inputGroup-sizing-sm"
                                class="form-control" placeholder=""></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center ">
                        <dt class="col-sm-2 text-primary">賃料</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="number" aria-describedby="inputGroup-sizing-sm"
                                class="form-control" placeholder=""></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center ">
                        <dt class="col-sm-2 text-primary">契約開始日</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="date" aria-describedby="inputGroup-sizing-sm" class="form-control"
                                placeholder=""></dt>
                    </dl>
                    <dl class="row d-flex justify-content-center ">
                        <dt class="col-sm-2 text-primary">期限</dt>
                        <dt class="col-sm-1 text-primary">：</dt>
                        <dt class="col-sm-6"><input type="number" aria-describedby="inputGroup-sizing-sm"
                                class="form-control" placeholder=""></dt>
                    </dl>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-primary px-5">確認</button>
                    </div>
                </div>
                <SearchView v-if="subModalShow" :title="'查詢物件'" @close="switchSubModal">
                    <div class="addPayment">
                        <SearchBar :searchCondition="['物件', '借主', '契約コード']" />
                        <div class="list">
                            <div class="addPayment">
                                <Child @close="switchSubModal" v-for="property in propertyData" :key="property.property_id" :img="property.img"
                                    :property_id="property.property_id" :property_name="property.property_name"
                                    :adress="property.adress" :rental_price="property.rental_price"
                                    :build_year="property.build_year" :start_year="property.start_year"
                                    :start_month="property.start_month" :start_day="property.start_day" />
                            </div>

                        </div>
                    </div>
                </SearchView>

            </ModalView>
        </div>
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
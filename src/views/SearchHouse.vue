<script>
import Wire from "../components/Wire.vue";
import properties from "../components/properties.vue"
import SearchBar from "../components/SearchBar.vue";
export default {
    components: {
        Wire,
        properties,
        SearchBar
    },
    data() {
        return {
            propertyList: [],
            selectedOption: '2',
            districtList: [],
            typeList: [],
            layoutList: [],
            highPrice: null,
            lowPrice: null,
            keyMoney: 0,
            deposit: 0,
            image64:""
        }
    },
    methods: {
        getALL() {
            const body = {
            }
            fetch("http://localhost:8080/get_property_all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.propertyList = data.propertyList;
                    this.image64 ="data:image/png;base64," + data.propertyList[0].propertyImage
                })
        },
        search() {
            if (this.selectedOption === '1') {
                this.getTokyo();
            } else if (this.selectedOption === '2') {
                this.getKyoto();
            }
        },
        getKyoto() {
            let districtKyoto = this.districtList
            let typeKyoto = this.typeList
            let layoutKyoto = this.layoutList
            if(this.keyMoney === true){
                this.keyMoney = null
            }else{
                this.keyMoney=0
            }
            if(this.deposit === true){
                this.deposit = null
            }else{
                this.deposit=0
            }
            let body = {
                "prefecture":"京都府",
                district0: null,
                district1: null,
                district2: null,
                district3: null,
                district4: null,
                district5: null,
                "highPrice": this.highPrice,
                "lowPrice": this.lowPrice,
                type0: null,
                type1: null,
                type2: null,
                layout0: null,
                layout1: null,
                layout2: null,
                layout3: null,
                layout4: null,
                layout5: null,
                layout6: null,
                layout7: null,
                layout8: null,
                layout9: null,
                layout10: null,
                layout11: null,
                layout12: null,
                layout13: null,
                "keyMoney": this.keyMoney,
                "deposit": this.deposit
            }
            districtKyoto.forEach((item, index) => {
                body[`district${index}`] = item
            })
            typeKyoto.forEach((item, index) => {
                body[`type${index}`] = item
            })
            layoutKyoto.forEach((item, index) => {
                body[`layout${index}`] = item
            })

            fetch("http://localhost:8080/get_property_by_kyoto_prefecture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.propertyList = data.propertyList
                    if(data.errorCode === '400'){
                        alert(data.message)
                    }
                })
        },
        getTokyo() {
            let districtKyoto = this.districtList
            let typeKyoto = this.typeList
            let layoutKyoto = this.layoutList
            const body = {
                "prefecture": "東京都",
                district6: null,
                district7: null,
                district8: null,
                "highPrice": this.highPrice,
                "lowPrice": this.lowPrice,
                type0: null,
                type1: null,
                type2: null,
                layout0: null,
                layout1: null,
                layout2: null,
                layout3: null,
                layout4: null,
                layout5: null,
                layout6: null,
                layout7: null,
                layout8: null,
                layout9: null,
                layout10: null,
                layout11: null,
                layout12: null,
                layout13: null,
                "keyMoney": this.keyMoney,
                "deposit": this.deposit
            }
            districtKyoto.forEach((item, index) => {
                body[`district${index}`] = item
            })
            typeKyoto.forEach((item, index) => {
                body[`type${index}`] = item
            })
            layoutKyoto.forEach((item, index) => {
                body[`layout${index}`] = item
            })
            fetch("http://localhost:8080/get_property_by_tokyo_prefecture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then((response) => {

                    return response.json();
                })
                .then((data) => {
                    this.propertyList = data.propertyList
                    if(data.errorCode === '400'){
                        alert(data.message)
                    }
                })

        },
        searchByKeyWord(res) {
            let condition = null;
            let body = null;

            if (res.condition === "物件名稱") {
                condition = 'property_name';

                body = {
                    "propertyName": res.keyWord,
                }
            }
            if (res.condition === "貸主姓名") {
                condition = 'landlord_name';

                body = {
                    "landlordName": res.keyWord,
                }
            }
            if (res.condition === "借主姓名") {
                condition = 'tenant_name'
                body = {
                    "tenantName": res.keyWord,
                }
            }
            if (res.condition === "契約コード") {
                condition = 'contract_id'
                body = {
                    "contractId": res.keyWord,
                }
            }
            fetch(`http://localhost:8080/get_property_by_${condition}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then((response) => {

                    return response.json();
                })
                .then((data) => {
                    this.propertyList = data.propertyList
                })
        }
    },
    mounted() {
        this.getALL();
        this.districtList= []
    },
    watch: {
    selectedOption() {
      this.districtList = []; // 在选项变化时重置 districtList
    },
  },
}
</script>

<template >
    <div class="serch">
        <SearchBar :conditionList="['物件名稱', '貸主姓名', '借主姓名', '契約コード']" @searchResponse="searchByKeyWord" />
    </div>
    <div class="flex">
        <div class="checkbox">
            <div>
                <p class="wire">都道府縣</p>
                <Wire />
                <select v-model="selectedOption" class="form-select down select" aria-label="Default select example">
                    <option value="1">東京都</option>
                    <option value="2">京都府</option>
                </select>
            </div>
            <div>
                <p class="wire">地域</p>
                <Wire />
                <div v-if="selectedOption === '2'" class="flex">
                    <div class="down down2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="中京区" value="京都市中京区" id="flexCheckDefault1"
                                v-model="districtList">
                            <label class="form-check-label" for="中京区">
                                中京区
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="左京区" value="左京区" id="flexCheckDefault2"
                                v-model="districtList">
                            <label class="form-check-label" for="左京区">
                                左京区
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="右京区" value="京都市右京区" id="flexCheckDefault3"
                                v-model="districtList">
                            <label class="form-check-label" for="右京区">
                                右京区
                            </label>
                        </div>
                    </div>
                    <div class="down">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="上京区" value="京都市上京区" id="flexCheckDefault4"
                                v-model="districtList">
                            <label class="form-check-label" for="上京区">
                                上京区
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="下京区" value="下京区" id="flexCheckDefault5"
                                v-model="districtList">
                            <label class="form-check-label" for="下京区">
                                下京区
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="伏見区" value="伏見区" id="flexCheckDefault6"
                                v-model="districtList">
                            <label class="form-check-label" for="伏見区">
                                伏見区
                            </label>
                        </div>
                    </div>
                </div>
                <div v-else class="down1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="中央区" value="中央区" id="flexCheckDefault"
                            v-model="districtList">
                        <label class="form-check-label" for="中央区">
                            中央区
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="新宿区" value="新宿区" id="flexCheckDefault"
                            v-model="districtList">
                        <label class="form-check-label" for="新宿区">
                            新宿区
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="港区" value="港区" id="flexCheckDefault"
                            v-model="districtList">
                        <label class="form-check-label" for="港区">
                            港区
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <p class="wire">賃料</p>
                <Wire />
                <input class="input1" type="number" v-model="highPrice" placeholder="最高價格">
                <input class="input2" type="number" v-model="lowPrice" placeholder="最低價格">
                <div class="down down2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="敷金" value=null id="flexCheckDefault"
                            v-model="deposit">
                        <label class="form-check-label" for="敷金">
                            敷金なし
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="礼金" value=null id="flexCheckDefault"
                            v-model="keyMoney">
                        <label class="form-check-label" for="礼金">
                            礼金なし
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <p class="wire">物件種目</p>
                <Wire />
                <div class="down">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="マンション" value=0 id="flexCheckDefault"
                            v-model="typeList">
                        <label class="form-check-label" for="マンション">
                            マンション
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="アパート" value=1 id="flexCheckDefault"
                            v-model="typeList">
                        <label class="form-check-label" for="アパート">
                            アパート
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="一戸建て" value=2 id="flexCheckDefault"
                            v-model="typeList">
                        <label class="form-check-label" for="一戸建て">
                            一戸建て
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <p class="wire">間取り</p>
                <Wire />
                <div class="flex">
                    <div class="down ">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="ワンルーム" value=0 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="ワンルーム">
                                ワンルーム
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="1K" value=1 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="1K">
                                1K
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="1DK" value=2 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for=" 1DK">
                                1DK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="1LDK" value=3 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="1LDK">
                                1LDK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="2K" value=4 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="2K">
                                2K
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="2DK" value=5 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="2DK">
                                2DK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="2LDK" value=6 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="2LDK">
                                2LDK
                            </label>
                        </div>
                    </div>
                    <div class="down">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="3K" value=7 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="3K">
                                3K
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="3DK" value=8 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="3DK">
                                3DK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="3LDK" value=9 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="3LDK">
                                3LDK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="4K" value=10 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="f4K">
                                4K
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="4DK" value=11 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="4DK">
                                4DK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="4LDK" value=12 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="4LDK">
                                4LDK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="4LDK以上" value=13 id="flexCheckDefault"
                                v-model="layoutList">
                            <label class="form-check-label" for="4LDK以上">
                                4LDK以上
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btnSearch btn btn-primary px-5" type="button" @click="search">検索</button>
        </div>
        <div class="property">
            <properties :propertyList="propertyList" />
        </div>
    </div>
</template>


<style  scoped> .serch {
     margin-left: 350px;
     margin-top: 30px;
     width: 800px;
 }

 .btnSearch {
     margin-top: -20px;
 }

 .property {
     margin-top: 50px;
 }

 .checkbox {
     margin-top: 30px;
     margin-bottom: 80px;
     margin-left: 300px;
     height: 800px;
     width: 250px;
 }

 .wire {
     margin: 5px 0;
 }

 .down {
     margin-bottom: 25px;
     margin-left: 10px;
 }

 .down1 {
     margin-left: 10px;
     width: 250px;
     height: 103px;
 }

 .select {
     margin-top: 10px;
     width: 150px;
 }

 .flex {
     display: flex;
 }

 .input1 {
     margin-left: 10px;
 }

 .input2 {
     margin-left: 10px;
     margin-top: 10px;
     margin-bottom: 10px;
 }
</style>
<script>
import detail  from "../components/LandlordInfo.vue"
export default {
     // 1. 請帶入搜尋條件陣列，名稱: conditionList ，下拉選單會自動帶入
    // 2. 請@searchResponse，會回傳一個物件，包含搜索條件跟搜尋關鍵字
    // 範例 <SearchBar :conditionList="['物件','借主', '契約コード']" @searchResponse="getInfo">
    props: [
        "searchCondition",
        "conditionList"
        
],
    components: {
        detail
    },
    data() {
        return {
            placeholderString : null,
             // 回傳的物件格式
        //      searchCondition: {
        //         condition: this.conditionList[0],
        //         keyWord: ""
        //     },
        //     search:"",
        //     result:[],
        //     textAAA:123
         }
    },
    methods:{
        // 搜尋
        search_Landlord(){
            let textAAA=123
            let resultArr=[]
            console.log(this.search)
             fetch('http://localhost:8080/search_Landlord', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'       
                },
                body: JSON.stringify({
                    "search":this.search,                  
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);                                    
                    resultArr = data.landlordList; 
                    console.log(resultArr)
                    this.$emit("emitPush",resultArr)                      
                    })
                .catch((error) => {
                    console.error(error);
                })
        },
        switchCondition(item) {
            this.searchCondition.condition = item;
            console.log(this.searchCondition.condition);
        },
        returnCondition() {
            this.$emit("searchResponse", this.searchCondition)
        }
    },
    mounted() {
        // 組搜索欄位 placeholder 字串
        this.placeholderString  = this.conditionList.map(item => {
            if(item === this.conditionList[this.conditionList.length - 1]) {
                return item
            }

            return item + " / "
        }).join("")

    },
    mounted() {
        // 組搜索欄位 placeholder 字串
        this.placeholderString  = this.searchCondition.map(item => {
            if(item === this.searchCondition[this.searchCondition.length - 1]) {
                return item
            }

            return item + " / "
        }).join("")

        
    }
}
</script>
<template>
        <div class="input-group mb-3">
            <input type="text" class="form-control" :placeholder="placeholderString" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="search">

            <!-- 下拉選單區 -->
            <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ searchCondition[0] }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="list in searchCondition"><a class="dropdown-item" href="#">{{ list }}</a></li>
            </ul>
            <!-- 下拉選單區 -->

            <button class="btn btn-primary px-5" type="button" id="button-addon2" @click="search_Landlord">検索</button>
        </div>
</template>
<style>
</style>
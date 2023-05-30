<script>
import { RouterLink } from 'vue-router'
export default {
  components: {},
  props: {
  landlordId: {
    type: String,
    required: true
  }
},

  
  data(){
      return{
        ContractList: [],
        ContractResult: [],
        nowYear: null,
        nowMonth: null,
        nowDate: null
      }
  },
  methods:{
    //test
    passLandlordId(contractId) {
        console.log(contractId)
        //轉址帶ID
        this.$router.push({
        name: 'keiyaku_info',
        params: { contract_id: contractId }
        });
    },

    getContractID(){
        const body = {
            //Property那一頁要接一樣的ID
            //接上一頁的物件ID
                "propertyID":12
            }
        //
        fetch('http://localhost:8080/getContractsYMD', {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(body)
            
        })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.ContractList = data.ropertiesResponseList
          data.ropertiesResponseList
        })
    }

  },
  mounted() {
    this.getContractID()
    const date = new Date();
    this.nowYear = date.getFullYear();
    this.nowMonth = date.getMonth() + 1;
    this.nowDate = date.getDate();
  },
  }
</script>
<template>
    <div class="big"
        v-for="item in ContractList"
        v-bind="item.contract_id"
        :value = "item.contract_id"
        @click="switchUrl"
        >
        <div class="time">
            <p>契約時間:</p>
        </div>
        <div>
            <p>{{ item.start_year }}/{{ item.start_month }}/{{ item.start_day }} ~ {{ item.end_year }}/{{ item.end_month }}/{{ item.end_day }}</p>
        </div>
        
        <div>
          <div  @click="passLandlordId(item.contractID)">{{ item.end_year > nowYear ? '契約中~' : '歷史契約' }}</div>
          <!-- @click="passLandlordId($event, landlord.landlordId)"
          <RouterLink to="/keiyaku_info">{{ item.end_year > nowYear ? '契約中' : '歷史契約' }}</RouterLink> -->
        <!-- <p>連結</p> 我想讓現行契約顯示"契約中"，歷史契約顯示"歷史契約" -->
        </div>
    </div>
</template>

<style>
.big{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
}
</style>
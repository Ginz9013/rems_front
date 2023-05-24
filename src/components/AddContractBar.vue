<script>
import { RouterLink } from 'vue-router';
export default {
  components: {},
  // props: [
  //     "house",
  //     "landlord",
  //     "tenant"

  // ],
  data() {
    return {
      // selectContract
      ContractList: [],
      // selectContractDetail
      infoList:[],
      contractId: "",
      property: "",
      landlord: "",
      tenant: "",
      giftMoney: "",
      deposit: "",
      startDate: "",
      endDate:"",
    }
  },
  methods: {
    switchURL(contractId) { 
        console.log("hi")
        this.$router.push("/keiyaku/info")
        this.selectContractDetail()
    },
    selectContract() {
      fetch('http://localhost:8080/getAllContracts', {})
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          this.ContractList = data.contractResponse
        })
    },
    selectContractDetail(){

      let body = {
        contractID: this.contractId,
      }

      fetch('http://localhost:8080/FindContractDetailsData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          this.contractId = data.contract_id
          this.property = data.pProperty_name
          this.landlord = data.lFirst_name + data.lLast_name
          this.tenant = data.tFirst_name + data.tLast_name
          this.giftMoney = data.pKey_money
          this.deposit = data.pDeposit
          this.startDate = data.cdStart_year + data.cdStart_month + data.cdStart_day
          this.endDate = data.cdEnd_year + data.cdEnd_month + data.cdEnd_day
        })
    },
    selectInfo(){
      this.$emit("contractInfo",this.contractId)
    
    },

  },
  mounted() {
    
    this.selectContract()
  }
}
</script>
<template>
  <div
    v-for="item in ContractList"
    v-bind:key="item.id"
    @click="switchURL"
    class="d-flex+ justify-content-center border border-secondary mt-3"
    style="width: 600px; height: 130px">

    <h5 class="col-sm-8 text-start ms-6">{{ item.property_name }}</h5>
    <h6 class="col-sm-10 text-center mt-3">{{ item.llFirst_name + item.llLast_name }}</h6>
    <h6 class="col-sm-10 text-center">{{ item.ttFirst_name + item.ttLast_name }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
<!-- @click="switchURL" -->
<!-- <img src="../views/ContractDetails.vue" alt=""> -->
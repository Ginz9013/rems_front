<script>
import { RouterLink } from 'vue-router'
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
      infoList: [{
        property: null,
        landlord: null,
        tenant: null,
        giftMoney: null,
        deposit: null,
        rent: null,
        startDate: null,
        endDate: null
        
      }],
      // contractID: null,
      // property: null,
      // landlord: null,
      // tenant: null,
      // giftMoney: null,
      // deposit: null,
      // rent: null,
      // startDate: null,
      // endDate: null
    }
  },
  methods: {
    //轉址
    switchURL(event, contractId) {
      console.log(event)
      console.log(contractId)
      console.log(this.infoList);
      //this.$router.push("/keiyaku/info")

      this.$router.push({
        name: 'keiyaku_info',
        params: { contract_id: contractId }
      })
      // this.selectContractDetail()
      // this.$emit('contract_data', this.infoList)
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
    // selectContractDetail() {
    //   let body = {
    //     "contractID": contractId
    //   }

    //   fetch('http://localhost:8080/FindContractDetailsData', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    //   })
    //     .then((response) => {
    //       return response.json()
    //     })
    //     .then((data) => {
    //       console.log(data)
    //       this.infoList.contractId = data.contract_id;
    //       this.infoList.property = data.pProperty_name;
    //       this.infoList.landlord = data.lFirst_name + data.lLast_name;
    //       this.infoList.tenant = data.tFirst_name + data.tLast_name;
    //       this.infoList.giftMoney = data.pKey_money;
    //       this.infoList.deposit = data.pDeposit;
    //       this.infoList.rent = data.rent;
    //       this.infoList.startDate = data.cdStart_year + data.cdStart_month + data.cdStart_day;
    //       this.infoList.endDate = data.cdEnd_year + data.cdEnd_month + data.cdEnd_day;
    //     })
    // },
    selectInfo() {
      this.$emit('contractInfo', this.contractId)
    }
  },
  mounted() {
    this.selectContract()
  }
}
</script>
<template>
  <div
    v-for="item in ContractList"
    v-bind:key="item.contract_id"
    :value="item.contract_id"
    @click="switchURL($event, item.contract_id)"
    class="d-flex+ justify-content-center border border-secondary mt-3"
    style="width: 600px; height: 130px"
  >
    <h5 class="col-sm-8 text-start ms-6">{{ item.property_name }}</h5>
    <h6 class="col-sm-10 text-center mt-3">{{ item.llFirst_name + item.llLast_name }}</h6>
    <h6 class="col-sm-10 text-center">{{ item.ttFirst_name + item.ttLast_name }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
<!-- @click="switchURL" -->
<!-- <img src="../views/ContractDetails.vue" alt=""> -->

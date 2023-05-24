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
      ContractList: []
    }
  },
  methods: {
    switchURL() { 
        console.log("hi")
        this.$router.push("/keiyaku/info")
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
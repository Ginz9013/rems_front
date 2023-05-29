<script>
import { RouterLink } from 'vue-router'
export default {
  components: {},
  props: ['contractList'],
  data() {
    return {
      infoList: [
        {
          property: null,
          landlord: null,
          tenant: null,
          giftMoney: null,
          deposit: null,
          rent: null,
          startDate: null,
          endDate: null
        }
      ]
    }
  },
  methods: {
    //轉址
    switchURL(event, contractId) {
      console.log(event)
      console.log(contractId)
      console.log(this.infoList)
      //this.$router.push("/keiyaku/info")

      this.$router.push({
        name: 'keiyaku_info',
        params: { contract_id: contractId }
      })
    },
    getContractExecutionText(execution) {
      if (execution === 0) {
        return "契約終了";
      } else if (execution === 1) {
        return "契約中";
      }
    }
  },
  mounted() {}
}
</script>
<template>
  <div
    v-for="item in contractList"
    v-bind:key="item.contract_id"
    :value="item.contract_id"
    @click="switchURL($event, item.contract_id)"
    class="d-flex+ justify-content-centerjustify-content-center border border-secondary my-5 mx-auto"
    style="width: 600px"
  >
    <h6 class="col-sm-10 text-start ms-6 mt-3 fs-6 fw-bold text-primary">
      {{ item.property_name }}
    </h6>
    <div class="d-flex justify-content-evenly">
      <div class="d-flex flex-column">
        <h6 class="col-sm-12 text-start mt-2 px-3">貸主：{{ item.llFirst_name + item.llLast_name }}</h6>
        <h6 class="col-sm-12 text-start px-3">借主：{{ item.ttFirst_name + item.ttLast_name }}</h6>
      </div>
      <div class="d-flex justify-content-center">
        <h6 class="col-sm-12 text-center mt-3 px-5"><b>{{ getContractExecutionText(item.execution) }}</b></h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

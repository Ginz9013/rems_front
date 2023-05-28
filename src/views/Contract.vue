<script>
import SearchBar from '../components/SearchBar.vue'
import ModalView from '../components/ModalView.vue'
import AddContractBar from '../components/AddContractBar.vue'

export default {
  components: {
    SearchBar,
    ModalView,
    AddContractBar
  },
  data() {
    return {
      modalShow: false,
      contractList: [],
    }
  },
  methods: {
    switchModal() {
      this.modalShow = !this.modalShow
    },
    // selectContract() {
    //   fetch('http://localhost:8080/getAllContracts', {})
    //     .then((response) => {
    //       return response.json()
    //     })
    //     .then((data) => {
    //       console.log(data)
    //       this.contractList = data.contractResponse
    //     })
    // },
    search(res) {
      let condition = null
      console.log(res.keyWord)
      console.log(res.condition)

      let body = null

      if (res.condition === '貸主') {
        condition = "Landlords"
        body = {
          inputName: res.keyWord,
          payment_status_type: 3
        }
      }
      fetch(`http://localhost:8080/find${condition}Name`, {
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
          this.contractList = data.contractResponse
        })
    },
  },
  mounted() {
    // this.selectContract()
  }
}
</script>
<template>
  <div class="d-flex flex-column justify-content-center my-0 mx-auto" style="width: 60%">
    <SearchBar
      :conditionList="['物件', '借主', '貸主']"
      @searchResponse="search"
      class="mt-8 mx-auto"
      style="width: 80%"
    />
    <div class="d-flex justify-content-center mt-5">
      <div class="me-8">
        <h5 class="fw-bolder text-center text-primary mt-5">検索条件</h5>
        <hr class="border border-secondary border-1" style="width: 200px" />

        <div class="form-check d-flex justify-content-center">
          <input class="form-check-input" type="checkbox" value="" id="CheckDefault" />
          <label class="form-check-label" for="CheckDefault">入金あり</label>
        </div>

        <div class="form-check d-flex justify-content-center">
          <input class="form-check-input" type="checkbox" value="" id="CheckChecked" checked />
          <label class="form-check-label" for="CheckChecked">入金なし</label>
        </div>
      </div>
      <div>
        <AddContractBar />
      </div>
    </div>
  </div>
</template>
<style scoped></style>

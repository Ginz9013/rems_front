<script>
import ModalView from '../components/ModalView.vue'
import AddContractBar from '../components/AddContractBar.vue'

export default {
  components: {
    ModalView,
    AddContractBar
  },
  props: ['contract_id'],
  data() {
    return {
      modalShow: false,
      delectModal: false,
      reviseModal: false,
      addModal: false,
      // 判斷是否解約
      showButtons: true,
      // addPayment():用在新增方法的變數
      addType: null,
      addrent: null,
      addDeadline: null,
      addStatus: null,
      // addContractDetail()
      count: null,
      rent: null,
      // selectcontractdetail()
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
      ],
      // getContractDetail()
      contractDate: [],
      // 判斷契約時間結果的陣列
      resoult: [],
      // selectPayment()
      paymentArray: [],
      paymentId: null,
      // 修改入金狀態
      revisePaymentDeadline: null,
      revisePaymentStatus: null,
      revisePaymentId: null,
      reviseStatus: null,
      addDate: null
    }
  },
  methods: {
    switchModal() {
      this.modalShow = !this.modalShow
    },
    delectSwitch() {
      this.delectModal = !this.delectModal
      this.showButtons = !this.showButtons
    },
    reviseSwitch(payment_deadline, payment_id, payment_status) {
      this.reviseModal = !this.reviseModal
      this.revisePaymentDeadline = payment_deadline
      this.revisePaymentStatus = payment_status
      this.revisePaymentId = payment_id
    },
    addSwitch() {
      this.addModal = !this.addModal
      this.showButtons = !this.showButtons
    },
    // 新增契約情報
    addContractDetail() {
      this.addModal = !this.addModal

      let body = {
        count: this.count,
        rent: this.rent,
        contractID: this.contract_id
      }

      fetch('http://localhost:8080/add_contractDetail_info', {
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
          alert(data.message)
        })
    },
    // 新增入金情報
    addPayment() {
      this.modalShow = !this.modalShow

      let body = {
        paymentType: this.addType,
        paymentDeadline: this.addDeadline,
        amount: this.addrent,
        paymentStatus: this.addStatus,
        contractID: this.contract_id
      }

      fetch('http://localhost:8080/add_payment_info', {
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
          // console.log(data)
        })
    },
    // 依契約時間取得契約List
    getContractDetail() {
      let body = {
        contractID: this.contract_id
      }

      fetch('http://localhost:8080/select_contract_detail', {
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
          // console.log(data)
          this.contractDate = data.contractDetailList

          const nowDate = new Date()
          // 用for對contractDetailList進行判斷
          for (let i = 0; i < data.contractDetailList.length; i++) {
            const dateRange = data.contractDetailList[i].split('~')
            const endDate = new Date(dateRange[1])

            if (endDate > nowDate) {
              // console.log('結束日期大於目前時間')
              this.resoult[i] = '契約中'
            } else {
              // console.log('結束日期小於或等於目前時間')
              this.resoult[i] = '終了'
            }
          }
        })
    },
    // 查找契約資料，並顯示在畫面上
    selectContractDetail() {
      let body = {
        contractID: this.contract_id
      }

      fetch('http://localhost:8080/findContractDetailsData', {
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
          // console.log(data)
          this.infoList.contractId = data.contract_id
          this.infoList.property = data.pProperty_name
          this.infoList.landlord = data.lFirst_name + data.lLast_name
          this.infoList.tenant = data.tFirst_name + data.tLast_name
          this.infoList.giftMoney = data.pKey_money
          this.infoList.deposit = data.pDeposit
          this.infoList.rent = data.rent
          this.infoList.startDate =
            data.cdStart_year + '-' + data.cdStart_month + '-' + data.cdStart_day
          this.infoList.endDate = data.cdEnd_year + '-' + data.cdEnd_month + '-' + data.cdEnd_day
        })
    },
    // 查找入金資料，並顯示在畫面上
    selectPayment() {
      let body = {
        contract_id: this.contract_id
      }

      fetch('http://localhost:8080/contractDetailFPayments', {
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
          // this.paymentArray = data.contractDetailPEResponseAList
          this.paymentArray = data.contractDetailPEResponseAList.map((value) => {
            if (value.payment_date === null) {
              value.payment_date = null
            }
            return value
          })
          console.log(this.paymentArray)
        })
    },
    // 更新入金狀態
    updatePayment(payment_id) {
      this.reviseModal = !this.reviseModal

      let body = {
        paymentStatus: this.reviseStatus,
        paymentDate: this.addDate,
        paymentID: this.revisePaymentId
      }
      // console.log(this.reviseStatus)
      // console.log(this.addDate)
      // console.log(this.payment_id)

      fetch('http://localhost:8080/update_payment_info', {
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
        })
    },
    // 契約解除
    cancelContract() {
      // 解約後隱藏按鈕
      this.showButtons = false
      this.delectModal = !this.delectModal

      let body = {
        contractID: this.contract_id
      }

      fetch('http://localhost:8080/deleteAndRenewContracts', {
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
          alert(data.message)
        })
    }
  },

  mounted() {
    this.selectContractDetail(), this.getContractDetail(), this.selectPayment()
  }
}
</script>
<template>
  <div class="contract-area" style="height: 530px">
    <h2 class="fw-bolder text-center mt-5 text-primary">契約情報</h2>
    <hr class="border border-secondary border-2" />
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">物件名</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.property }}</dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">貸主名</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.landlord }}</dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">借主名</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.tenant }}</dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">礼金</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">
        {{ infoList.giftMoney + 'ヶ月' }}
      </dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">敷金</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">
        {{ infoList.deposit + 'ヶ月' }}
      </dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">賃料</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.rent }}</dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">契約開始時間</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.startDate }}</dt>
    </dl>
    <dl class="row ms-6">
      <dt class="col-sm-2 text-primary">契約終了時間</dt>
      <dt class="col-sm-1 text-primary">：</dt>
      <dt class="col-sm-7 border-bottom border-1 border-secondary">{{ infoList.endDate }}</dt>
    </dl>
    <div class="d-flex justify-content-center">
      <button
        @click="addSwitch"
        type="button"
        class="btn btn-primary mx-5 fw-bolder m-3"
        v-if="showButtons"
      >
        更新手続き
      </button>
      <ModalView v-if="addModal" :title="'契約の更新手続き'" @close="addSwitch">
        <div class="" style="height: 250px; width: 500px">
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-sm-3 text-primary">賃料</div>
            <div class="col-sm-1 text-primary">：</div>
            <div class="col-sm-5">
              <input
                type="number"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
                v-model="rent"
              />
            </div>
          </div>
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-sm-3 text-primary">契約期間(月)</div>
            <div class="col-sm-1 text-primary">：</div>
            <div class="col-sm-5">
              <input
                type="number"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
                v-model="count"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center mt-6">
            <button @:click="addContractDetail" type="button" class="btn btn-primary px-5">
              確認
            </button>
          </div>
        </div>
      </ModalView>
      <button
        @click="delectSwitch"
        type="button"
        class="btn btn-danger mx-5 fw-bolder m-3 text-white"
        v-if="showButtons"
      >
        解約する
      </button>
      <ModalView v-if="delectModal" :title="'契約の解約'" @close="delectSwitch">
        <div style="height: 150px; width: 350px">
          <h4 class="text-center mt-5">この契約を解除しますか？</h4>
          <div class="d-flex justify-content-center">
            <button
              type="button"
              @click="cancelContract"
              class="btn btn-danger px-5 fw-bolder text-white mt-5"
            >
              解除
            </button>
          </div>
        </div>
      </ModalView>
    </div>
  </div>

  <div class="payment-area" style="height: 350px;">
    <div class="d-flex justify-content-center">
      <h4 class="fw-bolder text-center mt-5 text-primary">入金情報</h4>
      <button @click="switchModal" type="button" class="btn btn-primary fw-bolder m-5 px-3 py-0">
        入金追加
      </button>
      <ModalView v-if="modalShow" :title="'入金情報'" @close="switchModal">
        <div class="addPayment">
          <dl class="row d-flex justify-content-center mt-5">
            <dt class="col-sm-2 text-primary">入金種類</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-6">
              <input
                type="text"
                v-model="addType"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
                placeholder="賃料/礼金/敷金"
              />
            </dt>
          </dl>
          <dl class="row d-flex justify-content-center">
            <dt class="col-sm-2 text-primary">支払期限</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-6">
              <input
                v-model="addDeadline"
                type="date"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
              />
            </dt>
          </dl>
          <dl class="row d-flex justify-content-center">
            <dt class="col-sm-2 text-primary">入金額</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-6">
              <input
                v-model="addrent"
                type="number"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
              />
            </dt>
          </dl>
          <dl class="row d-flex justify-content-center">
            <dt class="col-sm-2 text-primary">入金状態</dt>
            <dt class="col-sm-1 text-primary">：</dt>
            <dt class="col-sm-6">
              <input
                v-model="addStatus"
                type="text"
                aria-describedby="inputGroup-sizing-sm"
                class="form-control"
                placeholder="あり/確認中/なし"
              />
            </dt>
          </dl>
          <div class="d-flex justify-content-center mt-6">
            <button @click="addPayment" type="button" class="btn btn-primary px-7">確認</button>
          </div>
        </div>
      </ModalView>
    </div>
    <hr class="border border-secondary border-2" />
    <div class="overflow-scroll" style="height: 250px;">
      <dl class="row ms-4">
        <dt class="col-sm-2 text-primary">入金種類</dt>
        <dt class="col-sm-2 text-primary">支払期限</dt>
        <dt class="col-sm-2 text-primary">入金額</dt>
        <dt class="col-sm-2 text-primary">入金日</dt>
        <dt class="col-sm-2 text-primary">入金状態</dt>
      </dl>
      <div>
        <div class="row ms-4" v-for="paymentItem in paymentArray" v-bind:key="paymentItem">
          <p class="col-sm-2">{{ paymentItem.payment_type }}</p>
          <p class="col-sm-2">{{ paymentItem.payment_deadline }}</p>
          <p class="col-sm-2">{{ paymentItem.amount }}</p>
          <p class="col-sm-2">{{ paymentItem.payment_date }}</p>
          <p class="col-sm-2">{{ paymentItem.payment_status }}</p>
          <div class="col-sm-2">
            <button
              @click="
                reviseSwitch(
                  paymentItem.payment_deadline,
                  paymentItem.payment_id,
                  paymentItem.payment_status
                )
              "
              type="button"
              class="btn btn-secondary text-white fw-bolder px-3 py-0"
            >
              状態更新
            </button>
            <ModalView v-if="reviseModal" :title="'入金状態の更新'" @close="reviseSwitch">
              <div class="" style="height: 400px; width: 450px">
                <div class="row ms-4 mt-4">
                  <dt class="col-sm-4 text-primary">支払期限：</dt>
                  <p class="col-sm-4">{{ revisePaymentDeadline }}</p>
                </div>
                <div class="row ms-4 mt-4">
                  <dt class="col-sm-4 text-primary">元入金状態：</dt>
                  <p class="col-sm-4">{{ revisePaymentStatus }}</p>
                </div>
                <div class="row ms-4 mt-4">
                  <dt class="col-sm-4 text-primary">入金状態：</dt>
                  <dt class="d-flex justify-content-center mt-3">
                    <div class="mx-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        value="0"
                        v-model="reviseStatus"
                      />
                      <label class="form-check-label" for="radioDefault1">&nbsp;&nbsp;なし</label>
                    </div>
                    <div class="mx-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault2"
                        value="1"
                        v-model="reviseStatus"
                      />
                      <label class="form-check-label" for="radioDefault2">&nbsp;&nbsp;確認中</label>
                    </div>
                    <div class="mx-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault3"
                        value="2"
                        v-model="reviseStatus"
                      />
                      <label class="form-check-label" for="radioDefault3">&nbsp;&nbsp;あり</label>
                    </div>
                  </dt>
                  <dt class="col-sm-4 text-primary">入金日：</dt>
                  <dt class="col-sm-7">
                    <input
                      v-model="addDate"
                      type="date"
                      aria-describedby="inputGroup-sizing-sm"
                      class="form-control"
                    />
                  </dt>
                  <div class="mt-6 d-flex justify-content-center">
                    <button
                      @click="updatePayment(paymentItem.payment_id)"
                      type="button"
                      class="btn btn-primary px-3"
                    >
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </ModalView>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contractDetail-area mb-6">
    <h4 class="fw-bolder text-center mt-5 text-primary">詳細契約リスト</h4>
    <hr class="border border-secondary border-2" />
    <dl class="row ms-6" v-for="(item, index) in contractDate" v-bind:key="index">
      <dt class="col-sm-2">契約開始時間</dt>
      <dt class="col-sm-1">：</dt>
      <dt class="col-sm-5">{{ item }}</dt>
      <dt class="col-sm-2">{{ resoult[index] }}</dt>
    </dl>
  </div>
</template>
<style scoped>
.contract-area {
  margin: 0 300px;
}
.payment-area {
  margin: 0 300px;
}
.contractDetail-area {
  margin: 0 300px;
}
.addPayment {
  width: 550px;
  height: 400px;
}
</style>

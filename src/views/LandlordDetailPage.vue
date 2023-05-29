<script>
import { RouterLink, RouterView } from 'vue-router'
import ModalView from '../components/ModalView.vue'
export default {
  props: ['getLandlordId'],
  components: {
    ModalView
  },
  data() {
    return {
      modalShow: false,
      isShow: true,
      landlordDetail: [],
      paymentMethod: 0 // 預設支付方式為振り込み
    }
  },
  methods: {
    switchModal() {
      this.modalShow = !this.modalShow
    },
    change() {
      this.isShow = !this.isShow //F/T相反
    },
    //顯示詳細資料
    getLandlord() {
      return fetch('http://localhost:8080/get_Landlord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          landlord_id: this.getLandlordId
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.landlordDetail = data.landlordList[0]
          console.log(this.landlordDetail.firstName)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    //詳細資料更新
    upDate() {

      let number = this.landlordDetail.phone.toString();
      this.landlordDetail.phone = number.replace(/-/g, '');
      console.log(this.landlordDetail.phone)
      console.log(this.landlordDetail.firstName)
      return fetch('http://localhost:8080/update_Landlord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          landlord_id: this.getLandlordId,
          first_name: this.landlordDetail.firstName,
          first_name_kana: this.landlordDetail.firstNameKana,
          last_name: this.landlordDetail.lastName,
          last_name_kana: this.landlordDetail.lastNameKana,
          mynumber: this.landlordDetail.myNumber,
          license: this.landlordDetail.license,
          phone: this.landlordDetail.phone,
          email: this.landlordDetail.email,
          birth_date: this.landlordDetail.birthDate,
          address: this.landlordDetail.address,
          payment: this.landlordDetail.payment,
          payment_account: this.landlordDetail.paymentAccount

        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.landlordDetail = data.landlordList

          alert(data.message)
          this.change()
          if (this.message.message === '新增成功') {
            alert(this.message.message);
          } else {
            alert(this.message.errorMessage);
          }

        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  created() {
    this.getLandlord()
  }
  ,

}
</script>
<template>
  <div class="field">
    <div>
      <h1 style="
          width: 615px;
          border: 0;
          border-bottom: 1px;
          border-color: rgb(100, 165, 3);
          border-style: solid;
        ">
        貸主情報
      </h1>
    </div>
    <div>
      <div class="flex">
        <p class="phead">姓</p>
        <p class="pdot">:</p>
        <p v-if="isShow" class="readding">{{ landlordDetail.firstName }}</p>
        <input v-else type="text" class="twiinput" v-model="landlordDetail.firstName" />
        <p style="height: 20px"></p>
        <p class="pfooter">名</p>
        <p class="pdot2">:</p>
        <p v-if="isShow" class="readding2">{{ landlordDetail.lastName }}</p>
        <input v-else type="text" class="twiinput2" v-model="landlordDetail.lastName" />
      </div>
      <div class="flex">
        <p class="phead">セイ</p>
        <p class="pdot">:</p>
        <p v-if="isShow" class="readding">{{ landlordDetail.firstNameKana }}</p>
        <input v-else type="text" class="twiinput" v-model="landlordDetail.firstNameKana" />
        <p style="height: 20px"></p>
        <p class="pfooter">メイ</p>
        <p class="pdot2">:</p>
        <p v-if="isShow" class="readding2">{{ landlordDetail.lastNameKana }}</p>
        <input v-else type="text" class="twiinput2" v-model="landlordDetail.lastNameKana" />
      </div>
      <div class="flex">
        <p class="phead">生年月日</p>
        <p class="pdot">:</p>
        <p v-if="isShow" class="readding">{{ landlordDetail.birthDate }}</p>
        <input v-else type="date" class="twiinput" v-model="landlordDetail.birthDate" />
        <p style="height: 20px"></p>
        <p class="pfooter">電話番号</p>
        <p class="pdot2">:</p>
        <p v-if="isShow" class="readding2">{{ landlordDetail.phone }}</p>
        <input v-else type="text" class="twiinput2" v-model="landlordDetail.phone" />
      </div>
      <div class="flex">
        <p class="phead">マイナンバー</p>
        <p class="pdot">:</p>
        <p v-if="isShow" class="readding">{{ landlordDetail.myNumber }}</p>
        <input v-else type="number" class="twiinput" v-model="landlordDetail.myNumber" />

        <p style="height: 20px"></p>
        <p class="pfooter">免許番号</p>
        <p class="pdot2">:</p>
        <p v-if="isShow" class="readding2">{{ landlordDetail.license }}</p>
        <input v-else type="number" class="twiinput2" v-model="landlordDetail.license" />
      </div>
      <div class="flex">
        <p class="phead">住所</p>
        <p class="pdot  ms-4">:</p>
        <p style="height: 20px"></p>
        <p v-if="isShow" class="soloreadding">{{ landlordDetail.address }}</p>
        <input v-else type="text" class="soloinput" v-model="landlordDetail.address" />
      </div>
      <div class="flex">
        <p class="phead">Email</p>
        <p class="pdot  ms-4">:</p>
        <p style="height: 20px"></p>
        <p v-if="isShow" class="soloreadding ">{{ landlordDetail.email }}</p>
        <input v-else type="email" class="soloinput" v-model="landlordDetail.email" />
      </div>
      <!-- 支付方式 -->
      <div class="flexsolo">
        <p class="phead me-4">支払方法</p>
        <p class="pdot ms-4">:</p>
        <template v-if="isShow" v-model="landlordDetail.payment">
          <p v-if="landlordDetail.payment === 0" class="readding  ms-5">現金</p>
          <p v-else-if="landlordDetail.payment === 1" class="readding" value="1">振り込み</p>
        </template>
        <select v-else class="twiinput  ms-5" v-model="landlordDetail.payment" id="group">
          <option value="0">現金</option>
          <option value="1">振り込み</option>
        </select>
        <p style="height: 20px"></p>
        <div class="flexsolo d-flex">
          <template v-if="landlordDetail.payment === 1 ">
          <p class="pfooter">口座番号</p>
          <p class="pdot2">:</p>
          <p class="readding2">{{ landlordDetail.paymentAccount }}</p>
        </template>  
        <input v-else-if="landlordDetail.payment === '1' && !isShow" v-model="landlordDetail.paymentAccount" type="number" class="twiinput2"/>
      </div>
      </div>

      <div class="flex" style="width: 615px">
        <button @click="isShow ? change() : upDate()" type="button" class="btnL">
          {{ isShow ? '情 報 更 新' : '情 報 確 認' }}
        </button>
        <p style="height: 20px"></p>
        <button type="button" class="btnR">物 件 追 加</button>
      </div>

      <div>
        <h1 style="
            width: 615px;
            border: 0;
            border-bottom: 1px;
            border-color: rgb(100, 165, 3);
            border-style: solid;
          ">
          物件リスト
        </h1>
      </div>
      <div class="flex">
        <!-- 追加 -->
        <p style="height: 20px"></p>
        <p class="phead">圖案</p>
        <p class="pdot">物件名</p>

        <div class="a"><a href="">123</a></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flexsolo {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.field {
  margin-top: 1%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex {
  /* 其他样式 ... */
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btnL,
  .btnR {
    width: 150px;
    height: 40px;
    font-size: large;
    color: white;
    border-radius: 10px;
    border: 0px solid;
    justify-content: space-between;
    /* 将按钮靠在左右两侧 */

  }

  .btnL {
    background-color: #1962A7;
  }

  .btnR {
    background-color: #B8D26E;
  }

  .btnL:hover,
  .btnR:hover {
    opacity: 0.8;
  }

  .btnL:active,
  .btnR:active {
    opacity: 0.6;
  }


  .phead,
  .pfooter {
    margin: 0;
    width: 100px;
    text-align: left;
    /* Added text-align property to align text to the left */
    margin-top: 1%;

  }



  .pdot,
  .pdot2 {
    margin: 0;
    // width: 10px;
  }

  .twiinput {
    height: 25px;
    width: 150px;
    /* Width remains unchanged */
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
    margin-right: 2%;
  }

  .twiinput {
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
    appearance: none;
  }

  .twiinput2 {
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
  }

  .readding {
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
  }

  .readding2 {
    height: 25px;
    width: 150px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
  }

  .soloreadding {
    margin-left: 3%;
    height: 25px;
    width: 495px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
  }

  .a {
    height: 25px;
    width: 150px;
  }

  .soloinput {
    margin-left: 3%;
    height: 25px;
    width: 495px;
    border: 0;
    border-bottom: 1px;
    border-color: rgb(100, 165, 3);
    border-style: solid;
  }
}

.twiinput::after {
  content: '';
  bottom: -1px;
  width: 100%;
  height: 1px;
  background-color: rgb(100, 165, 3);
}


</style>

<script >
import SearchBar from "../components/SearchBar.vue"
import ModalView from "../components/ModalView.vue";
import TenantInfo from "../components/TenantInfo.vue";

export default {
  components: {
    SearchBar,
    ModalView,
    TenantInfo
  },
  data() {
    return {
      modalShow: false,
      message: "",
      first_name: "",
      first_name_kana: "",
      last_name: "",
      last_name_kana: "",
      mynumber: "",
      license: "",
      phone: "",
      email: "",
      birth_date: "",
      address: "",
      payment: "",
      payment_account: "",
      result: [],
    }
  },
  methods: {
    switchModal() {
      this.modalShow = !this.modalShow;
    },
    //新增房東
    addTenantInfo() {
      //轉字串
      let number = this.phone.toString();
      let paymentAccount = this.payment_account.toString();
      //去除多餘字
      this.phone = number.replace(/-/g, '');
      this.payment_account = paymentAccount.replace(/-/g, '');

      fetch('http://localhost:8080/addTenantInfo', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "firstName": this.first_name,
          "firstNameKana": this.first_name_kana,
          "lastName": this.last_name,
          "lastNameKana": this.last_name_kana,
          "mynumber": this.mynumber,
          "license": this.license,
          "phone": this.phone,
          "email": this.email,
          "birthDate": this.birth_date,
          "address": this.address,
          "payment": this.payment,
          "paymentAccount": this.payment_account
        })
      })
        .then((res) => res.json())
        .then((data) => {
          this.message = data;
          //跳出視窗判斷   
          if (this.message.message === '新增成功') {
            alert(this.message.message);
            this.first_name = null,
              this.first_name_kana = null,
              this.last_name = null,
              this.last_name_kana = null,
              this.mynumber = null,
              this.license = null,
              this.phone = null,
              this.email = null,
              this.birth_date = null,
              this.address = null,
              this.payment = null,
              this.payment_account = null
          } else {
            alert(this.message.errorMessage);
          }

        })
        .catch((error) => {
          console.error(error);
        })


    },
    //搜尋
    getInfo(searchCondition) {
      this.searchCondition = searchCondition;

      fetch('http://localhost:8080/findByNameOrPhoneGetTenantInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "searchInput": searchCondition.keyWord,
        })
      })
        .then((res) => res.json())
        .then((data) => {
          this.result = data.tenantCollection;
          if (data.errorMessage === "検索条件に該当する会員の情報はありません。") {
            alert(data.errorMessage)
          }
        })
        .catch((error) => {
          console.error(error);
        })
    }

  }
}
</script>

<template>
  <div class="bodyArea">
    <SearchBar :conditionList="['借主姓名', '借主電話番号']" class="SearchBar" @searchResponse="getInfo" />
    <div class="infoArea">
      <button @click="switchModal" class="tenantAddBtn">借主追加</button>

      <TenantInfo :tenantSearchResult=result />

      <ModalView v-if="modalShow" :title="'借主追加'" @close="switchModal" class="modalArea">
        <div class="field">
          <div class="flex">
            <p class="phead">姓</p>
            <p class="pdot">:</p>
            <input type="text" class="twiinput" v-model="first_name">
            <p class="pfooter">名</p>
            <p class="pdot2">:</p>
            <input type="text" class="twiinput2" v-model="last_name">
          </div>
          <div class="flex">
            <p class="phead">セイ</p>
            <p class="pdot">:</p>
            <input type="text" class="twiinput" v-model="first_name_kana">
            <p class="pfooter">メイ</p>
            <p class="pdot2">:</p>
            <input type="text" class="twiinput2" v-model="last_name_kana">
          </div>
          <div class="flex">
            <p class="phead">生年月日</p>
            <p class="pdot">:</p>
            <input type="date" class="twiinput" v-model="birth_date">
            <p class="pfooter">電話番号</p>
            <p class="pdot2">:</p>
            <input type="text" class="twiinput2" placeholder="10文字で入力して" v-model="phone">
          </div>
          <div class="flex">
            <p class="phead">マイナンバー</p>
            <p class="pdot">:</p>
            <input type="number" class="twiinput" v-model="mynumber">
            <p class="pfooter">免許番号</p>
            <p class="pdot2">:</p>
            <input type="number" class="twiinput2" v-model="license">
          </div>
          <div class="flex">
            <p class="phead">住所</p>
            <p class="pdot">:</p>
            <input type="text" class="soloinput" v-model="address">
          </div>
          <div class="flex">
            <p class="phead">Email</p>
            <p class="pdot">:</p>
            <input type="email" class="soloinput" placeholder="メールアドレスには「@」を含めてください" v-model="email">
          </div>
          <div class="flex">
            <p class="phead">支払方法</p>
            <p class="pdot">:</p>
            <select v-model="payment" id="group" value="0" class="twiinput">
            <option value="0">現金</option>
            <option value="1">振り込み</option>
            </select>
            <p v-if="payment === '1'" class="pfooter">口座番号</p>
            <p v-if="payment === '1'" class="pdot2">:</p>
            <input v-if="payment === '1'" v-model="payment_account" type="text" class="twiinput2">
          </div>
          <button type="button" class="confirmToAddBtn" @click="addTenantInfo">追加</button>
        </div>
      </ModalView>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.bodyArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infoArea {
  margin-top: 10%;
}

.field {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.flex {
  text-align: center;
  justify-content: center;
  display: flex;
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
  width: 10px;
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

.twiinput2 {
  height: 25px;
  width: 150px;
  /* Width remains unchanged */
  border: 0;
  border-bottom: 1px;
  border-color: rgb(100, 165, 3);
  border-style: solid;
}

.soloinput {
  height: 25px;
  width: 495px;
  border: 0;
  border-bottom: 1px;
  border-color: rgb(100, 165, 3);
  border-style: solid;
}

.tenantAddBtn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 9px 21px;
  border: 0px solid #B8D26E;
  border-radius: 9px;
  background: #B8D26E;
  color: #ffffff;
  text-decoration: none;
}

.tenantAddBtn:hover {
  background: #A3BD56;
}

.tenantAddBtn:active {
  background: #91A944;
}

.confirmToAddBtn {
  width: 10vw;
  margin-left: 40%;
  margin-top: 2%;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 9px 21px;
  border: 0px solid #1962A7;
  border-radius: 9px;
  background: #1962A7;
  color: #ffffff;
  text-decoration: none;
}

.confirmToAddBtn:hover {
  background: #0F4C91;
}

.confirmToAddBtn:active {
  background: #084476;
}

.SearchBar {
  margin: 1rem 0;
  width: 50vw;
}
</style>
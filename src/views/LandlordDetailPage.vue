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
      selectedOption:'',
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
          this.landlordDetail = data.landlordList[0]
        })
        .catch((error) => {
          console.error(error)
        })
    },
    //詳細資料更新
    upDate() {

      let number = this.landlordDetail.phone.toString();
      this.landlordDetail.phone = number.replace(/-/g, '');
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
    },
    switchModal2() {
            this.modalShow = !this.modalShow;

            const body = {
                //進入頁面要帶的值1715
        // "propertyId":1715,
        "landlordId": this.getLandlordId,
        "prefecture": this.prefecture,
        "district":  this.district,
        "address": this.address,
        "propertyName":this.propertyName,
        "rentalStatus":this.rentalStatus,
        "type": this.selectedOptionType,
        "layout": this.selectedOptionLayout,
        "propertyFloors": this.propertyFloors,
        "floorNumber": this.floorNumber,
        "buildYear": this.buildYear,
        "exclusiveArea":this.exclusiveArea,
        "rentalPrice": this.rentalPrice,
        "keyMoney": this.keyMoney,
        "deposit": this.deposit,
        "imageBytesString":this.imageBytesString,
        "remarks": this.remarks
        }

            fetch("http://localhost:8080/add_property",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(body)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            this.response = data;
            console.log(this.response.message);

            alert('新增物件：' + this.response.message);

            if(this.response.message === 'successful' ){
                this.prefecture = "",
                this.district = "",
                this.address = "",
                this.propertyName = "",
                this.rentalStatus = "",
                this.selectedOptionType = "",
                this.selectedOptionLayout = "",
                this.propertyFloors = "",
                this.floorNumber = "",
                this.buildYear = "",
                this.exclusiveArea = "",
                this.rentalPrice = "",
                this.keyMoney = "",
                this.deposit = "",
                this.imageBytesString = "",
                this.remarks = ""

                    }
        }.bind(this))

        
        .catch(err =>console.log(err))
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
        <div>
        <button @click="switchModal" type="button" class="btnR">物 件 追 加</button>
        <!-- <button @click="switchModal">Open Modal</button> -->
        <ModalView v-if="modalShow" :title="'物件追加'" @close="switchModal">

            <div class="ccc2">

                    <div class="ccc">
                        <div class="aaa">
                            <div class="bbb1">
                                <p>物件名</p>
                                <p>都道府県</p>
                                <p>地域</p>
                                <p>住所</p>
                                <p>賃貸狀況</p>
                                <p>賃料</p>
                                <p>禮金</p>
                                <p>敷金</p>
                                <p>上傳圖片</p>
                            </div>
                        <div class="bbb2">
                            <div><input type="text" v-model="propertyName"></div>
                            <div><input type="text" v-model="prefecture"></div>
                            <div><input type="text" v-model="district"></div>
                            <div> <input type="text" v-model="address"></div>
                            <div class="yes">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" v-model="rentalStatus">
                                    <label class="form-check-label" for="inlineRadio1" >已出租</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" v-model="rentalStatus">
                                    <label class="form-check-label" for="inlineRadio2">未出租</label>
                                </div>
                            </div>
                            <div><input type="number" v-model="rentalPrice"></div>
                            <div><input type="number" v-model="keyMoney"></div>
                            <div><input type="number" v-model="deposit"></div>

                            <!-- 圖片的格式先用text 如果改成url格式好像有問題 -->
                            <div><input type="text" v-model="imageBytesString"></div>
                        </div>
                    </div>
                    <div class="aaa">
                        <div class="bbb1">
                            <p>賃主姓</p>
                            <p>賃主名</p>
                            <p>物件種目</p>
                            <p>間取り</p>
                            <p>建物階層數</p>
                            <p>所在層</p>
                            <p>築年數</p>
                            <p>專有面積</p>
                            <p>備考</p>
                        </div>
                        <div class="bbb2">
                            <p>{{ landlordDetail.firstName }}</p>
                            <p>{{ landlordDetail.lastName }}</p>
                            <div class="box">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="selectedOptionType">
                                    <option selected>種目</option>
                                    <option value="0">アパート</option>
                                    <option value="1">マンション</option>
                                    <option value="2">一戶建て</option>
                                </select>
                            </div>
                            <div class="box">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="selectedOptionLayout">
                                    <option selected>間取り</option>
                                    <option value="0">ワンルーム</option>
                                    <option value="1">1K</option>
                                    <option value="2">1DK</option>
                                    <option value="3">1LDK</option>
                                    <option value="4">2K</option>
                                    <option value="5">2DK</option>
                                    <option value="6">2LDK</option>
                                    <option value="7">3K</option>
                                    <option value="8">3DK</option>
                                    <option value="9">3LDK</option>
                                    <option value="10">4R</option>
                                </select>
                            </div>
                            <div><input type="number" v-model="propertyFloors"></div>
                            <div><input type="number" v-model="floorNumber"></div>
                            <div><input type="number" v-model="buildYear"></div>
                            <div><input type="number" v-model="exclusiveArea"></div>
                            <div><input type="text" v-model="remarks"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <button v-if="btnShow" class="btn btn-primary mb-4" @click="changeShow">更新資料</button> -->
            <button class="btn btn-primary mb-4" @click="switchModal2">新增物件資料</button>
            
        </ModalView>
    </div>
        <!-- <button type="button" class="btnR">物 件 追 加</button> -->
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

.ccc2{
    p{
        font-size: 14px;
        margin-bottom: 18px;
    }
    // margin-top: 20px;
    .ccc{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid #B8D26E;
        display: flex;
        justify-content: space-between;
        // position: relative;
        // left: 20%;
        width: 60vw;
        .aaa{
            margin-top: 20px;
            width: 50%;
            display: flex;
            // justify-content: space-between;
            .bbb1{
                width: 20%;
                text-align: center;
                white-space:nowrap;
            }
            .bbb2{
                width: 80%;
                text-align: center;
                input{
                    // width: 90%;
                    margin-bottom: 9px;
                    // height: 20px;
                }
                .box{
                    margin: 0 auto;
                    width: 200px;
                    margin-bottom: 8px;
                }
            }            
        }
    }
}
.btn{
    width: 30vw;
    // display: flex;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    
}

</style>

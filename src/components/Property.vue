<script>
import ModalView from "./ModalView.vue";
import ContractItem from "./ContractItem.vue";

export default {
    props: ["propertyId"],
    components: {    
        ModalView,
        ContractItem,
    },
    data() {
        return {
            rentalPrice :'',
            keyMoney :'',
            deposit :'',
            prefecture:'',
            imageBytesString :'',
            remarks :'',
            // response:[],
            response2:[],
            rentalStatus:"",
            image64:"",

            modalShow: false,
            isShow:false,
            btnShow:true,

            type: "",
            layout:"",
            rentalStatus:"",
        }
    },
    methods: {
        //轉圖片成base64
        loadimage(e){
            const reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = (e) => {
                console.log(e.target.result)
            }
        },

        //抓ID給畫面選染資訊
        getPropertyByPropertyId(){
            
            this.isShow = !this.isShow
            this.btnShow = !this.btnShow
            const body = {
                //ContractItem那一頁也要接相同的ID
                //接上一頁傳進來的物件ID
                "propertyId": this.propertyId
            }

            fetch("http://localhost:8080/get_property_info_by_id",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(body)
        })
        .then(function(response){
            return response.json();
        })
        .then((data) => {
            // this.response2 = data.propertyList[0];
            let typeList = ["アパート",  "マンション", "一戶建て"]
            this.type = typeList[data.updatePropertyVo.type]

            this.response2 = data.updatePropertyVo;

            if(data.updatePropertyVo.execution === true ){
                this.rentalStatus = "出租中"
            } else {
                this.rentalStatus = "未租中"
            }
            
            let layoutList = [
                "ワンルーム","1K","1DK","1LDK",
                "2K","2DK","2LDK",
                "3K","3DK","3LDK",
                "4R以上"
            ];
            this.layout = layoutList[data.updatePropertyVo.layout];
            this.image64 = "data:image/png;base64," + data.updatePropertyVo.propertyImage
        })
        .catch(err =>console.log(err))
            
            

        },
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        changeShow2(){
            this.isShow = !this.isShow
            this.btnShow = !this.btnShow

        },

        //更新物件資訊
        changeShow(){
            this.isShow = !this.isShow
            this.btnShow = !this.btnShow
            const body = {
                //也是接上一頁傳進來的ID
                "propertyId":1,

                "prefecture": this,prefecture,
                "rentalPrice": this.rentalPrice,
                "keyMoney":this.keyMoney,
                "deposit": this.deposit,
                "propertyImage": "http://example.com/image.jpg",
                "remarks": this.remarks,
            }

            fetch("http://localhost:8080/update_property",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(body)
        })
        .then(function(response){
            return response.json();
        })
        .then((data) => {
            console.log(data);
            alert('更新物件：' + this.response.message);
        })
        .catch(err =>console.log(err))
        }
    }
    ,
    mounted(){
        this.getPropertyByPropertyId();
    }
};
</script>

<template>
    <div>
        <!-- <SearchBar :searchCondition="['物件','借主', '契約コード']"/> -->
        <div class="box">
           
           <div id="carouselExampleIndicators" class="carousel slide  center" data-bs-ride="carousel">
               <div class="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div class="carousel-inner">
                   <div class="carousel-item active">
                   <img :src="image64" class="d-block w-100" alt="...">
                   </div>
                   <div class="carousel-item">
                   <img :src="image64" class="d-block w-100" alt="...">
                   </div>
                   <div class="carousel-item">
                   <img :src="image64" class="d-block w-100" alt="...">
                   </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Next</span>
               </button>
           </div>
           <p> </p>

           <button v-if="btnShow" class="btn btn-primary mb-4" @click="changeShow">確認更新</button>
           <button v-else class="btn btn-primary mb-4" @click="changeShow2">更新資料</button>
           <!-- <button class="btn">更新</button> -->

        </div>

        <!-- ====================area2======================== -->
        <div v-if="isShow" class="ccc2">
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
                        <p>{{response2.propertyName}}</p>
                        <p>{{response2.prefecture}}</p>
                        <p>{{response2.district}}</p>
                        <p>{{response2.address}}</p>
                        <p>{{rentalStatus}}</p>
                        <p>{{response2.rentalPrice}}日圓</p>
                        <p>{{response2.keyMoney}} 個月</p>
                        <p>{{response2.deposit}} 個月</p>
                        <p>{{response2.imageBytesString}}</p>
                        <!-- <p>-</p> -->
                    </div>
                </div>
                <div class="aaa">
                    <div class="bbb1">
                        <p>賃主姓名</p>
                        <p>借主姓名</p>
                        <p>物件種目</p>
                        <p>間取り</p>
                        <p>建物階層數</p>
                        <p>所在層</p>
                        <p>築年數</p>
                        <p>專有面積</p>
                        <p>備考</p>
                    </div>
                    <div class="bbb2">
                        <p>{{response2.landlordFirstName}}{{ response2.landlordLastName }}</p>
                        <p>{{response2.tenantFirstName}}{{ response2.tenantLastName }}</p>
                        <p>{{type}}</p>
                        <p>{{layout}}</p>
                        <p>{{response2.propertyFloors}} 樓</p>
                        <p>{{response2.floorNumber}} 樓</p>
                        <p>{{response2.buildYear}} 年</p>
                        <p>{{response2.exclusiveArea}}</p>
                        <p>{{response2.remarks}}</p>

                    </div>
                </div>
            </div>
            <div class="h2">
                <p></p>
                <h2>契約</h2>
                <p></p>
            </div>
        </div>

        <!-- ====================area2-2====================== -->
        <div v-else class="ccc222">
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
                        <p>{{ response2.propertyName }}</p>
                        <div><input type="text" v-model="prefecture"></div>
                        <!-- <p>{{response2.prefecture}}</p> -->
                        <p>{{response2.district}}</p>
                        <p>{{response2.address}}</p>
                        <p>{{ rentalStatus }}</p>
                        <div><input type="number" v-model="rentalPrice">日圓</div>
                        <div><input type="number" v-model="keyMoney">個月</div>
                        <div><input type="number" v-model="deposit">個月</div>
                        <div><input type="file" @change="loadimage" class="push"></div>

                    </div>
                </div>
                <div class="aaa">
                    <div class="bbb1">
                        <p>賃主姓名</p>
                        <p>借主姓名</p>
                        <p>物件種目</p>
                        <p>間取り</p>
                        <p>建物階層數</p>
                        <p>所在層</p>
                        <p>築年數</p>
                        <p>專有面積</p>
                        <p>備考</p>
                    </div>
                    <div class="bbb2">
                        <p>{{response2.landlordFirstName}}{{ response2.landlordLastName }}</p>
                        <p>{{response2.tenantFirstName}}{{ response2.tenantLastName }}</p>
                        <p>{{type}}</p>
                        <p>{{layout}}</p>
                        <p>{{response2.propertyFloors}} 樓</p>
                        <p>{{response2.floorNumber}} 樓</p>
                        <p>{{response2.buildYear}} 年</p>
                        <p>{{response2.exclusiveArea}}</p>
                        <input type="text" v-model="remarks">
                    </div>
                </div>
            </div>
            <div class="h2">
                <p></p>
                <h2>契約</h2>
                <p></p>
            </div>
        </div>

        <!-- area3========================= -->
        <div class="ddd">
            <ContractItem />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box{
    margin-top: 50px;
    .center{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60vw;

    }
   .btn{
    position: relative;
    left: 72%;
   }
}
//========================area2===========================
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
            }
            
        }
    }
    .h2{
        text-align: center;
    }
}
//========================area2-2==========================
.ccc222{
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
                .push{
                    width: 80%;
                }
                input{
                    // width: 90%;
                    margin-bottom: 9px;
                    // height: 20px;
                }
            }
            
        }
    }
    .h2{
        text-align: center;
    }
}
.ddd{
    // border-top: 2px solid aquamarine;
    // display: flex;
    // justify-content: space-between;
    // position: relative;
    // left: 20%;
    // width: 60vw;
    // // height: 500px;
    margin: 20px auto;
        // display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid #B8D26E;
        // display: flex;
        justify-content: space-between;
        // position: relative;
        // left: 20%;
        width: 60vw;
    .aaa{
        margin-top: 20px;
        display: flex;
    }

}
.id{
    margin: 50px  300px  0px  300px;
}

.carousel-inner img{
width: 100%;
height: 35vw;
}
</style>
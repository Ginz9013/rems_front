<script>
import SearchBar from "./SearchBar.vue";
import ModalView from "./ModalView.vue";

export default {
    components: {
        SearchBar,
        ModalView
    },
    data() {
        return {
            name1 :'',
            name2 :'',
            name3 :'',
            name5 :'',

            modalShow: false,
            isShow:true,
            btnShow:true
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        },
        changeShow(){
            this.isShow = !this.isShow
            this.btnShow = !this.btnShow
            const body = {
                "propertyId":1674,

                "rentalPrice": this.name1,
                "keyMoney":this.name2,
                "deposit": this.name3,
                "propertyImage": "http://example.com/image.jpg",
                "remarks": this.name5,
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
        .then(function(data){
            console.log(data);
            console.log(name1)

        })
        .catch(err =>console.log(err))
        }
    }
    ,
    mounted(){
       
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
                   <img src="../../picture/16691863_6.jpg" class="d-block w-100" alt="...">
                   </div>
                   <div class="carousel-item">
                   <img src="../../picture/20190122-075307_U5965_M493824_81f5.jpg" class="d-block w-100" alt="...">
                   </div>
                   <div class="carousel-item">
                   <img src="../../picture/md-035201caed5b8e631e40cde56958315e.jpg" class="d-block w-100" alt="...">
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

           <button v-if="btnShow" class="btn btn-primary mb-4" @click="changeShow">更新資料</button>
           <button v-else class="btn btn-primary mb-4" @click="changeShow">確認更新</button>
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
                        <p>管理費</p>
                    </div>
                    <div class="bbb2">
                        <p>物件</p>
                        <p>物件2</p>
                        <p>物件3</p>
                        <p>物件4</p>
                        <p>物件5</p>
                        <p>物件6</p>
                        <p>物件7</p>
                        <p>物件8</p>
                        <p>物件9</p>
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
                        <p>物件</p>
                        <p>物件2</p>
                        <p>物件3</p>
                        <p>物件4</p>
                        <p>物件5</p>
                        <p>物件6</p>
                        <p>物件7</p>
                        <p>物件8</p>
                        <p>物件9</p>

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
                        <p>管理費</p>

                    </div>
                    <div class="bbb2">
                        <p>物件</p>
                        <p>物件2</p>
                        <p>物件3</p>
                        <p>物件4</p>
                        <div class="yes">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">已出租</label>
                                </div>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">未出租</label>
                            </div>
                        </div>
                        <input type="number" v-model="name1">
                        <input type="number" v-model="name2">
                        <input type="number" v-model="name3">
                        <input type="number">
                    
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
                        <p>物件</p>
                        <p>物件2</p>
                        <p>物件3</p>
                        <p>物件4</p>
                        <p>物件5</p>
                        <p>物件6</p>
                        <p>物件7</p>
                        <p>物件8</p>
                        <input type="text" v-model="name5">

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
            <div class="aaa">
                <div>
                    <p>契約時間 :</p>
                    <p>契約時間 :</p>
                </div>
                <div>
                    <p> 1111111111111111111111</p>
                    <p> 1111111111111111111</p>
                </div>
            </div>
            <div>
                <p>123</p>
                <p>123</p>
            </div>

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
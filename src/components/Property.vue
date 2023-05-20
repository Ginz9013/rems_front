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
            modalShow: false,
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        }
    }
}
</script>

<template>
    <div>
        <!-- <SearchBar :searchCondition="['物件','借主', '契約コード']"/> -->
        <div class="box">
           
           <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
        </div>

        
    </div>
</template>

<style lang="scss" scoped>
.box{
    // position: absolute;
    align-items: center;
    justify-content: center;
    margin: 0px 20%;
    
    width: 60%;
    height: 500px;
}
.id{
    margin: 50px  300px  0px  300px;
}

.carousel-inner img{
width: 100%;
height: 300px;
}
</style>
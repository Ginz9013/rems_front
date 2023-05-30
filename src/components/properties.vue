<script>
import { RouterLink } from 'vue-router'
export default {
    props: ["propertyList"],
    data() {
        return {
            
        }
    },
    methods: {
        switchURL(propertyId) {
            this.$router.push({
                name: 'bukkenInfo',
                params: { propertyId : propertyId }
            })
        }
    },
}

</script>

<template >
    <div v-for="item in propertyList" class="properties"  :key="property_id" @click="switchURL(item.propertyId)">
        <div class="flex">
            <img :src="`data:image/png;base64,${item.propertyImage}`" class="img">
            <!-- <div class="img" src="image64">圖片</div> -->
            <div class="name">
                <h1 class="h1">{{ item.propertyName }}</h1>
            </div>
            <div class="p1">
                <p>租金 :{{ item.rentalPrice }}</p>
            </div>
            <div class="p2">
                <p>築年 : {{ item.buildYear }}</p>
            </div>
            <div class="p3">
                <p>樓層 : {{ item.propertyFloors }}</p>
            </div>
            <div class="p4">
                <p>第 {{ item.floorNumber }} 層</p>
            </div>
            <div class="p5">
                <p>地址 : {{ item.address }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.properties {
    width: 700px;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    background-image: linear-gradient(#1962A7, #1962A7), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255));
    background-position: top, bottom;
    background-size: 100% 10%;
    background-repeat: no-repeat;
    margin-bottom: 20px;
}

.flex {
    position: relative;
}

.img {
    position: absolute;
    height: 140px;
    width: 200px;
    background-color: aquamarine;
    top: 38px;
    left: 20px;
}

.name {
    position: absolute;
    left: 250px;
    top: 45px;
}

.h1 {
    font-size: 20px;
}


.p1 {
    position: absolute;
    left: 240px;
    top: 140px;
}

.p2 {
    position: absolute;
    left: 350px;
    top: 140px;
}

.p3 {
    position: absolute;
    left: 450px;
    top: 140px;
}

.p4 {
    position: absolute;
    left: 550px;
    top: 140px;
}

.p5 {
    position: absolute;
    left: 275px;
    top: 100px;
}
</style>
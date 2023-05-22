<script>
import Child from "../components/PropertiesChild.vue"

export default {
    components: {
        Child
    },
    data() {
        return {
            title: "pppppp",
           
            propertyData: [{
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 1,
                property_name: "我愛螺旋完蛋了",
                adress:"你屁股後面",
                rental_price:9487,
                build_year:0,
                start_year:1911,
                start_month:1,
                start_day:1

            },
            {
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 2,
                property_name: "我愛螺旋完蛋了2",
                adress:"你屁股後面1",
                rental_price:9487,
                build_year:0,
                start_year:1911,
                start_month:1,
                start_day:1
            },
            {
                img: "../../public/dessert_img/Rectangle 2.png",
                property_id: 3,
                property_name: "我愛螺旋完蛋了3",
                adress:"你屁股後面2",
                rental_price:9487,
                build_year:0,
                start_year:1911,
                start_month:1,
                start_day:1
            }]
        }
    },
    methods: {
        closeModal() {
            this.$emit("close");
        }
      
    }
}

</script>

<template>
    <div>
      
        <div class="list">
            <Child 
         
                v-for="property in propertyData"
                    :key="property.property_id"
                    :img="property.img"
                    :property_id="property.property_id"
                    :property_name="property.property_name"
                    :adress="property.adress"
                    :rental_price="property.rental_price"
                    :build_year="property.build_year"
                    :start_year="property.start_year"
                    :start_month="property.start_month"
                    :start_day="property.start_day"
            />
    </div>
    </div>
</template>

<style scoped>
   .list {
        justify-content: center;
        text-align: center;
        width: 50vw;
        height: 70vh;
    }
</style>
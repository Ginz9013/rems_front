<script >
export default {
    components: {
    },

    data() {
        return {
            alllandlord: [],
            alllandlordIdStr: [],




        }
    },
    methods: {
        getpost() {
            let body = {

            }

            fetch('http://localhost:8080/show_All_Landlord', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.alllandlord = data.landlordList;
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        passLandlordId(input, landlordId) {
            this.$emit("getid", landlordId);
            console.log(input.target);
            console.log(landlordId);





            //  this.$router.push({ 
            //     name: 'TenantDetailPage',
            //     params: { getid: landlordId }})




            this.$router.push({
                name: 'TenantDetailPage',
                params: { getid: landlordId }
            })


        }

    },
    created() {
        this.getpost();
    },
    mounted() {

    }
}
</script>
<template>
    <div class="wrap">
        <div class="infoBox" v-for="landlord in alllandlord" :key="landlord.landlordId" :value="landlord.landlordId"
            @click="passLandlordId($event, landlord.landlordId)">

            <div class="flexArea">
                <div class="nameGroup">

                    <p class="kana">{{ landlord.firstNameKana }}</p>
                    <p class="name">{{ landlord.firstName }}</p>
                </div>
                <div class="nameGroup">
                    <p class="kana">{{ landlord.lastNameKana }}</p>
                    <p class="name">{{ landlord.lastName }}</p>
                </div>
            </div>

            <div class="info">
                <div class="flex">
                    <p class="black">電話番號</p>
                    <p class="colon">:</p>
                    <p class="content">{{ landlord.phone }}</p>
                </div>
                <div class="flex">
                    <p class="black">Email</p>
                    <p class="colon2">:</p>
                    <p class="content">{{ landlord.email }}</p>
                </div>
                <div class="flex">
                    <p class="black">マイナンバー／免許番号</p>
                    <p class="content">:</p>
                    <p>{{ landlord.myNumber }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.wrap {
  max-width: 100%;
  padding: 2vw;
  box-sizing: border-box;
}

.infoBox {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 2px solid #1962A7;
  border-radius: 6px;
  padding: 2vw;
  margin-bottom: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Added */
  align-items: center; /* Added */
  flex-wrap: wrap; /* Added */
}

.nameGroup {
  display: flex;
  flex-direction: column;
  margin: 0.5vw;
  flex-basis: 45%; /* Added */
}

.flexArea {
  display: flex;
  margin-top: -1.5vw;
  margin-left: 3vw;
}

.name {
  font-size: 2.5vw;
}

.flex {
  display: flex;
  margin: -1vw;
}

.kana {
  font-size: 1.8vw;
  margin-bottom: 1vw;
}

p {
  color: #084279;
  font-size: 1.5vw;
}

.black {
  color: #000;
}

.colon {
  margin-left: 0.7vw;
}

.colon2 {
  margin-left: 3vw;
}

.content {
  margin: 0 1.5vw;
}

.info {
  margin-top: -1.2vw;
  margin-left: 3.5vw;
  flex-basis: 45%; /* Added */
}
</style>

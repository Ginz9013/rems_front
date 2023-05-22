<script>
export default {
    components: {

    },
    data() {
        return {

        }

    },
    props: [
        "img",
        "property_id",
        "property_name",
        "adress",
        "rental_price",
        "build_year",
        "start_year",
        "start_month",
        "start_day",
    ]
}

</script>

<template>
    <div class="button-container">
        <button class="btnp" >
            <div class="btnArea">
                <div style="height: 10%; width: 100%; background-color: dodgerblue;"></div>
                <div style="height: 90%; width: 100%;">
                    <div>
                        <img class="img" :src="image" :alt="title">
                    </div>
                    <div>
                        <h1 style="font-size: 20px;">{{ property_name }}</h1>
                        <p>{{ rental_price }}</p>
                    </div>
                </div>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button-container {
    margin-bottom: 20px;
}

.btnp {

    display: inline-block;
    background-color: white;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;

    .btnArea {
        border: 3px;
        border-style: solid;
        border-color: black;
        overflow: hidden;
        width: 40vw;
        height: 15vh;
    }
}

.btnp:hover {
    /* 滑鼠懸停時的樣式 */
    transform: scale(1.2);
}
</style>
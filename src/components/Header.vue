<script>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="bg-primary p-4 d-flex justify-content-between px-5">
        <RouterLink to="./homepage">
            <img src="" alt="LOGO">
        </RouterLink>
        <!-- <div class="btn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group"> -->
        <div class="posi">
            <RouterLink to="./Property">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="on" checked>
                <label class="btn btn-outline-light" for="btnradio1">物件</label>
            </RouterLink>

            <RouterLink to="./homepage">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="on">
                <label class="btn btn-outline-light" for="btnradio2">貸主</label>
            </RouterLink>

            <RouterLink to="./homepage">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="on">
                <label class="btn btn-outline-light" for="btnradio3">借主</label>
            </RouterLink>

            <RouterLink to="./login">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="on">
                <label class="btn btn-outline-light" for="btnradio4">契約</label>
            </RouterLink>
            </div>
        <button class="btn btn-outline-light">ログアウト</button>
    </header>
</template>
<style lang="scss" scoped>
.posi{
    position: absolute;
    top: 37px;
    left: 20%;

    .btn {
        width: 15vw;
        height: 50px;
        background-color: primary;
        // color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px 10px 0px 0px;
    }
    
}
.btn:active {
    background-color: light;
    color: black;
}
    
</style>
<template>
    <div class="bodyArea">
        <div class="infoBox">
            <div class="flexArea">
                <div class="nameGroup">
                    <p class="kana">タナカ</p>
                    <p class="name">田中</p>
                </div>
                <div class="nameGroup">
                    <p class="kana">リエ</p>
                    <p class="name">理惠</p>
                </div>
            </div>

            <div class="info">
                <div class="flex">
                    <p class="black">電話番號</p>
                    <p class="colon">:</p>
                    <p class="content">0912345678</p>
                </div>
                <div class="flex">
                    <p class="black">Email</p>
                    <p class="colon2">:</p>
                    <p class="content">tanakaeri@gmail.com</p>
                </div>
                <div class="flex">
                    <p class="black">マイナンバー／免許番号</p>
                    <p class="content">:</p>
                    <p>12345678</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.bodyArea {
    margin: 20px 300px 20px 300px;
}

.infoBox {
    width: 515px;
    height: 90px;
    border: 2px solid #1962A7;
    border-radius: 6px;
    padding: 30px;
    display: flex;
    margin: 5px 60px;
}

.nameGroup {
    display: flex;
    flex-direction: column;
    margin: -2px 4px -2px 4px;
    
}

.flexArea {
    display: flex;
    margin-top: -15px;
    margin-left: 30px;
    /* position: absolute;
    top: 115px;
    left: 360px; */
}

.name {
    font-size: 20px;
}

.flex {
    display: flex;
    margin: -10px;
}

.kana {
    font-size: small;
    margin-bottom:5px;
}

p {
    color: #084279;
    font-size: 14px;
}

.black {
    color: #000;

}

.colon {
    margin-left: 5px;
}

.colon2 {
    margin-left: 25px;
}

.content {
    margin: 0 10px;
}

.info {
    margin-top: -12px;
    margin-left: 70px;
    /* position: absolute;
    left: 520px;
    top: 105px; */

}
</style>
<script>
export default {
    // 請帶入搜尋條件陣列，名稱: searchCondition ，下拉選單會自動帶入
    props: ["searchCondition"],
    data() {
        return {
            placeholderString : null,
        }
    },
    mounted() {
        // 組搜索欄位 placeholder 字串
        this.placeholderString  = this.searchCondition.map(item => {
            if(item === this.searchCondition[this.searchCondition.length - 1]) {
                return item
            }

            return item + " / "
        }).join("")

        
    }
}
</script>
<template>
        <div class="input-group mb-3">
            <input type="text" class="form-control" :placeholder="placeholderString" aria-label="Recipient's username" aria-describedby="button-addon2">

            <!-- 下拉選單區 -->
            <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ searchCondition[0] }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="list in searchCondition"><a class="dropdown-item" href="#">{{ list }}</a></li>
            </ul>
            <!-- 下拉選單區 -->

            <button class="btn btn-primary px-5" type="button" id="button-addon2">検索</button>
        </div>
</template>
<style lang="scss" scoped>
.input-group{
//     position: relative;
//     top: 10%;
//     left: 50%;
//     transform: translate(-50% , -50%);
//     width: 70vw;
}
</style>
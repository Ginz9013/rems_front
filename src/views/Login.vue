<script>
import SearchBar from "../components/SearchBar.vue";

export default {
    components: {
        SearchBar,
    }
}
</script>
<template>
    <div>
        <h1>Log in Page / 元件範例</h1>
        <h2>元件說明: (元件內部也有註解說明)</h2>
        <p>請 props "searchCondition" 傳入搜索條件的陣列，並 @emmit 一個 SearchResponse ，會回傳 [搜索條件, 搜索關鍵字] 的陣列資訊</p>
        <SearchBar :searchCondition="['物件','借主', '契約コード']"/>
    </div>
</template>
<style scoped>
</style>
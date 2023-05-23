<script>
export default {
  component: {},
  data() {

    return {
      alllandlord: [],
    }
  },
  methods: {
    getpost() {
      fetch('http://localhost:8080/show_All_Landlord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'       
        },
        body: JSON.stringify()
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.alllandlord = data;
        })
        .catch((error) => {
            console.error(error);
        })
    }
  },
  mounted() {
    
  }
}
</script>
<template>
  <button type="button" @click="getpost">所有房東</button>





</template>
<style>
</style>

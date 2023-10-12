<script>
import Card from './partials/Card.vue';
import { store } from "../data/store"
import axios from "../../node_modules/axios"
export default {
  name: "CardContainer",
  components:{
    Card
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getAPI(){
      axios.get(store.apiUrl)
        .then((response) => {
          // handle success
          store.cardList = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }
  },
  mounted() {
    this.getAPI();
  },

}
</script>

<template>

  <div class="container-csm">
    <div class="result">Found {{ store.cardList.length }} cards</div>
    <div class="row">
      <Card v-for="el in store.cardList" :key="el.id" :cardObj = el />
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
  .container-csm{
    background-color: white;
    padding: 32px;
    .result{
      background-color: #212529;
      color: white;
      padding: 16px 8px;
    }
  }
</style>
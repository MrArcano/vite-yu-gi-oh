<script>
import CardVue from './partials/Card.vue';
import Result from './Result.vue';
import { store } from "../data/store";
import axios from "../../node_modules/axios";

export default {
  name: "CardContainer",
  components:{
    CardVue,
    Result
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
          store.cardMeta = response.data.meta
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        
      // create list ArcheType
      axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
        .then((response) => {
          // handle success
          store.archetypeList = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    },
  },
  mounted() {
    this.getAPI();
  },

}
</script>

<template>
  <div class="container-csm">
    <Result />
    <div class="row">
      <CardVue v-for="el in store.cardList" :key="el.id" :cardObj = el />
    </div>
    <Result />
  </div>
  
</template>


<style lang="scss" scoped>
  .container-csm{
    background-color: white;
    padding: 32px;
  }
</style>
<script>
import CardContainer from './CardContainer.vue';
import Search from './Search.vue';
import Result from './Result.vue';

import { store } from "../data/store";

import axios from "../../node_modules/axios";

export default {
  name: "Main",
  components:{
    CardContainer,
    Search,
    Result
  },
  methods: {
    getAPI(){
      axios.get(store.apiUrlBase)
        .then((response) => {
          // handle success
          store.cardList = response.data.data;
          if(response.data.meta){
            store.cardMeta = response.data.meta
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
          store.cardList = [];
        })
    },

    getArcheType(){
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
    }
  },
  mounted() {
    this.getAPI();
    this.getArcheType();
  },
}
</script>

<template>

  <main>
    <div class="container">
      <Search @startSearch="getAPI" />
      <Result @startSearch="getAPI" />
      <CardContainer />
      <Result @startSearch="getAPI" />
    </div>
  </main>
  
</template>


<style lang="scss" scoped>
  main{
    background-color: #d48f38;
    min-height: 100vh;
    padding-top: 32px;
  }
</style>
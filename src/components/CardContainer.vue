<script>
import Card from './partials/Card.vue';
import Loader from './partials/Loader.vue';
import { store } from "../data/store"
import axios from "../../node_modules/axios"
export default {
  name: "CardContainer",
  components:{
    Card,
    Loader
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
          this.createListArchetype()
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    },

    createListArchetype(){
      store.archetypeList = store.cardList.forEach((el) => {
        if(!store.archetypeList.includes(el.archetype)){
          store.archetypeList.push(el.archetype);
        }
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
    <div class="result">
      <p v-if="store.cardList.length <= 0"><Loader /></p>
      <p v-else>Found {{ store.cardList.length }} cards</p>
    </div>
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
      p{
        padding: 16px 8px;
      }
    }
  }
</style>
<script>
import CardVue from './partials/Card.vue';
import { store } from "../data/store";


export default {
  name: "CardContainer",
  components:{
    CardVue,
  },
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
  <div class="container-csm">
    <div class="row">
      <CardVue v-for="el in store.cardList" :key="el.id" :cardObj = el />
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
  .container-csm{
    background-color: white;
    padding: 32px;
  }
</style>
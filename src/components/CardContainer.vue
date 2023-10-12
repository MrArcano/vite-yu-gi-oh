<script>
import Card from './partials/Card.vue';
import { store } from "../data/store"
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

}
</script>

<template>

  <div>
    <div>Found 39 cards</div>
    <div class="row">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  
</template>


<style>

</style>
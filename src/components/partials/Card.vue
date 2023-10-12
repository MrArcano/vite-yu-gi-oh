<script>
export default {
  name: "Card",
  props:{
    cardObj : Object,
  }
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 13rem;">
      <img :src="cardObj.card_images[0].image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ cardObj.name }}</h5>
        <p class="card-text">{{ cardObj.archetype }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .col{
    padding: 8px;
    display: flex;
    justify-content: center;
    .card{
      padding: 8px;
      background-color: #d48f38;
      text-align: center;
    }
  }
</style>
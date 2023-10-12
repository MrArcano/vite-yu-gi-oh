<script>
export default {
  name: "Card"
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 12rem;">
      <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .col{
    display: flex;
    justify-content: center;
    .card{
      padding: 8px;
    }
  }
</style>
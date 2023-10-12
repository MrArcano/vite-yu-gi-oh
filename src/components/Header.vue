<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="https://www.yugioh-world.com/wp-content/uploads/2016/12/yugioh_logo_full.png" alt="">
      </div>
      <h1>Yu-Gi-Oh API</h1>
    </div>
  </header>
</template>


<style lang="scss" scoped>

.container{
  display: flex;
  align-items: center;
  border: 1px solid black;
  .logo{
    width: 100px;
  }
}

</style>
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
      <a href="#"><h1>Yu-Gi-Oh API</h1></a>
    </div>
  </header>
</template>


<style lang="scss" scoped>

.container{
  display: flex;
  align-items: center;
  .logo{
    width: 100px;
  }
}

</style>
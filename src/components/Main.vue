<script>
import CardContainer from './CardContainer.vue';
import Search from './Search.vue';

export default {
  name: "Main",
  components:{
    CardContainer,
    Search
  }
}
</script>

<template>

  <main>
    <div class="container">
      <Search />
      <CardContainer />
    </div>
  </main>
  
</template>


<style lang="scss" scoped>
  main{
    background-color: #d48f38;
    min-height: 100vh;
  }
</style>
<script>

import { store } from '../data/store';

export default {
  name: "Search",
  data() {
    return {
      store
    }
  },
  mounted() {
    console.log("Sono il search");
    console.log(this.store.archetypeList);
  },
}
</script>

<template>
  <div>
    <select class="form-select" aria-label="Default select example">
      <option v-for="(el , index) in store.archetypeList" :key="'el-'+ index">{{ el }}</option>
    </select>
  </div>
</template>


<style lang="scss" scoped>
  div{
    margin-bottom: 32px;
  }
</style>
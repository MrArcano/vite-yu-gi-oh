<script>
import { store } from '../data/store';
import axios from "../../node_modules/axios";

export default {
  name: "Search",
  data() {
    return {
      store,
      search: ""
    }
  },
  methods: {
    searchArcheType(){
      store.apiUrlBase = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it&archetype=" + this.search;
      store.cardMeta = {};
      this.$emit('startSearch');
    }
  },
}
</script>

<template>
  <div>
    <select @change="searchArcheType()" v-model="search" class="form-select" aria-label="Default select example">
      <option v-for="(el , index) in store.archetypeList" :key="'el-'+ index">{{ el.archetype_name }}</option>
    </select>
  </div>
</template>


<style lang="scss" scoped>
  div{
    margin-bottom: 32px;
  }
</style>
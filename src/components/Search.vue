<script>

import { store } from '../data/store';
import axios from "../../node_modules/axios"


export default {
  name: "Search",
  data() {
    return {
      store,
      search: ""
    }
  },
  methods: {
    changeAPI(){
      store.apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it&archetype=" + this.search

      axios.get(store.apiUrl)
        .then((response) => {
          // handle success
          store.cardList = response.data.data;
          store.cardMeta = {};
          console.log(store.cardMeta);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }
  },
}
</script>

<template>
  <div>
    <select @change="changeAPI()" v-model="search" class="form-select" aria-label="Default select example">
      <option v-for="(el , index) in store.archetypeList" :key="'el-'+ index">{{ el.archetype_name }}</option>
    </select>
  </div>
</template>


<style lang="scss" scoped>
  div{
    margin-bottom: 32px;
  }
</style>
<script>
import { store } from '../data/store';

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
      store.archetype = this.search;
      store.offset = 0;
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
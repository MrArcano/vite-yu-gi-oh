<script>
import Loader from './partials/Loader.vue';
import NextPage from './partials/NextPage.vue';
import { store } from "../data/store"
import axios from "../../node_modules/axios"

export default {
  name: "Result",
  components:{
    Loader,
    NextPage
  },
  data() {
    return {
      store
    }
  },
  methods: {
    goNext(){
      console.log("NEXT");
      store.apiUrl = store.cardMeta.next_page;
      console.log(store.apiUrl);
      this.getAPI();
    },
    goPrev(){
      console.log("PREV");
      store.apiUrl = store.cardMeta.previous_page;
      this.getAPI();
    },
    getAPI(){
      axios.get(store.apiUrl)
        .then((response) => {
          // handle success
          store.cardList = response.data.data;
          store.cardMeta = response.data.meta
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
  <div class="result">
    <p v-if="store.cardMeta.total_rows <= 0"><Loader/></p>
    <p v-if="!Object.keys(store.cardMeta).length">Found {{ store.cardList.length }} cards</p>

    <div v-else>
      <div @click="goPrev()" class="arrow left"><NextPage /></div>
      <p>Page {{ store.cardMeta.total_pages - store.cardMeta.pages_remaining + 1 }}/{{ store.cardMeta.total_pages}} of {{ store.cardMeta.total_rows }} total cards</p>
      <div @click="goNext()" class="arrow right"><NextPage /></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .result{
      background-color: #212529;
      color: white;
      p{
          margin: 0;
          padding: 16px;
        }
      >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .arrow{
          cursor: pointer;
          &.left{
            transform: rotate(180deg);
          }
        }
        
        
      }
    }
</style>
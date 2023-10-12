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
    <div v-else>
      <div @click="goPrev()" class="left"><NextPage /></div>
      <p>Page {{ store.cardMeta.total_pages - store.cardMeta.pages_remaining + 1 }}/{{ store.cardMeta.total_pages}} of {{ store.cardMeta.total_rows }} total cards</p>
      <div @click="goNext()" class="right"><NextPage /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .result{
      background-color: #212529;
      color: white;
      div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          margin: 0;
          padding: 16px;
        }
        .right{
          transform: rotate(270deg) translateY(-60px);
        }
        .left{
          transform: rotate(90deg) translateY(-60px);
        }
      }
    }
</style>
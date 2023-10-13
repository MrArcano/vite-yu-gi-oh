<script>
import Loader from './partials/Loader.vue';
import NextPage from './partials/NextPage.vue';
import { store } from "../data/store";

export default {
  name: "PageCount",
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
      if(store.cardMeta.next_page){
        console.log("NEXT");
        store.apiUrlBase = store.cardMeta.next_page;
        console.log(store.apiUrlBase);
        this.$emit('startSearch');
      }else{
        console.log("NEXT non possibile");
      }
      
    },
    goPrev(){
      if(store.cardMeta.previous_page){
        console.log("PREV");
        store.apiUrlBase = store.cardMeta.previous_page;
        console.log(store.apiUrlBase);
        this.$emit('startSearch');
      }else{
        console.log("PREV non possibile");
      }
    },
  },
}
</script>

<template>
  <div class="result">
    <!-- Loader visibile -->
    <p v-if="store.isLoading"><Loader/></p>

    <div v-else>
      <!-- Se il mio oggetto store.cardMeta è vuoto vuol dire che sto facendo una ricerca -->
      <p  v-if="!Object.keys(store.cardMeta).length" class="text-center">Found {{ store.cardList.length }} cards</p>

      <!-- Altrimenti visualizzo i dati del store.cardMeta -->
      <div class="next-prev" v-else>
        <div @click="goPrev()" class="arrow left"><NextPage /></div>
        <p>Page {{ store.cardMeta.total_pages - store.cardMeta.pages_remaining + 1 }}/{{ store.cardMeta.total_pages + 1}} of {{ store.cardMeta.total_rows }} total cards</p>
        <div @click="goNext()" class="arrow right"><NextPage /></div>
      </div>

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
      .next-prev{
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
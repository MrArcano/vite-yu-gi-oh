import { reactive } from "vue";

export const store = reactive({
  apiUrlBase: "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it",
  cardList: [],
  archetypeList: [],
  cardMeta: {},
  isLoading: false,
  num: 50,
  offset: 0,
  archetype: null,
})
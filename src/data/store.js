import { reactive } from "vue";

export const store = reactive({
  apiUrlBase: "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it&num=50&offset=0",
  cardList: [],
  archetypeList: [],
  cardMeta: {},
  archetype: ""
})
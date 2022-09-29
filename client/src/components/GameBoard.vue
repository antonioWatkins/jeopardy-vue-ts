<template>
  <div class="gameBoard-container">
    <div class="gameBoard"></div>
      <Column />
    <section class="scoreboard"></section>
    <button @click="getGameData">Game Button</button>
      <div>{{ Game }}</div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Column from "@/components/Column.vue";
import { ref } from "vue";

export default {
  name: "GameBoard",
  components: { Column },
  setup() {
    const showNumbers = [6295, 6296, 6297, 6298, 6299, 6300];
    const showNumber = showNumbers[Math.floor(Math.random() * showNumbers.length)];
    const GameData = ref([]);
    let Game = ref([]);

    const getGameData = async () => {
      fetch("questions.json").then((res) => res.json()).then((data) => GameData.value = data)
      console.log(GameData.value);

      Game.value = GameData.value.filter((data) => data.showNumber === showNumber);
    };

    
    return { GameData, getGameData, Game };
  },
  //   {
  //   "showNumber": 6295,
  //   "airDate": "1/20/12",
  //   "round": "Jeopardy!",
  //   "category": "NIGHT QUILL",
  //   "value": "$200",
  //   "question": "In the 1880s explorer Sir Richard Burton prepared a 16-volume English translation of these tales",
  //   "answer": "the Arabian Nights"
  // },
}
</script>

<style>
/* .gameboard {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  grid-template-rows: repeat(6, 100px);
} */


</style>
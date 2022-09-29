<template>
  <div class="gameBoard-container">
    <div class="gameBoard"></div>
    <Column v-show="getGameData" :index="0" />
    <section class="scoreboard"></section>
    <button @click="getGameData">Game Button</button>
    <!-- <div>{{ columnData }}</div> -->
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Column from "@/components/Column.vue";
import { ref, onMounted } from "vue";

// const showNumbers = [6295, 6296, 6297, 6298, 6299, 6300];
// const showNumber =
//   showNumbers[Math.floor(Math.random() * showNumbers.length)];
// const GameData = ref([]);
// let Game = ref([]);

// const getGameData = async () => {
//   const res = await fetch("questions.json")
//   const json = await res.json().then((data) => (GameData.value = data))

//   console.log(json);

//   Game.value = json.filter(
//     (data) => data.showNumber === showNumber
//   );
// };

export default {
  name: "GameBoard",
  components: { Column },
  setup() {
    const showNumbers = [6295, 6296, 6297, 6298, 6299, 6300];
    const showNumber =
      showNumbers[Math.floor(Math.random() * showNumbers.length)];
    const GameData = ref([]);
    let Game = ref([]);
    let jeopardyData = ref([]);
    let doubleJeopardyData = ref([]);
    let categories = ref([]);
    let columnData = ref([]);

    const getGameData = async (index) => {
      const res = await fetch("questions.json");
      const json = await res.json().then((data) => (GameData.value = data));
      Game.value = GameData.value.filter(
        (data) => data.showNumber === showNumber
      );
      jeopardyData.value = Game.value.filter(
        (data) => data.round === "Jeopardy!"
      );
      doubleJeopardyData.value = Game.value.filter(
        (data) => data.round === "Double Jeopardy!"
      );

      categories.value = jeopardyData.value
        .filter((data) => data.value === "$200")
        .map((data) => data.category);

      columnData.value = jeopardyData.value.filter(
        (data) => data.category == categories.value[index]
      );
    };

    const getColumnData = (index) => {
      const columnData =  jeopardyData.value.filter(
      (data) => data.category == categories.value[index] )
      console.log('col data', columnData)
      return columnData;
      }

    onMounted(() => {
      getGameData();
      getColumnData(0);
      getColumnData(1);
    });

    categories.value = jeopardyData.value.filter(
      (data) => data.value === "$200"
    );
    return {
      GameData,
      getGameData,
      Game,
      jeopardyData,
      doubleJeopardyData,
      categories,
      columnData,getColumnData
    };
  },
};

//   {
//   "showNumber": 6295,
//   "airDate": "1/20/12",
//   "round": "Jeopardy!",
//   "category": "NIGHT QUILL",
//   "value": "$200",
//   "question": "In the 1880s explorer Sir Richard Burton prepared a 16-volume English translation of these tales",
//   "answer": "the Arabian Nights"
// },
</script>

<style></style>

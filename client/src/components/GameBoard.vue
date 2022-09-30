<template>
  <div class="gameBoard-container">
    <button @click="getGameData()">Refresh</button>
    <div class="gameBoard">
    <QuestionDisplay  @update-question="(data)=> storeQuestion(data)"  />
    <Column v-for="(category, index) in categories" :columnData="getColumnData(index)" :key="index" />
    </div>
    <section class="scoreboard"></section>
    <div>{{ question }}</div>
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
import QuestionDisplay from "@/components/QuestionDisplay.vue";
import { ref, onMounted } from "vue";

export default {
  name: "GameBoard",
  components: { Column, QuestionDisplay },
  setup() {
    const showNumbers = [ 6296, 6297, 6298, 6300];

    const GameData = ref([]);
    let Game = ref([]);
    let jeopardyData = ref([]);
    let doubleJeopardyData = ref([]);
    let categories = ref([]);
    let columnData = ref([]);
    let columnInfo = [];
    const question = ref("");

    const storeQuestion = (data) => (question.value = data);

    const getGameData = async () => {
      const showNumber =
      showNumbers[Math.floor(Math.random() * showNumbers.length)];
      console.log('show num', showNumber)

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
    };

    const getColumnData = (index) => {
      columnInfo = jeopardyData.value.filter(
        (data) => data.category == categories.value[index]
      );
      return columnInfo;
    };

    onMounted(() => {
      getGameData();

    });
    return {
      GameData,
      getGameData,
      Game,
      jeopardyData,
      doubleJeopardyData,
      categories,
      columnData,
      getColumnData,
      columnInfo,
      storeQuestion,
      question,
    };
  },
};


</script>

<style>
.gameBoard{
  background-color: gray;
  display:flex;
flex-direction: row;
justify-content: center;}
</style>

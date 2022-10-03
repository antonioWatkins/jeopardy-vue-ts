<template>
  <div class="gameBoard-container">
    <div class="controls">
      <button @click="getGameData()">Refresh</button>
      <button >Start!</button>
    </div>

    <div class="gameBoard">
      <QuestionDisplay @close="toggleModal" v-if="showModal" :selectedQuestion="selectedQuestion" />
      <div class="grid" v-if="!showModal">
        <Column
        @select-question="(value) => storeQuestion(value)"
        v-for="(category, index) in categories"
        :columnData="getColumnData(index)"
        :key="index"
      /></div>

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
    const showNumbers = [6296, 6297, 6298, 6300];

    const GameData = ref([]);
    let Game = ref([]);
    let jeopardyData = ref([]);
    let doubleJeopardyData = ref([]);
    let categories = ref([]);
    let columnData = ref([]);
    let columnInfo = [];
    let showModal = ref(false);
    const selectedQuestion = ref({});
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    const storeQuestion = (dataFromSquare) => {
      console.log("gameboard", dataFromSquare);
      selectedQuestion.value = dataFromSquare;
      showModal.value = !showModal.value;
    };

    const getGameData = async () => {
      const showNumber =
        showNumbers[Math.floor(Math.random() * showNumbers.length)];
      console.log("show num", showNumber);

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
      selectedQuestion,
      toggleModal,
      showModal,
    };
  },
};
</script>

<style>
.gameBoard {
  background-color: white;

}
.grid{  
  display: flex;
  flex-direction: row;
  justify-content: center;
  }
  .controls{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 1rem;
    padding: 2px;
    border: 1px solid black;
  }
</style>

<template>
  <div class="column-container">
    <section class="column">
      <Square v-for="i in 6" :value="i" :key="i" />
    </section>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Square from "@/components/Square.vue";

export default {
  name: "Column",
  components: { Square },

  // setup() {
  //   const category = 'History';
  //   const squareArray = [
  //     {value: 200, question: 'question1', answer: 'answer1', category: 'history'},
  //     {value: 400, question: 'question2', answer: 'answer2', category: 'history'},
  //     {value: 400, question: 'question3', answer: 'answer3', category: 'history'},
  //     {value: 400, question: 'question4', answer: 'answer4', category: 'history'},
  //     {value: 400, question: 'question5', answer: 'answer5', category: 'history'},
  //   ]
    
    

  //   // {"category": "HISTORY", "air_date": "2004-12-31",{
  //   //  "question": "'For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory'",
  //   //  "value": "$200", "answer": "Copernicus", "round": "Jeopardy!", "show_number": "4680"},
  //   return {};
  // }
};

</script>

<style>
.column {
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(6, 100px);
}

.square {
  border: 1px;
  border-style: solid;
}
</style>



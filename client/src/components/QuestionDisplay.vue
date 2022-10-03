<template>
<div>


    <div class="QuestionDisplay">
      <div>Question: {{ selectedQuestion.question }}</div>
      <div>Answer: {{ selectedQuestion.answer }}</div>
      <div>{{ selectedQuestion.value }}</div>
    </div>
 
</div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    selectedQuestion: {},
  },
  name: "QuestionDisplay",
  setup(){
    const showingAnswer = ref(false);
    const showAnswer = () => {}

    return {showingAnswer, showAnswer};
  },
};
</script>

<style>
.QuestionDisplay {
  display:flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 800px;
  background-color: blue;
  color: white;
  border: 1px;
  border-style: solid;
}
</style>
<template>
<div>
    <div class="QuestionDisplay">Question Display</div>
    <div>{{ question }}</div>
</div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    data: {
      type: String,
    },
  },
  name: "QuestionDisplay",
  setup(){
    return {};
  },
};
</script>

<style>
.QuestionDisplay {
  display:flex;
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
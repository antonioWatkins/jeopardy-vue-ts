<template>
  <div class="column-container">
    <section>
      <CategorySquare :category="columnData[0].category" />
      <Square @select-question="(value)=>{selectQuestionInColumn(value)}" v-for="data in columnData" :data="data" :key="data" />

    
    </section>
  </div>

  <!-- <RouterView /> -->
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import Square from "@/components/Square.vue";
import CategorySquare from "@/components/CategorySquare.vue";

export default {
  props: { columnData: Array },
  name: "Column",
  components: { Square, CategorySquare },

  setup(props, context) {
    const selectQuestionInColumn = (dataFromSquare) => {
      console.log('columnEmit', dataFromSquare);
      context.emit("selectQuestion", dataFromSquare);
    
    }

    return {selectQuestionInColumn};
  },
};
</script>

<style>
.column-container {
  /* display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(6, 100px); */
  display:flex;
  flex-direction: column;
}

</style>

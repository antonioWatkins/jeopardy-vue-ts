<template>
  <div class="column-container">
    <section>
      <Square v-for="data in columnData" :data="data" :key="data" />
    </section>
  </div>

  <!-- <RouterView /> -->
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import Square from "@/components/Square.vue";

export default {
  props: { columnData: Array },
  name: "Column",
  components: { Square },

  setup(props) {
    return {};
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

.square {
  /* border: 1px; */
  /* border-style: solid; */
}
</style>

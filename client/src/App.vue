<template>
  <div class="container">
    <h1>Jeopardy</h1>
    <div class="nav">NavBar</div>
      <GameBoard />
    <section class="scoreboard"></section>
  </div>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "App",
  components: { GameBoard },


}
</script>

<style>
/* .gameboard {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  grid-template-rows: repeat(6, 100px);
} */


</style>

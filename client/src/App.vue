<template>
  <div class="App">
    <div class="header">  
        <h1 class="title">Jeopardy</h1>
        <!-- <div class="nav">NavBar</div> -->
    </div>

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
  .App{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header{
    display:flex; 
    flex-direction: row;
  }

  .title{
    color: #060ce9;
    font-size: 60px;
  }




</style>

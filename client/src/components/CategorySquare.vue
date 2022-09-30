<template>
  <div class="square">
  {{ category }}
    
  </div>
</template>

<script>
export default {
  props: {
    category:{
      type: String,
    }
  },
  name: "CategorySquare",
  setup(){
    return {};
  },
};
</script>

<style>
.square {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: blue;
  color: white;
  border: 1px;
  border-style: solid;
}
</style>
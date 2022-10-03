<template>
  <div class="category-square">
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
.category-square {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 240px;
  margin: 2px;
  border-radius: 5%;
  background-color: #060ce9;
  color: white;
  border: 1px;
  border-style: solid;
  text-align: center;
  font-size: 30px;
}
</style>
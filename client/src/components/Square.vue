<template>
  <div class="square">
    {{ data.value }} 
    {{data.question}}
    {{data.category}}
    
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  name: "Square",
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
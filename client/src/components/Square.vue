<template>
  <div class="square">
    {{ data.value }} 
    {{data.question}}
    
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
  height: 200px;
  width: 200px;
  background-color: red;
  border: 1px;
  border-style: solid;
}
</style>
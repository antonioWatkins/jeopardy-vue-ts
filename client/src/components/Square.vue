<template>
  <button class="square" @click="()=>{selectQuestionInSquare()}">
    {{ data.value }} 
    {{data.question}}
    {{data.category}}
    
  </button>

</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  name: "Square",
  setup(props, context){

    const selectQuestionInSquare = () => {
      console.log('squareEmit', props.data)
      context.emit("selectQuestion", props.data);
    
    }

    

    return { selectQuestionInSquare };
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
  cursor: pointer;
}

</style>
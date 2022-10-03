<template>
  <button class="square" @click="()=>{selectQuestionInSquare()}">
    {{ data.value }} 
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
    };

    return { selectQuestionInSquare };
  },
};
</script>

<style>
.square {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 240px;
  margin: 2px;
  border-radius: 5%;
  background-color: #060ce9;
  color: gold;
  border: 5px solid black;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
}

.square:hover {
  background-color: blue;
}

</style>
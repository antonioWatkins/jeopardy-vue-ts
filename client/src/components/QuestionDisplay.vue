<template>
<div>
    <div class="QuestionDisplay">Question Display
    </div>
      <slot/>
    <div>{{ data }}</div>
</div>
</template>

<script>
export default {
  props: {
    index: Number,
    data: {
      type: Array,
    },
  },
  name: "QuestionDisplay",
  setup(){
    return {};
  },
};
</script>

<style>
.QuestionDisplay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 800px;
  background-color: blue;
  color: white;
  border: 1px;
  border-style: solid;
}
</style>
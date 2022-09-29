<template>
  <div class="square">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
};
</script>

<style>
.square {
  border: 1px;
  border-style: solid;
}
</style>
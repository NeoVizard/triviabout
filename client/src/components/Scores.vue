<template>
  <div>
    <h2>GAME END</h2>
    SCORE: <span v-html="score"></span>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: {
    score: Number,
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h2>GAME END</h2>
    SCORE: <span v-html="score"></span>
    <button v-if="isLeader" @click="$emit('play-again')">Play Again</button>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: {
    score: Number,
    isLeader: Boolean
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h2>GAME OVER</h2>
    <ul>
      <li v-for="u in users" :key="u.id">
        <span v-html="u.name"></span>: 
        <span v-html="u.score"></span>
      </li>
    </ul>
    <button v-if="isLeader" @click="$emit('play-again')">Play Again</button>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: {
    score: Number,
    isLeader: Boolean,
    users: Array
  },
};
</script>

<style>
li:last-child {
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}
</style>
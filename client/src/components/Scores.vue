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
ul {
  background-color: #3f48cc;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  list-style: none;
  padding: 10px 25px;
  text-align: left;
  border-radius: 10px;
  width: 300px;
}
</style>
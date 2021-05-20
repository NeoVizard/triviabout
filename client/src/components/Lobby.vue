<template>
  <div>
    <ul>
      <li v-for="u in users" :key="u"><span v-html="u.name"></span> <span v-if="u.isLeader">👑</span></li>
    </ul>
    <button v-if="isLeader" @click="$emit('start-game')">START</button>
  </div>
</template>

<script>
export default {
  name: "Lobby",
  props: {
    users: Array,
    isLeader: Boolean
  },
};
</script>

<style scoped>
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
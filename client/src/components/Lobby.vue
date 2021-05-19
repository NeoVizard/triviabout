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

<style>
</style>
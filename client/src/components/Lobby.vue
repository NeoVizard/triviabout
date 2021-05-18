<template>
  <div>
    <ul>
      <li v-for="u in users" :key="u" v-html="u.name"></li>
    </ul>
    <button @click="$emit('start-game')">START</button>
  </div>
</template>

<script>
export default {
  name: "Lobby",
  props: {
    users: Array,
  },
};
</script>

<style>
</style>
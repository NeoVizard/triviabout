<template>
  <div>
    <span v-html="users"></span>
    <ul>
      <li v-for="u in users" :key="u" v-html="u"></li>
    </ul>
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
<template>
  <div class="container">
    <h1>HELLO</h1>
    <img src="../assets/triviabout.png" alt="TriviaBout">
    <router-link to="/game" tag="button" > START GAME</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
}

img {
  width: 50%;
}
</style>
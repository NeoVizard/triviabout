<template>
  <div>
    <h1>LOADING...</h1>
    <h2 v-html="message"></h2>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    message: String,
  },
};
</script>

<style>
</style>
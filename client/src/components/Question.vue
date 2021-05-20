<template>
  <div class="container">
    <h1 v-html="question"></h1>
    <div class="options">
      <button v-for="a in answers" :key="a" @click="$emit('submit-answer', a)">
        <span v-html="a"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: String,
    answers: Array,
  },
  emits: ["submit-answer"],
};
</script>

<style scoped>
.options {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  width: 70%;
  place-items: center;
}
</style>
<template>
  <div>
    <h1 v-html="question"></h1>
    <button v-for="a in answers" :key="a" @click="$emit('submit-answer', a)">
      <span v-html="a"></span>
    </button>
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

<style>
</style>
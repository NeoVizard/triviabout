<template>
  <div class="container question">
    <h1 v-html="question"></h1>
    <div class="options">
      <button class="option" v-for="a in answers" :key="a" @click="$emit('submit-answer', a)">
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
.question {
  padding: 2em 1em;
}

.options {
  display: grid;
  place-items: center;
  grid-template: 1fr 1fr / 1fr 1fr;
  width: 100%;
  padding: 0 0.75em;
}

.option {
  width: 90%;
  height: 90%;
}
</style>
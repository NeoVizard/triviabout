<template>
  <div>
    <h3>Correct Answer: <span v-html="correctAnswer"></span></h3>
    <h5>Your Answer: <span v-html="userAnswer"></span></h5>
    <ul>
      <li v-for="u in users" :key="u">
          <span v-html="u.name"></span>'s Answer:
          <span v-html="u.answer"></span>
      </li>
    </ul>
    <button @click="$emit('next-question')">Next</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: {
    correctAnswer: String,
    userAnswer: String,
    users: Array,
  },
  emits: ["next-question"],
};
</script>

<style>
</style>
<template>
  <div class="fill-box">
    <h3>Correct Answer: <span v-html="correctAnswer"></span></h3>
    <ul>
      <li v-for="u in users.filter((u) => u.state === 1)" :key="u">
        <div class="name"><span v-html="u.name"></span>'s Answer:</div>
        <span class="answer" v-html="u.answer"></span>
        <span class="score">Score: <span v-html="u.score"></span></span>
      </li>
    </ul>
    <button v-if="isLeader" @click="$emit('next-question')">Next</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: {
    correctAnswer: String,
    userAnswer: String,
    users: Array,
    isLeader: Boolean,
  },
  emits: ["next-question"],
};
</script>

<style scoped>
ul {
  width: 90%;
  padding: 0;
}

li {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

li:last-child {
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}

.name {
  padding: 0.25em 0 0.25em 0.75em;
  border-bottom-left-radius: 1em;
}

.answer {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
  padding: 0.25em 0.2em;
}

li:nth-child(even) .answer {
  background-color: #3f48cc;
}

li:nth-child(odd) .answer {
  background-color: #2a2e6e;
}

.score {
  padding: 0.25em 0 0.25em 0.25em;
}
</style>
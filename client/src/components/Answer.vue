<template>
  <div>
    <h3>Correct Answer: <span v-html="correctAnswer"></span></h3>
    <ul>
      <li v-for="u in users.filter((u) => u.state === 1)" :key="u">
        <div><span v-html="u.name"></span>'s Answer:</div>
        <span v-html="u.answer"></span>
        <span>Score: <span v-html="u.score"></span></span>
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
  background-color: #3f48cc;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  list-style: none;
  padding: 10px 25px;
  text-align: left;
  border-radius: 10px;
}

li {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
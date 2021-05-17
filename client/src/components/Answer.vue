<template>
  <div>
      <h3> Correct Answer: <span v-html="correctAnswer"></span> </h3>
      <h5> Your Answer: <span v-html="userAnswer"></span> </h5>
      <button @click="$emit('next-question')">Next</button>
  </div>
</template>

<script>
export default {
    name:"Answer",
    props: {
        correctAnswer: String,
        userAnswer: String
    },
    emits: ['next-question']
}
</script>

<style>

</style>
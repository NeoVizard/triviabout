<template>
  <div class="container">
    <h1>Welcome</h1>
    <hr />
    <button @click="getQuestions()" class="btn">Get Questions</button>
    <!-- <ul v-if="questions">
      <li v-for="q in questions" :key="q.question">
        <h3 v-html="q.question"></h3>
        <span v-html="q.correct_answer"></span>
      </li>
    </ul> -->
    <div v-if="questions">
      <h1 v-html="currentQuestion"></h1>
      <button v-for="a in currentAnswers" :key="a" @click="nextQuestion()">
        <span v-html="a"></span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "Test",
  data() {
    return {
      questions: null,
      currentQuestionIndex: 0,
      currentQuestion: "",
      currentAnswers: [],
      socket: io("localhost:3000"),
    };
  },
  methods: {
    async getQuestions() {
      console.log("TEST");
      try {
        const res = await axios.get(`http://localhost:3000/test2`);
        this.questions = res.data;
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.questions[0].question;
        this.currentAnswers = this.questions[0].incorrect_answers;
      } catch (error) {
        console.log(error);
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex].question;
      this.currentAnswers = this.questions[
        this.currentQuestionIndex
      ].incorrect_answers;
    },
  },
};
</script>

<style>
</style>
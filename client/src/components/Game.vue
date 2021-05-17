<template>
  <div class="container">
    <h1>Welcome</h1>
    <hr />
    <div v-if="questions">
      <Lobby v-if="gameState === -1" :users="users" />
      <question
        v-if="gameState === 0"
        :question="currentQuestion"
        :answers="currentAnswers"
        @submit-answer="submitAnswer"
      />
      <Answer
        v-if="gameState === 1"
        :userAnswer="userAnswer"
        :correctAnswer="correctAnswer"
        @next-question="nextQuestion"
      />
      <Scores v-if="gameState === 2" :score="score" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import Question from "./Question.vue";
import Answer from "./Answer.vue";
import Scores from "./Scores.vue";
import Lobby from "./Lobby.vue";

export default {
  name: "Game",
  components: {
    Question,
    Answer,
    Scores,
    Lobby,
  },
  data() {
    return {
      users: [],
      questions: null,
      currentQuestionIndex: 0,
      currentQuestion: "",
      currentAnswers: [],
      correctAnswer: "",
      userAnswer: "",
      socket: io("localhost:3000"),
      gameState: -1,
      score: 0,
    };
  },
  created() {
    this.socket.emit("startGame", "medium");
    this.socket.on("questions", (questions) => {
      console.log(questions);
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[0].question;
      this.currentAnswers = this.questions[0].answers;
    });
    this.socket.on("users", (users) => {
      this.users = users;
    });
  },
  methods: {
    async getQuestions() {
      console.log("TEST");
      try {
        const res = await axios.get(`http://localhost:3000/test2`);
        this.questions = res.data;
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.questions[0].question;
        this.currentAnswers = this.questions[0].answers;
      } catch (error) {
        console.log(error);
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestion = this.questions[
          this.currentQuestionIndex
        ].question;
        this.currentAnswers = this.questions[this.currentQuestionIndex].answers;
        this.gameState = 0;
      } else {
        this.gameState = 2;
      }
    },
    submitAnswer(a) {
      this.correctAnswer = this.questions[
        this.currentQuestionIndex
      ].correct_answer;
      this.userAnswer = a;
      this.gameState = 1;
      if (this.correctAnswer == a) {
        this.score += 100;
      } else {
        this.score -= 50;
      }
    },
  },
};
</script>

<style>
</style>
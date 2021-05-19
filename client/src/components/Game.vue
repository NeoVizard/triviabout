<template>
  <div class="container">
    <h1>Welcome</h1>
    <hr />
    <Loader v-if="gameState === -2" />
    <Lobby v-if="gameState === -1" :users="users" @start-game="startGame" />
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
      :users="users"
      @next-question="nextQuestion"
    />
    <Scores v-if="gameState === 2" :score="score" />
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import Question from "./Question.vue";
import Answer from "./Answer.vue";
import Scores from "./Scores.vue";
import Lobby from "./Lobby.vue";
import Loader from "./Loader.vue";

export default {
  name: "Game",
  components: {
    Question,
    Answer,
    Scores,
    Lobby,
    Loader,
  },
  data() {
    return {
      users: [],
      userName: "",
      roomName: "",
      questions: null,
      currentQuestionIndex: 0,
      currentQuestion: "",
      currentAnswers: [],
      correctAnswer: "",
      userAnswer: "",
      socket: io("localhost:3000"),
      gameState: -2,
      score: 0,
    };
  },
  created() {
    this.userName = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="))
      .split("=")[1];
    this.roomName = this.$route.params.roomName;
    this.socket.emit("joinRoom", {
      roomName: this.roomName,
      userName: this.userName,
    });
    this.socket.on("joinedRoom", () => {
      this.gameState = -1;
    });
    this.socket.on("gettingQuestions", () => {
      this.gameState = -2;
    });
    this.socket.on("questions", (questions) => {
      // console.log(questions);
      this.gameState = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[0].question;
      this.currentAnswers = this.questions[0].answers;
    });
    this.socket.on("users", (users) => {
      this.users = users;
    });
    this.socket.on("answers", (users) => {
      this.users = users;
      this.gameState = 1;
    });
    this.socket.on("nextQuestion", () => {
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
    });
  },
  methods: {
    async getQuestions() {
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
    startGame() {
      this.socket.emit("startGame", this.roomName);
    },
    nextQuestion() {
      this.socket.emit("nextQuestion", this.roomName);
    },
    submitAnswer(a) {
      this.correctAnswer = this.questions[
        this.currentQuestionIndex
      ].correct_answer;
      this.userAnswer = a;

      this.gameState = -2;

      this.socket.emit("answer", a, this.roomName);

      // if (this.correctAnswer == a) {
      //   this.score += 100;
      // } else {
      //   this.score -= 50;
      // }
    },
  },
};
</script>

<style>
</style>
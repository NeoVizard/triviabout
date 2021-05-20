<template>
  <div class="container">
    <Loader v-if="gameState === -2" :message="loadMessage" />
    <Lobby
      v-if="gameState === -1"
      :users="users"
      :isLeader="isLeader"
      @start-game="startGame"
    />
    <Question
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
      :isLeader="isLeader"
      @next-question="nextQuestion"
    />
    <Scores
      v-if="gameState === 2"
      :score="score"
      :isLeader="isLeader"
      :users="users"
      @play-again="playAgain()"
    />
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
      isLeader: false,
      isWaiting: false,
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
      loadMessage: "",
    };
  },
  created() {
    this.userName = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="))
      .split("=")[1];
    this.roomName = this.$route.params.roomName;
    this.socket.emit("joinRoom", this.roomName, this.userName);
    this.socket.on("joinedRoom", (roomState) => {
      console.log(roomState);
      if (roomState === 0)
      {
        if (!this.isWaiting) this.gameState = -1;
      }
      else {
        if (!this.isWaiting) this.gameState = -2;
        this.loadMessage = "Game in progress";
        this.isWaiting = true;
      }
    });
    this.socket.on('playAgain', ()=> {
      this.isWaiting = false;
      this.gameState = -1;
    });
    this.socket.on("gettingQuestions", () => {
      this.loadMessage = "Getting questions";
      if (!this.isWaiting) this.gameState = -2;
    });
    this.socket.on("questions", (questions) => {
      console.log(questions);
      if (!this.isWaiting) this.gameState = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[0].question;
      this.currentAnswers = this.questions[0].answers;
    });
    this.socket.on("users", (users) => {
      this.users = users;
      console.log(users);
      console.log(this.userName);
      console.log(this.socket.id);
      this.isLeader = users.find((u) => u.id === this.socket.id).isLeader;
    });
    this.socket.on("answers", (users) => {
      this.users = users;
      if (!this.isWaiting) this.gameState = 1;
    });
    this.socket.on("nextQuestion", () => {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestion = this.questions[
          this.currentQuestionIndex
        ].question;
        this.currentAnswers = this.questions[this.currentQuestionIndex].answers;
        if (!this.isWaiting) this.gameState = 0;
      } else {
        if (!this.isWaiting) this.gameState = 2;
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

      if (!this.isWaiting) this.gameState = -2;
      this.loadMessage = "Waiting for others";

      if (this.correctAnswer == a) {
        this.score += 100;
      } else {
        this.score -= 50;
      }

      this.socket.emit("answer", a, this.score, this.roomName);
    },
    playAgain() {
      this.socket.emit('playAgain', this.roomName);
    }
  },
};
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  background-color: white;
  margin: 0px 10px;
  min-height: 200px;
  border-radius: 20px;
}
</style>
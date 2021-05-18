<template>
  <div class="container">
    <UserNameModal v-if="showModal" @close="showModal = false" />
    <h1>HELLO</h1>
    <img src="../assets/triviabout.png" alt="TriviaBout" />
    <router-link to="/game" tag="button">START GAME</router-link>
    <button @click="gotoRoom()">GOTO ROOM</button>
  </div>
</template>

<script>
import UserNameModal from "./UserNameModal.vue";
export default {
  components: { UserNameModal },
  name: "Home",
  data() {
    return {
      userName: "",
      showModal: true,
    };
  },
  created() {
    this.showModal =
      document.cookie.split("; ").find((row) => row.startsWith("username=")) ===
      undefined;
  },
  methods: {
    gotoRoom() {
      this.$router.push("/room/123");
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
}

img {
  width: 50%;
}
</style>
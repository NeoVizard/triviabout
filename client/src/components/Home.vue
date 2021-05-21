<template>
  <div class="container">
    <UserNameModal v-if="showModal" @close="showModal = false" />
    <img src="../assets/triviabout.png" alt="TriviaBout" />
    <button @click="makeRoom()">PLAY</button>
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
    makeRoom() {
      var result = [];
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < 10; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
        );
      }
      this.$router.push(`/room/${result.join('')}`);
    },
  },
};
</script>

<style scoped>
img {
  width: 50%;
}
</style>
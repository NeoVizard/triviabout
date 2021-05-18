<template>
  <div>
    <UserNameModal v-if="showModal" @close="showModal = false" />
    <Game v-if="!showModal" />
  </div>
</template>

<script>
import Game from "./Game.vue";
import UserNameModal from "./UserNameModal.vue";
export default {
  components: { UserNameModal, Game },
  data() {
    return {
      showModal: true,
    };
  },
  created() {
    this.showModal =
      document.cookie.split("; ").find((row) => row.startsWith("username=")) ===
      undefined;
  },
};
</script>

<style>
</style>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">Choose a nickname</div>

          <div class="modal-body">
            <input type="text" v-model="userName" />
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="setUserName()">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserNameModal",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    setUserName() {
      document.cookie = `username=${this.userName}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20em;
  margin: 0 auto;
  padding: 2em 2em 1em 2em;
  background-color: #fff;
  border-radius: 2em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  text-align: left;
  font-size: 1.5rem;
}

.modal-body {
  margin-top: 1em;
}

input {
  width: 100%;
  font-size: 1.5rem;
}

button {
  font-size: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

/* .modal-default-button {
  display: block;
  margin-top: 1em;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
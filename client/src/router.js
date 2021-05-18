import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";
import Room from "./components/Room.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/game",
    name: "game",
    component: Game,
  },
  {
    path: "/room/:roomName",
    name: "room",
    component: Room
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/game",
    name: "game",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
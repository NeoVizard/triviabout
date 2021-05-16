import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
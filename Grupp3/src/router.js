import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import QuizView from "./views/QuizView.vue";
import FactsView from "./views/FactsView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/quiz", component: QuizView, name: "quiz" },
    { path: "/facts", component: FactsView },
  ],
});

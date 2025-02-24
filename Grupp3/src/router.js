import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import FactsView from "./views/FactsView.vue";
import QuizShow from "./views/QuizShow.vue";
import ContactView from "./views/ContactView.vue";
import favorites from "./views/Favorites.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/facts", component: FactsView },
    { path: "/quiz", component: QuizShow },
    { path: "/favorites", favorites },
    { path: "/contact", component: ContactView },
  ],
});

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: "/",
    },
  ],
});

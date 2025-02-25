import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import "../assets/main.css";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
createApp(App).use(router).mount("#app");

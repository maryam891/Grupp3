import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import FactsView from './views/FactsView.vue'
import QuizShow from './views/QuizShow.vue'
import ContactView from './views/ContactView.vue'
import Favorites from './views/FavoritesView.vue'
import MyPages from './views/MyPages.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/facts', component: FactsView },
    { path: '/quiz', component: QuizShow },
    { path: '/favorites', component: Favorites },
    { path: '/contact', component: ContactView },
    { path: '/mypages', component: MyPages }
  ]
})

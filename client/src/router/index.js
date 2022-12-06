import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignupView from '../views/SignupView.vue';
import Login from '../views/LoginView.vue';
import AddPoems from '../views/AddPoems.vue';
import PoemView from '../views/PoemView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/addpoems',
    name: 'addpoems',
    component: AddPoems,
  },
  {
    path: '/poemview/:id',
    name: 'poemview',
    component: PoemView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

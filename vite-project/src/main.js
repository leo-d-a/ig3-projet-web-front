import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import "./normalize.css";
import App from "./App.vue";
import Login from "./views/Auth/Login.vue";
import Signup from "./views/Auth/Signup.vue";
import Home from "./views/Home.vue";
import './index.css'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

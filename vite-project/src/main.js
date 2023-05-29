import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import "./normalize.css";
import App from "./App.vue";
import Login from "./views/Logs/Login.vue";
import Signup from "./views/Logs/Signup.vue";
import Home from "./views/Home.vue";
// import AdminPanel from "./views/Panels/AdminPanel.vue";
// import UserPanel from "./views/Panels/UserPanel.vue";
import './index.css'; 

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  // { path: "/admin", component: AdminPanel },
  // { path: "/user", component: UserPanel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

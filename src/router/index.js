import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ForgotPassword from "../views/ForgotPassword.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Home",
    component: Home,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: ForgotPassword,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

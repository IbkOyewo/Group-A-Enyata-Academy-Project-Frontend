import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/create-application",
    name: "CreateApp",
    component: () => import("../views/CreateApp.vue"),
  },   
  {
    path: "/assessment-history",
    name: "AssessHistory",
    component: () => import("../views/AssessHistory.vue"),
  },   
  {
    path: "/batch-3",
    name: "Batch-3",
    component: () => import("../views/Batch-3.vue"),
  },   
  {
    path: "/profile-setting",
    name: "ProfileSetting",
    component: () => import("../views/ProfileSetting.vue"),
  },   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

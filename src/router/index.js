import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/takeAssessment",
    name: "takeAssessment",
    component: () => import("../views/takeAssessment.vue"),
  },

  {
    path: "/adminDashboard",
    name: "adminDashboard",
    component: () => import("../views/AdminDashboard.vue"),
  },

  {
    path: "/adminentries",
    name: "adminentries",
    component: () => import("../views/EntriesTable.vue"),
  },

  {
    path: "/adminresult",
    name: "results",
    component: () => import("../views/Results.vue"),
  },

  {
    path: "/timer-settings",
    name: "TimerSettings",
    component: () => import("../views/TimerSettings.vue"),
  },

  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },

  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: () => import("../views/ForgotPassword.vue"),
  },

  {
    path: "/login",
    name: "applicantLogin",
    component: () => import("../views/ApplicantLogin.vue"),
  },

  {
    path: "/applicationform",
    name: "applicantForm",
    component: () => import("../views/ApplicantForm.vue"),
  },

  {
    path: "/questions",
    name: "questionView",
    component: () => import("../views/questionView.vue"),
  },

  {
    path: "/adminlogin",
    name: "adminlogin",
    component: () => import("../views/AdminLogin.vue"),
  },

  {
    path: "/compose-question",
    name: "composeQues",
    component: () => import("../views/composeQuestionView.vue"),
  },

  {
    path: "/adminentries-b4",
    name: "adminEntryModalb",
    component: () => import("../views/adminEntriesB4.vue"),
  },

  {
    path: "/adminentries-b5",
    name: "adminEntryModal",
    component: () => import("../views/adminEntriesB5.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

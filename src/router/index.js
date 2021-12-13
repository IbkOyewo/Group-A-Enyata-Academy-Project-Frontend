import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  
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
    name: "applicationAdmin",
    component: () => import("../views/CreateApp.vue"),
  }, 
    
  {
    path: "/assessment-history",
    name: "AssessHistory",
    component: () => import("../views/AssessHistory.vue"),
  }, 

  {
    path: "/reset-password",
    name: "resetPassword",
    component: () => import("../views/ResetPassword.vue"),
  }, 
  
  

  {
    path: "/batch-3",
    name: "Batch-3",
    component: () => import("../views/Batch-3.vue"),
  },   
  
  {
    path: "/profile-setting",
    name: "ProfileSettings",
    component: () => import("../views/ProfileSetting.vue"),
  },   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

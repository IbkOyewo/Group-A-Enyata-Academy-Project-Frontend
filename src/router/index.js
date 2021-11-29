import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [


  {
    path: '/takeAssessment',
    name:'takeAssessment',
    component: () => import('../views/takeAssessment.vue'),
  },

  {
    path: '/adminDashboard',
    name: 'adminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
  },

  {
    path: '/adminentries',
    name:'adminentries',
    component: () => import('../views/EntriesTable.vue'),
  },

  {
    path: '/adminresult',
    name:'results',
    component: () => import('../views/Results.vue'),
  },

  {
    path: '/timer-settings',
    name: 'TimerSettings',
    component: () => import('../views/TimerSettings.vue'),
  },

  {
    path: "/signup",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },

  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: () => import('../views/ForgotPassword.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

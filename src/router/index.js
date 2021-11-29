import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/questions",
    name: "questionView",
    component: () =>
      import(/* webpackChunkName: "question" */ "../views/questionView.vue"),
  },
  {
    path: "/sidebar",
    name: "UserSideBar",
    component: () =>
      import(
        /* webpackChunkName: "applicantDashboard" */ "../components/UserSideBar.vue"
      ),
  },
  {
    path: "/question",
    name: "QuestionPage",
    component: () =>
      import(
        /* webpackChunkName: "Assessment" */ "../components/QuestionPage.vue"
      ),
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: () =>
      import(/* webpackChunkName: "Success" */ "../components/AdminLogin.vue"),
  },
  {
    path: "/compose-question",
    name: "compose-question",
    component: () =>
      import(
        /* webpackChunkName: "ComposePage" */ "../views/composeQuestionView.vue"
      ),
  },
  {
    path: '/adminentries-b4',
    name:'adminentries',
    component: () => import(/* webpackChunkName: "Success" */ '../views/adminEntriesB4.vue'),
  },
  {
    path: '/adminentries-b5',
    name:'adminentries',
    component: () => import(/* webpackChunkName: "Success" */ '../views/adminEntriesB5.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

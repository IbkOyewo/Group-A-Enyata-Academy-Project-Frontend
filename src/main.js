import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import DToaster from "dtoaster";
import ToastPreset from "../toastPreset.json";
import "dtoaster/dist/dtoaster.css";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(DToaster, {
  presets: ToastPreset,
  position: "top-right", //toasts container position on the screen
  containerOffset: "45px", //toasts container offset from top/bottom of the screen
});

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
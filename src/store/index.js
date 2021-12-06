import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: '',
  },
  getters:{},
  mutations: {},
  actions: {
    async application({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:8082/api/user/application', userInfo);
         return response;
      } catch (error) {
        console.log(error);

      }
    },

    async fetchProfile({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.get(`http://localhost:8082/api/user/${id}`);
        // console.log(id);
        // console.log(response);
        commit('setProfile', response.data.data)

      } catch (error) {
        commit('setProfile', error.response)
      }
    },
  },
  modules: {},
});

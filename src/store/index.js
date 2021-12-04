import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //routes: this.$routes.path
  },
  getters: {
    // getRoutes(state) {
    //   return state.routes;
    // },
  },

  mutations: {
    // updateRoute: (state, payload) => {
    //   state.routes.push(payload)
    // },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async signup({commit}, userInfo) {
      try {
        // eslint-disable-next-line no-unused-vars
        const {cpassword, ...user} = userInfo;
        //console.log(user);
        const response = await axios.post('http://localhost:8082/api/signup', user);
        console.log(response.data)
        //console.log(response.status);
        //this.$route.path.push('/login')
      } catch (error) {
        console.log(error.response);
        //console.log(error.response.status);
      }
    },

    async login({ commit }, userInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/user/login', userInfo);
          let responseObject = {
            type: 'success',
            message: response.data.message,
            hasApp: response.data.hasApplied
          }

          console.log(response.data);
          

          const token = response.data.token
          localStorage.setItem('access_token', token)
          commit('retrieveToken', token)
          commit('setResponse', responseObject)
          
          // console.log(response.data.data._id);
          const user = await response.data.data._id
          localStorage.setItem('userP', user)
          commit('setUser',user)
        
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async application({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/user/application', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async fetchProfile({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.get(`http://localhost:3000/api/user/${id}`);
        // console.log(id)
;
        // console.log(response);
        commit('setProfile', response.data.data)

      } catch (error) {
        commit('setProfile', error.response)
      }
    },

    async fetchOneApp({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.get(`http://localhost:3000/api/application/${id}`);
        commit('setOneApp', response.data.data)

      } catch (error) {
        commit('setOneApp', error.response)
      }
    },

    async fetchQuiz({commit}) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.get(
          `http://localhost:3000/api/questions`
        );

        commit('setQuiz', response.data)
        
      } catch (error) {
        commit('setQuiz', error.response)
      }
    },

    async answers({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/user/question/submit', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async editProfile({ commit },  userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.put(`http://localhost:3000/api/user/profilepic/${id}`, userInfo);
        

        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponse', responseObject)
       
  
      } catch (error) {
       
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponse', responseObject)
      }
    },

    async adminLogin({ commit }, userInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/admin/login', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          const token = response.data.token
          localStorage.setItem('access_token', token)

          commit('retrieveToken', token)
          commit('setResponse', responseObject)
          
          console.log(response.data.data._id);
          const user = await response.data.data._id
          localStorage.setItem('admin', user)
          commit('setAdmin',user)
        
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        commit('setResponse', responseObject)
      }
    },


  },
  modules: {
  }
})
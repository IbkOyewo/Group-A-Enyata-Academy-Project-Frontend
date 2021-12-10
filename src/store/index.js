import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('User-Token') || '',
    adminToken: localStorage.getItem('Admin-Token') || '',
  },
  getters: {
    getToken: (state) => state.adminToken,
  },
  mutations: {
    setToken: (state, payload) => state.adminToken = payload,
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async signup({commit}, userInfo) {
      try {
        // eslint-disable-next-line no-unused-vars
        const {cpassword,...user} = userInfo;
        const response = await axios.post('http://localhost:8082/api/signup', user);
        return response
      } catch (error) {
        if (error.response.status === 400) {
          alert("User already exists")
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    async login({ commit}, {email,password}) {
      try {
        const response = await axios.post('http://localhost:8082/api/login', {
          email,
          password
        })
        let token = response.data.token;
        localStorage.setItem('User-Token', token)
        //axios.defaults.headers.common['Authorization'] = token
        //console.log(token)
        return response
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid Credentials. Please try again")
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    async adminLogin({commit}, {email,password}) {
      try {
        const response = await axios.post('http://localhost:8082/api/admin/login', {
          email,
          password
        })
        let token = response.data.data;
        localStorage.setItem('Admin-Token', token)
        return response
      } catch (error) {
        if (error.response.status === 401) {
          alert("Admin already exists. Please try again")
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    async application({commit}, userInfo) {
      try {
          let config = {
            method: 'post',
            url: 'http://localhost:8082/api/user/application',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
          },
            data : userInfo
          };

          let response = axios(config)
          return response
      }
      catch(error){
        console.log(error);
      }
    },
 // eslint-disable-next-line no-unused-vars
    async createApplication({commit}, applicationInfo) {
      try {
          let config = {
            method: 'post',
            url: 'http://localhost:8082/api/admin/application',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.adminToken
          },
            data : applicationInfo
          };

          let response = axios(config)
          return response
      }
      catch(error){
        console.log(error);
      }
    },

    // eslint-disable-next-line no-unused-vars
    async adminDashboard({commit}) {
      try {
        let config = {
          method: 'get',
          url: 'http://localhost:8082/api/admin/current_applications',
          headers: { 
            'x-access-token': this.state.adminToken
          }
        };
  
       const response = await axios(config)
          return response
      } catch (error) {
        console.log(error)
      }
    },

    // eslint-disable-next-line no-unused-vars
    async totalApplication({commit}) {
      try {
        let config = {
          method: 'get',
          url: 'http://localhost:8082/api/admin/total_applications',
          headers: { 
            'x-access-token': this.state.adminToken
          }
        };
  
       const response = await axios(config)
          console.log(response)
          return response
      } catch (error) {
        console.log(error)
      }
    },


    // eslint-disable-next-line no-unused-vars
    async batchEntries({commit}) {
      try {
        let config = {
          method: 'get',
          url: 'http://localhost:8082/api/user/profile',
          headers: { 
            'x-access-token': this.state.adminToken
          }
        };
  
       const response = await axios(config)
          console.log(response)
          return response
      } catch (error) {
        console.log(error)
      }
    },

    // eslint-disable-next-line no-unused-vars
    async assessmentHistory({commit}) {
      try {
        let config = {
          method: 'get',
          url: 'http://localhost:8082/api/admin/assessment_history',
          headers: { 
            'x-access-token': this.state.adminToken
          }
        };
  
       const response = await axios(config)
          console.log(response)
          return response
      } catch (error) {
        console.log(error)
      }
    },

    // eslint-disable-next-line no-unused-vars
    async composeAssessment({commit}, userInfo) {
      try {
          let config = {
            method: 'post',
            url: 'http://localhost:8082/api/admin/compose-assessment',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.adminToken
          },
            data : userInfo
          };

          let response = axios(config)
          return response
      }
      catch(error){
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async getResults({commit}) {
      try {
          let config = {
            method: 'get',
            url: 'http://localhost:8082/api/user/results',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.adminToken
          }
          };

          let response = axios(config)
          return response
      }
      catch(error){
        console.log(error);
      }
    },
     // eslint-disable-next-line no-unused-vars
     async getDashboard({commit}) {
      try {
          let config = {
            method: 'get',
            url: 'http://localhost:8082/api/dashboard/1',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
          }
          };
// console.log(this.state.userToken.id);
          let response = axios(config)
          console.log(response);
          return response
      }
      catch(error){
        console.log(error);
      }
    },
     // eslint-disable-next-line no-unused-vars
     async getAdminDashboard({commit}) {
      try {
          let config = {
            method: 'get',
            url: 'http://localhost:8082/api/dashboard/12',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
          }
          };
// console.log(this.state.userToken.id);
          let response = axios(config)
          console.log(response);
          return response
      }
      catch(error){
        console.log(error);
      }
    },
  },


  modules: {},
});
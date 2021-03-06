import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('User-Token') || '',
    adminToken: localStorage.getItem('Admin-Token') || '',
    adminInfo: {},
    displayQuest: [],
    approvalStatus: [],
    loggedIn: [],
    timeFinish: {},
    getEmail: "",
  },
  getters: {
    displayQuest: (state) => state.displayQuest,
    getToken: (state) => state.adminToken,
    getAdminInfo : (state) => state.adminInfo
  },
  mutations: {
    setToken: (state, payload) => (state.adminToken = payload),
    setQuest: (state, payload) => {
      state.displayQuest = payload;
    },
    setTimeFinish: (state, payload) => {
      state.timeFinish = payload;
    },
    setAdminInfo(state, info) {
      state.adminInfo = info;
    },
    setGetEmail: (state, payload) => {
      state.getEmail = payload;
    },
  },
  
  actions: {
    // eslint-disable-next-line no-unused-vars
    async signup({ commit }, userInfo) {
      try {
        // eslint-disable-next-line no-unused-vars
        const { cpassword, ...user } = userInfo;
        const response = await axios.post(
          "http://localhost:8082/api/signup",
          user
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post("http://localhost:8082/api/login", {
          email,
          password,
        });
        let token = response.data.token;
        localStorage.setItem("User-Token", token);
        return response;
      } catch (error) {
        console.log(error.response);
        // if (error.response.status === 401) {
        //   alert("Invalid Credentials. Please try again");
        // }
      }
    },
    // forgetpassword
    async forgetpassword({ commit }, { email }) {
      try {
        const response = await axios.post(
          "http://localhost:8082/user/forgetpassword",
          {
            email,
          }
        );
        let token = response.data.token;
        localStorage.setItem("User-Token", token);
        return response;
      } catch (error) {
        console.log(error.response);
      }
    },
    // resetpassword
    async resetpassword({ commit }, { email, password, oneTimeToken }) {
      try {
        const response = await axios.put(
          `http://localhost:8082/user/reset-password/verification=${oneTimeToken} `,
          {
            password,
            email,
          }
        );
        let token = response.data.token;
        localStorage.setItem("User-Token", token);
        return response;
      } catch (error) {
        console.log(error.response);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async adminLogin({ commit }, { email, password }) {
      try {
        const response = await axios.post(
          "http://localhost:8082/api/admin/login",
          {
            email,
            password,
          }
        );
        let token = response.data.data;
        localStorage.setItem("Admin-Token", token);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async application({ commit }, userInfo) {
      try {
        let config = {
          method: "post",
          url: "http://localhost:8082/api/user/application",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.userToken,
          },
          data: userInfo,
        };

        let response = axios(config);
        return response;
      } catch (error) {
        //console.log(error.response.status);
        if (
          error.response.message === "This user has already sent an application"
        ) {
          alert("This user has already sent an application");
        }
        if (error.response.message === "This user is not registered") {
          alert("This user is not registered");
        }
        //console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async createApplication({ commit }, applicationInfo) {
      try {
        let config = {
          method: "post",
          url: "http://localhost:8082/api/admin/application",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.adminToken,
          },
          data: applicationInfo,
        };

          let response = axios(config)
          console.log(response);
          return response
      }
      catch(error){
        console.log(error);
      }
    },

    // eslint-disable-next-line no-unused-vars
    async adminDashboard({ commit }) {
      try {
        let config = {
          method: "get",
          url: "http://localhost:8082/api/admin/current_applications",
          headers: {
            "x-access-token": this.state.adminToken,
          },
        };

        const response = await axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // eslint-disable-next-line no-unused-vars
    async totalApplication({ commit }) {
      try {
        let config = {
          method: "get",
          url: "http://localhost:8082/api/admin/total_applications",
          headers: {
            "x-access-token": this.state.adminToken,
          },
        };

        const response = await axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // eslint-disable-next-line no-unused-vars
    async batchEntries({ commit }) {
      try {
        let config = {
          method: "get",
          url: "http://localhost:8082/api/user/details",
          headers: {
            "x-access-token": this.state.adminToken,
          },
        };

        const response = await axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // eslint-disable-next-line no-unused-vars
    async assessmentHistory({ commit }) {
      try {
        let config = {
          method: "get",
          url: "http://localhost:8082/api/admin/assessment_history",
          headers: {
            "x-access-token": this.state.adminToken,
          },
        };

        const response = await axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

      // eslint-disable-next-line no-unused-vars
      async adminProfile({commit}) {
        try {
          let config = {
            method: 'get',
            url: 'http://localhost:8082/api/admin/profile',
            headers: { 
              'x-access-token': this.state.adminToken
            }
          };
    
         const response = await axios(config)
            console.log(response)
            commit("setAdminInfo", response.data.data);
        } catch (error) {
          console.log(error)
        }
      },

    // eslint-disable-next-line no-unused-vars
    async composeAssessment({ commit }, userInfo) {
      try {
        let config = {
          method: "post",
          url: "http://localhost:8082/api/admin/compose-assessment",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.adminToken,
          },
          data: userInfo,
        };

        let response = axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async getResults({ commit }) {
      try {
        let config = {
          method: "get",
          url: "http://localhost:8082/api/user/results",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.adminToken,
          },
        };

        let response = axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async getDashboard({ commit }) {
      try {
        let token = localStorage.getItem("User-Token");
        let decoded = VueJwtDecode.decode(token);
        const {id} = decoded
        console.log(decoded);
          let config = {
            method: 'get',
            url: `http://localhost:8082/api/user-dashboard/${id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
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
    async getUserDetails({commit},id) {
      try {
          let config = {
            method: 'get',
            url: `http://localhost:8082/api/user-dashboard/${id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
          }
          };

        let response = axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async getAdminDashboard({ commit }) {
      try {
        let token = localStorage.getItem("Admin-Token");
        let decoded = VueJwtDecode.decode(token);
        const {user_id} = decoded
          let config = {
            method: 'get',
            url: `http://localhost:8082/api/admin-dashboard/${user_id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.adminToken
          }
          };

        let response = axios(config);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchQuestions({ commit }, displayQuest) {
      try {
        axios
          .get("http://localhost:8082/api/user/take-assessment")
          .then((data) => {
            commit("setQuest", data);
            console.log("question ====>", data);
          });
      } catch (error) {
        console.log("state", error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async approveApplication({commit}) {
      try {
        let token = localStorage.getItem("User-Token");
        let decoded = VueJwtDecode.decode(token);
        const {id} = decoded
          let config = {
            method: 'put',
            url: `http://localhost:8082/api/admin/approve/${id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
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
     async declineApplication({commit}) {
      try {
        let token = localStorage.getItem("User-Token");
        let decoded = VueJwtDecode.decode(token);
        const {id} = decoded
          let config = {
            method: 'put',
            url: `http://localhost:8082/api/admin/decline/${id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.userToken
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
     async updateAdmin({commit}, name) {
      try {
        let token = localStorage.getItem("Admin-Token");
        let decoded = VueJwtDecode.decode(token);
        const {user_id} = decoded
        // console.log(decoded)
          let config = {
            method: 'put',
            url: `http://localhost:8082/api/admin/update/${user_id}`,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': this.state.adminToken
          },
          data: name
          };

          let response = axios(config)
          return response
      }
      catch(error){
        console.log(error);
      }
    },
  },

  modules: {},
});
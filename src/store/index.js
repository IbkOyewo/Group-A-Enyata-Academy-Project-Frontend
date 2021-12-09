import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {},
  mutations: {},
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
          let config = {
            method: 'post',
            url: 'http://localhost:8082/api/user/application',
            headers: { 
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM4OTEwMDIwLCJleHAiOjE2Mzg5MTM2MjB9.6rhrrJaROiWFk7ENubZDVVUTCmCr3SYfhzxboUMT4pg'
            },
            data : userInfo
          };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
          //axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        //   let user = localStorage.getItem('User-Token');
        //   console.log(user)
        //    if (user) {
        //     // for Node.js Express back-end
        //     return { 'x-access-token': user };
        //     const response = await axios.post('http://localhost:8082/api/user/application', userInfo);
          
         
        //   console.log(response);
        //   return response;
        //   } else {
        //     return {};
        //   }
          
        // } catch (error) {
        //   console.log(error);

        // }
        ,
        async adminDashboard({commit}) {
          const token = localStorage.getItem('Admin-Token')
          let config = {
            method: 'get',
            url: 'http://localhost:8082/api/admin/current_applications',
            headers: { 
              'x-access-token': token
            }
          };
          
        axios(config)
        .then(function (response) {
        return response;
        })
        .catch(function (error) {
          console.log(error);
        });
      }

  },
  modules: {},
});
<template>
  <div class="sidebar">
    <div class="applicant-image">
      <div class="" v-if="Profile.profpic">
        <img :src="Profile.profpic" class="logo" />
      </div>
      <form class="fileup" v-else  @submit.prevent="submitForm" enctype="multipart/form-data">
        <div class="upload-btn-wrapper">
          <button class="btns">
            <strong><i class="fa fa-plus" aria-hidden="true"></i></strong> 
          </button>
          <input type="file" name="file" ref="file" @change="handleFileUpload"/>
        </div>
         <button type="submit" class="text-white p-2 btn btn-white">add profile picture</button>
         
      </form>

      <h1 class="user-name">{{Profile.fname + " " + Profile.lname}}</h1>
      <p class="user-email">{{Profile.email}}</p>
    </div>

    <div class="sidebar-icon">
      <div class="container">
        <router-link :to="{name: 'Dashboard'}" class="tests ps-2">
          <img src="../assets/dashboard.png" alt="dashboard">
          <span class="mx-3">Dashboard</span>
        </router-link>
      </div>
      <div class="container">
        <router-link :to="{name: 'takeAssessment'}" class="tests ps-2">
          <img src="../assets/assessment.png" alt="assessment">
          <span class="mx-3">Assesment</span>
        </router-link>
      </div>

      <div class="container pt-3">
        <router-link :to="{name: 'home'}" class="tests">
        <button @click="logut" class="logout">
          <img src="../assets/logout.png" alt="logout">
          <span class="mx-3">Logout</span>
        </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "sidebar",
  data() {
    return {
      Profile: [],
      file: '',
      message: ""
    };
  },
  methods: {
    fetchProfile() {
      const file = this.$refs.file.files[0];
      this.file = file
    },

    submitForm() {
      const formData = new FormData();
      formData.append('file',this.file);
      this.editProfile(formData)
    }
  },

  async mounted() {
    await this.fetchProfile();
    this.Profile = await this.getProfile;
  }
};
</script>

<style scoped>
.tests {
  color: #212529;
}
a.router-link-exact-active {
  color: #2B3C4E;
  font-weight: 700;
}
 a{
text-decoration: none;
}
.logout {
  background: #ffff;
  border: none;
}

.sidebar {
  width: 292px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  min-height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
}
.applicant-image {
  width: 100%;
  height: 255px;
  left: 0px;
  top: 0px;
  background: #7557D3;
  display: inline-block;
  text-align: center;
  padding-top: 50px;
}
.profile {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: auto;
}
.user-name {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  margin-top: 20px;
}
.user-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
}
.sidebar-icon {
  padding-top: 50px;
  padding-left: 40px;
}
.sidebar-icon > div {
  height: 50px;
  width: 100%;
}
.icon {
  margin-right: 25px;
}

button.logout{
padding-right: 44px
}

.sidebar-icon > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 18px 35px 12px 35px;
  text-align: left;
}
.sidebar-icon > div.active > p {
  font-weight: bold;
  color: #2b3c4e;
  border-left: 4px solid #31d283;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btns {
  border: 1.55px dashed #2b3c4e;
  box-sizing: border-box;
  /* color: #2b3c4e; */
  padding: 6px 18px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  /* font-weight: bold; */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.logo {
  max-width: 100px;
  max-height: 85px;
  border-radius: 50%;
}
</style>

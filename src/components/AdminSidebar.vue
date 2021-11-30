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
         <button type="submit" class="text-white p-2 btn btn-white">add profile pic</button>
         
      </form>

      <h1 class="user-name">{{Profile.fname + " " + Profile.lname}}</h1>
      <p class="user-email">{{Profile.email}}</p>
    </div>

    <div class="sidebar-icon">
      <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests dashboard">
          <img src="../assets/dashboard.png" alt="dashboard">
          <span class="mx-3">Dashboard</span>
        </router-link>
      </div>
      <div class="container">
        <router-link :to="{name: 'takeAssessment'}" class="tests create ps-2">
          <img src="../assets/create-application-icon.svg" alt="create application">
          <span class="mx-3">Create Application</span>
        </router-link>
      </div>

       <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests appentry">
          <img src="../assets/application-entries-icon.svg" alt="application entries">
          <span class="mx-3">Application Entries</span>
        </router-link>
      </div>

       <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests compose">
          <img src="../assets/compose-assessment-icon.svg" alt="Compose Assessment">
          <span class="mx-3">Compose Assessment</span>
        </router-link>
      </div>

      <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests history">
          <img src="../assets/assessment-history-icon.svg" alt="Assessment History">
          <span class="mx-3">Assessment History</span>
        </router-link>
      </div>

      <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests results">
          <img src="../assets/results-icon.svg" alt="Results">
          <span class="mx-3">Results</span>
        </router-link>
      </div>

 <div class="container">
        <router-link :to="{name: 'applicantDashboard'}" class="tests settings">
          <img src="../assets/settings-icon.svg" alt="Results"> 
          <span class="mx-3">Settings</span>
        </router-link>
      </div>

      <div class="container">
        <button @click="logut" class="logout">
          <img src="../assets/log-out-icon.svg" alt="logout">
          <span class="mx-3">Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "adminSidebar",
  data() {
    return {
      Profile: [],
      file: '',
      message: ""
    };
  },
  computed: {
    ...mapGetters(["getProfile", "apiResponse"])
  },
  methods: {
    ...mapActions(["fetchProfile", "logout", "editProfile"]),
    logout() {
      this.logout();
      this.$router.push({ name: "login" });
    },
    handleFileUpload() {
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
.tests.dashboard{
padding-right: 79px;
}
.tests.create{
  padding-right: 40px;
}
.tests.appentry{
padding-right: 25px;
}
.tests.history{
padding-right: 20px;
}
.tests.results{
  padding-right: 105px;
}
.tests.settings{
  padding-right: 105px;
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
}
.sidebar-icon > div {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  margin-right: 25px;
}
button.logout{
padding-right: 120px;
padding-top: 50px;
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
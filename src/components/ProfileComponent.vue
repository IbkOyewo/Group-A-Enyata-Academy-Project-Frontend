<template>
    <div class="container">
      <div class="title">
        <h4>Profile Settings</h4>
        <button v-on:click="editNow=false" id="edit-btn">Edit</button>
      </div>
      <hr>
      <div class="options">
        <div class="circle">
          <img src="../assets/account.svg" alt="profile-picture">
        </div> 
        <a href="">Upload a new image</a>
        <p @click="filesSelectedPhoto($event)" class="red-text">x  Remove</p>
      </div>
      <div class="form">
        <div class="row1">
          <div class="input-1">
            <label for="name">Name</label>
            <input :disabled="editNow" type="text" placeholder="Fatomi Abiodun" v-model="name">
          </div>
          <div class="input-2">
            <label for="name">Email</label>
            <input disabled type="text" value="fatomi@enayat.com" placeholder="fatomi@enyata.com" v-model="update.email">
          </div>
          <div class="input-3">
            <label for="name">Phone number</label>
            <input :disabled="editNow" placeholder="08012345678" type="text" v-model="update.phone">
          </div>
        </div>
        <div class="row2">
          <div class="input-4">
            <label for="name">Country</label>
            <input :disabled="editNow" placeholder="Nigeria" type="text" v-model="update.country">
          </div>
          <div class="input-5">
            <label for="name">Address</label>
            <input :disabled="editNow" placeholder="Ibadan, Nigeria" class="address"
            type="text" v-model="update.address">
          </div>
        </div>
        <b-form-invalid-feedback style="font-size: 15px" :state="updateStatus">
          <b></b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback style="font-size: 15px" :state="updateStatus">
          <b></b>
        </b-form-valid-feedback>
        <div class="save-btn">
          <button class="save-btn" @click="submit">Save</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileComponent',
  data() {
    return {
      name: '',
      update: {
        name: '',
        photo: null,
        email: '',
        phone: '',
        address: '',
        country: '',
      },
      updateStatus: null,
      valid: true,
      errors: {},
      editNow: true,
    };
  },
  methods: {
    submit: async function () {
      try {
        let name = this.name;
        let res = await this.$store.dispatch("updateAdmin", {name });

        if (res.status === 200) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "Admin Updated successful",
          });
        }
      } catch (error) {
        await this.$dtoast.pop({
          preset: "error",
          color: "white",
          heading: "Error",
          content: "Invalid Credentials. Please try again",
        });
        console.log(error);
      }
    }
  },
  async mounted() {
    await this.adminProfile()
    this.update.fullName = this.getAdminInfo.name;
    this.update.email = this.getAdminInfo.email;
    this.update.phone = this.getAdminInfo.phonenumber;
    this.update.address = this.getAdminInfo.address;
    this.update.country = this.getAdminInfo.country;

  },

};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
  height: 500px;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.title h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
  margin-top: 10px;
}
.title button {
  width: 127px;
  height: 38px;
  font-family: Karla;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #7557d3;
  border: 1px solid #7557d3;
  
}
.options {
  margin-top: 40px;
  width: 350px;
  height: 54px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
}
a, .red-text, label {
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #333758;
  opacity: 0.5;
}
a {
  text-decoration-line: underline;
}
.red-text {
  color: #FF5722;
  margin: auto;
}
.row1, .row2 {
  width: 724px;
}
.row1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 34px;
}
.row2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
input {
  width: 215px;
  height: 54px;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  padding: 10px;
  background-color: #f8f6fd;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border: none;
}
input:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.address {
  width: 469px;
}
#edit-btn:hover {
  background-color: #cac2e4;
}
#edit-btn:active {
  background-color: #a395d1;
}
.save-btn {
  width: 127px;
  height: 38px;
  background: #7557d3;
  color: #ffffff;
  border: none;
  margin: auto;
  border-radius: 3px;
}
.save-btn:hover{
  background: #8d73da;
}
.save-btn:active{
  background: #624aaa;
}
</style>

<template>
  <div class="all">
    <div class="first_sec container mt-5 pb-5 overflow-hidden">
      <div class="f_s_txt text-center">
        <img src="../assets/enyata_logo.png" alt="Enyata" />
        <h6>Admin Log In</h6>
      </div>
      <div class="container col-6">
        <p class="response"></p>
      </div>
      <div class="form-gro">
        <form @submit.prevent="adminLogin">
          <div class="form-group">
            <label for>Email Address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for>Password</label>
            <input
              class="form-control password"
              name="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              @keyup="validatePassword()"
              required
            />
            <span @click="togglePassword" v-show="showPassword">
              <i class="fas fa-eye mr-5" aria-hidden="true"></i>
            </span>
            <span @click="togglePassword" v-show="!showPassword">
              <i class="fa fa-eye-slash mr-5" aria-hidden="true"> </i>
            </span>
          </div>
          <button type="submit" class="btn" :disabled="!isDisabled">
            Sign in
          </button>
        </form>

        <div class="photo">
          <img src="../assets/Group-1.png" width="557px" height="615px" pb-4 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminlogin",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {
    isDisabled() {
      return this.email != "" && this.password != "";
    },
  },
  methods: {
    validatePassword() {
      if (this.userDetails.password.length >= 8) {
        this.feedbackPassword = true;
        this.valid = false;
        return this.feedbackPassword;
      }
      this.feedbackPassword = false;
      this.valid = true;
      return this.feedbackPassword;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    adminLogin: async function () {
      try {
        let email = this.email;
        let password = this.password;
        let res = await this.$store.dispatch("adminLogin", { email, password });
        if (res.status === 200) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "Login successful",
          });
          this.$router.push("/adminDashboard");
        }
      } catch (error) {
        await this.$dtoast.pop({
          preset: "error",
          color: "white",
          heading: "Error",
          content: "Invalid credentials. Please try again",
        });
      }
    },
  },
};
</script>

<style scoped>
body,
html {
  overflow: hidden;
}
.all {
  margin: 0;
  padding: 0;
  background-image: none;
  background: #7557d3;
  overflow: hidden;
  box-sizing: border-box;
}

.photo {
  position: absolute;
  left: 63.2%;
  right: 0;
  top: 7%;
  bottom: 550%;
  margin-bottom: 0px;
}

.photo img {
  padding-left: 100px;
}

.fa-eye,
.fa-eye-slash {
  font-size: 13px;
  color: #b8b8b9;
  position: relative;
  z-index: 2;
  cursor: pointer;
  bottom: 52px;
  left: 350px;
}

.field-icon {
  float: right;
  margin-left: -30px;
  margin-top: -45px;
  position: relative;
  z-index: 2;
  color: white;
  margin-right: 18px;
  cursor: pointer;
}

.api_res {
  color: red;
}

.form-gro {
  display: flex;
  justify-content: center;
}

.form-item {
  text-align: center;
}

.f_s_txt {
  margin-top: 70px;
  font-size: 32px;
  font-weight: bold;
  color: white;
}

h6 {
  font-size: 20px;
  font-style: italic;
  color: white;
  margin-bottom: 60px;
  margin-top: 20px;
}

.account {
  text-align: end;
}

.btn {
  margin-top: 15px;
  background: white;
  color: #7557d3;
  border-radius: 4px;
  width: 379px;
  height: 44px;
  border: none;
  margin-bottom: 140px;
  font-weight: 700;
}

.password {
  color: white;
  position: relative;
  z-index: 1;
}

.input-form {
  margin: 0 auto;
}

input {
  border-radius: 4px;
  background: #5b829c;
}

label {
  color: rgb(255, 255, 255);
  margin-right: 17em;
  margin-bottom: 8px;
}

.form-control {
  background: #7557d3;
  margin-bottom: 20px;
}

.response {
  text-align: center;
}

.response.failed {
  background-color: red;
  color: #2b3c4e;
}

.response.success {
  background-color: green;
  color: #2b3c4e;
}
button:disabled {
  background: #ccc;
}
</style>

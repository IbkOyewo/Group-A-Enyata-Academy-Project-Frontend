<template>
  <div class="all">
    <div class="first_sec container my-5 overflow-hidden">
      <div class="f_s_txt text-center">
        <img src="../assets/enyata_logo.png" alt="Enyata">
        <h6>Admin Log In</h6>
      </div>
      <div class="container col-6">
        <p class="response"></p>
      </div>
      <div class="form-gro">
        <form @submit.prevent="adminLogin">
          <div class="form-group">
            <label for>Email Address</label>
            <input type="email" class="form-control" name="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for>Password</label>
            <input type="password" class="form-control" name="password" v-model="password" required />
            <span>
              <i
                class="fa fa-eye-slash field-icon mr-5"
                aria-hidden="true"
              >
              </i>
            </span>
          </div>
          <button type="submit" class="btn" :disabled="!isDisabled" >
            Sign in
          </button>
        </form>

        <div class="photo">
          <img src="../assets/Group-1.png" width="557px" height="615px" pb-4/>
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
    };
  },
  computed: {
    isDisabled() {
      return this.email != "" && this.password != "";
    },
  },
  methods: {
    adminLogin: async function () {
      let email = this.email;
      let password = this.password;
      let res = await this.$store.dispatch("adminLogin", { email, password })
      if (res.status === 200) {
        this.$router.push("/adminDashboard")
      } 
    },
  },
};
</script>

<style scoped>

body, html{
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
    left: 49.%;
    right: 0;
    top: 7%;
    bottom: 650%;
    margin-bottom: 60px
}

.photo img{
  padding-left: 100px;
}

i {
  cursor: pointer;
}

.svg-inline--fa.fa-w-20 {
    width: 1em;
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
  color: #7557D3;
  border-radius: 4px;
  width: 379px;
  height: 44px;
  border: none;
  margin-bottom: 140px;
  font-weight: 700;
}


.password {
  color: white;
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
  background: #7557D3;  
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

<template>
  <section>
    <div class="form-header">
      <img src="../assets/Enyata-logo.png" alt="Enyata" />
      <p>Applicant Log In</p>
    </div>

    <form class="was-validated" @submit.prevent="login">
      <div class="form-body">
        <div class="input-field">
          <label for="email">Email</label>
          <input class="email-box" type="email" v-model="user.email" v-validate="'required|email'"
            name="email" />
          <span class="form-error">{{ errors.first("email") }}</span>
        </div>

        <div class="input-field">
          <label for="password">Password</label>
          <div class="password-field">
            <input
              class="password-box"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              v-validate="'required'"
              @keyup="validatePassword()"
              v-model="user.password"
            /><span @click="togglePassword" v-show="showPassword">
              <i class="fas fa-eye"></i>
            </span>
            <span @click="togglePassword" v-show="!showPassword">
              <i class="fas fa-eye-slash"></i>
            </span>
          </div>
        <span class="form-error">{{ errors.first("password") }}</span>
        </div>
      </div>
      <button class="submit-btn" type="submit" :disabled="!isDisabled">
        Submit
      </button>

      <div class="bottom-text">
        <span class="ft_txt"
          >Don’t have an account yet?<router-link :to="{ name: 'signup' }">
            Sign Up</router-link
          ></span
        >
        <span class="ft_txt"
          ><router-link :to="{ name: 'Forgot Password' }"
            >Forgot Password?</router-link
          ></span
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "applicantLogin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      // inputType: "password",
      showPassword: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },

    isDisabled() {
      return this.user.email != "" && this.user.password != "";
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
    login: async function () {
      try {
        let email = this.user.email;
        let password = this.user.password;
        let res = await this.$store.dispatch("login", { email, password });

        if (res.status === 200) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "Login successful",
          });
          const user = localStorage.getItem("Active Users");
          if ( user === null || user.includes(email) === false) {
            this.$router.push("/applicationform");
          } else {
            this.$router.push("/dashboard");
          }
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
    },
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.form-header {
  text-align: center;
  width: 100%;
  top: 70px;
  margin-top: 110px;
  line-height: 28.8px;
}

.form-error {
  color: red;
  margin-top: 6%;
  position: absolute;
  font-size: 14px;
}

.submit-btn:disabled {
  background: #ccc;
}

.form-header p {
  font-family: Lato;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  font-style: italic;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.form-body {
  align-items: center;
}

.input-field {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.input-field:nth-last-child(2) {
  margin: 35px 0;
}

/* input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
} */

label {
  margin-bottom: 7px;
}

.password-field {
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 0 13px 0 0;
  max-width: 397px;
  background: rgb(255, 255, 255);
}

.password-box input {
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
}

.password-field:focus-within {
  border: 1px solid #7557d3;
  background: rgb(255, 255, 255);
}

.email-box:focus-within {
  border: 1px solid #7557d3;
  background: rgb(255, 255, 255);
}

.fa-eye,
.fa-eye-slash {
  font-size: 13px;
  color: #b8b8b9;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.email-box {
  width: 397px;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  resize: vertical;
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  outline: none;
}

.password-box {
  width: 397px;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  resize: vertical;
  border-radius: 4px;
  border: none;
  outline: none;
}

.submit-btn {
  width: 393px;
  height: 50px;
  color: #fff;
  background: #7557d3;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
}

.bottom-text {
  width: 390px;
  text-align: center;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  font-style: italic;
}

.bottom-text span {
  text-decoration: none;
  color: #4f4f4f;
}

.bottom-text,
a {
  font-size: 16px;
}

#loader {
  position: absolute;
  z-index: 1;
  margin: -2px 0 0 10px;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #666666;
  width: 14px;
  height: 14px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

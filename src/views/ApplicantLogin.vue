<template>
  <section>
    <div class="form-header">
      <img src="../assets/Enyata-logo.png" alt="Enyata" />
      <p>Applicant Log In</p>
    </div>

    <form>
      <div class="form-body">
        <div class="input-field">
          <label for="email">Email</label>
          <input class="email-box" type="email" v-model="user.email" required />
        </div>

        <div class="input-field">
          <label for="password">Password</label>
          <div class="password-field">
            <input
              class="password-box"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              v-model="user.password"
            /><span @click="togglePassword" v-show="showPassword">
              <i class="fas fa-eye"></i>
            </span>
            <span @click="togglePassword" v-show="!showPassword">
              <i class="fas fa-eye-slash"></i>
            </span>
          </div>
        </div>
      </div>
      <button
        class="submit-btn"
        @click.prevent="formSubmit"
        type="submit"
        :disabled="!isDisabled"
      >
        Submit
      </button>
      <div class="bottom-text">
        <span class="ft_txt"
          >Don’t have an account yet?<a href="#" target="_blank">
            Sign Up</a
          ></span
        >
        <span class="ft_txt"
          ><a class="ft_link" href="#" target="_blank"
            >Forgot Password?</a
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
      inputType: "password",
      showPassword: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
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
  },
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
  margin: 20px 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

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
  margin-top: 20px;
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

</style>

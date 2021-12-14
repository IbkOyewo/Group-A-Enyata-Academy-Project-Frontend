<template>
  <div class="form">
    <form class="needs-validation" novalidate>
      <div class="form-input">
        <div class="input">
          <label for="validationCustom01" class="form-label"> First Name</label>
          <input
            type="text"
            v-validate="{ required: true }"
            name="first name"
            v-model="formData.firstName"
          />
          <span class="form-error">{{ errors.first("first name") }}</span>
        </div>
        <div class="input">
          <label class="label-right"> Last Name</label>
          <input
            v-validate="{ required: true }"
            name="last name"
            class="right"
            type="text"
            v-model="formData.lastName"
          />
          <span class="form-error right-error">{{
            errors.first("last name")
          }}</span>
        </div>
      </div>
      <div class="form-input">
        <div class="input">
          <label> Email Address</label>
          <input
            type="email"
            v-validate="'required|email'"
            name="email"
            v-model="formData.email"
          />
          <span class="form-error">{{ errors.first("email") }}</span>
        </div>
        <div class="input">
          <label class="label-right"> Phone Number</label>
          <input
            class="right"
            type="text"
            v-validate="{ required: true, regex: /^\+?(?:[0-9]+)$/ }"
            name="phone number"
            v-model="formData.phoneNumber"
          />
          <span class="form-error right-error">{{
            errors.first("phone number")
          }}</span>
        </div>
      </div>
      <div class="form-input">
        <div class="input">
          <label for>Password</label>
          <div class="password-field">
            <input
              class="password"
              name="password"
              v-validate="'required'"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              ref="password"
            />
            <span @click="togglePassword" v-show="showPassword">
              <i class="fas fa-eye mr-5" aria-hidden="true"></i>
            </span>
            <span @click="togglePassword" v-show="!showPassword">
              <i class="fa fa-eye-slash mr-5" aria-hidden="true"> </i>
            </span>
          </div>
          <span class="form-error">{{ errors.first("password") }}</span>
        </div>

        <div class="input">
          <label for>Confirm Password</label>
          <div class="password-field">
            <input
              class="password"
              name="confirm password"
              v-validate="'required|confirmed:password'"
              v-model="formData.cpassword"
              :type="showCpassword ? 'text' : 'password'"
            />
            <span @click="toggleCpassword" v-show="showCpassword">
              <i class="fas fa-eye mr-5" aria-hidden="true"></i>
            </span>
            <span @click="toggleCpassword" v-show="!showCpassword">
              <i class="fa fa-eye-slash mr-5" aria-hidden="true"> </i>
            </span>
          </div>
          <span class="form-error">{{ errors.first("confirm password") }}</span>
        </div>
      </div>
      <div class="button">
        <button type="submit" @click.prevent="signup" :disabled="!isComplete">
          Sign up
        </button>
      </div>
      <div class="signin">
        <p>
          Already have an account?<router-link :to="{ name: 'applicantLogin' }"
            >Sign in</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        cpassword: "",
      },
      showPassword: false,
      showCpassword: false,
    };
  },

  computed: {
    isComplete() {
      return (
        this.formData.firstName != "" &&
        this.formData.lastName != "" &&
        this.formData.email != "" &&
        this.formData.phoneNumber != "" &&
        this.formData.password != "" &&
        this.formData.cpassword != ""
      );
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
    toggleCpassword() {
      this.showCpassword = !this.showCpassword;
    },

    signup: async function () {
      try {
        let res = await this.$store.dispatch("signup", this.formData);
        if (res.status === 201) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "Registration successful",
          });
          this.$router.push("/login");
        }
      } catch (error) {
        await this.$dtoast.pop({
          preset: "error",
          color: "white",
          heading: "Error",
          content: "User already exists",
        });
      }
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 700px;
  margin: auto;
  color: #2b3c4e;
}
input.right {
  margin-left: 40px;
}

.form-error {
  color: red;
  margin-top: 6%;
  position: absolute;
  font-size: 14px;
}
.form-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.label-right {
  margin-left: 40px;
}
.right-error {
  margin-left: 40px;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input:nth-last-child(2) {
  margin: 20px 0;
}

.password-field {
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 0 13px 0 0;
  max-width: 300px;
  background: rgb(255, 255, 255);
}

.password {
  border: none !important;
  outline: none;
}

.password-field:focus-within {
  border: 2px solid #171718;
  background: rgb(255, 255, 255);
}

.signin {
  text-align: center;
}

.fa-eye,
.fa-eye-slash {
  font-size: 13px;
  color: #b8b8b9;
  position: relative;
  z-index: 2;
  cursor: pointer;
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

.input label,
p {
  font-family: "Lato", sans-serif;
  margin-bottom: 12px;
}
.input input {
  padding: 9px 15px;
  width: 300px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
}

.main {
  max-width: 700px;
  margin: auto;
}
div.button {
  padding-left: 170px;
}
button {
  background: #7557d3;
  margin: 15px 0;
  color: #fff;
  width: 65%;
  padding: 13px;
  border: none;
  border-radius: 4px;
}
button:disabled {
  background: #ccc;
}
</style>

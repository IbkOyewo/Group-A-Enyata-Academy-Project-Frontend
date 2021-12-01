<template>
  <div class="form">
    <form>
      <div class="form-input">
        <div class="input">
          <label> First Name</label>
          <input type="text" v-model="firstname" />
        </div>
        <div class="input">
          <label> Last Name</label>
          <input class="right" type="text" v-model="lastname" />
        </div>
      </div>
      <div class="form-input">
        <div class="input">
          <label> Email Address</label>
          <input type="email" v-model="email" />
        </div>
        <div class="input">
          <label> Phone Number</label>
          <input class="right" type="text" v-model="phone" />
        </div>
      </div>
      <div class="form-input">
        <div class="input">
          <label> Password</label>
          <input type="password" v-model="password" />
        </div>
        <div class="input">
          <label> Confirm Password</label>
          <input class="right" type="password" v-model="cpassword" />
        </div>
      </div>
      <div class="button">
        <button @click.prevent="submit" type="submit" :disabled="!isComplete">
          Sign up
        </button>
      </div>
      <div class="signin">
        <p>Already have an account?<a href="#">Sign in</a></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    };
  },
  computed: {
    isComplete() {
      return (
        this.firstname != "" &&
        this.lastname != "" &&
        this.email != "" &&
        this.phone != "" &&
        this.password != "" &&
        this.cpassword != ""
      );
    },
  },
  methods: {
    submit() {
      console.log("HELLO");
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
.form-input {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.signin {
  text-align: center;
}
.input label,
p {
  font-family: "Lato", sans-serif;
  margin-left: 25px;
}
.input input {
  margin: 16px 25px;
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

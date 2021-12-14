<template>
  <div class="main">
    <h2>Forgot Password</h2>
    <p>Please select option to send link to reset password</p>
    <ForgotPassword
      :class="border"
      heading="Reset via Email"
      paragraph="Reset password link will be send to your registered email address."
    />
    <div>
      <input type="email" placeholder="input email for reset password" v-model="email">
    </div>
    <!-- <ForgotPassword
      :class="borderless"
      heading="Reset via Sms"
      paragraph="Reset password link will be send to your registered phone number."
    /> -->
    <Button @click="submit"  text="Send Link" message="Didn’t receive link?" link="Resend" />
  </div>
</template>

<script>
import ForgotPassword from "@/components/ForgotPassword.vue";
import Button from "@/components/Button.vue";

export default {
  name: "ForgotPasswordPage",
  components: {
    ForgotPassword,
    Button,
  },
  data() {
    return {
      borderless: "no-border",
      border: "border",
      email: ""
    };
  },
    methods:{
      async submit(){
       try {
        let email = this.email;
        let res = await this.$store.dispatch("forgetpassword", { email });
           this.$store.commit("setGetEmail", email)
           if (res.status === 200) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "email sent successful",
          });
        } 
       } catch (error) {
            await this.$dtoast.pop({
          preset: "error",
          color: "white",
          heading: "Error",
          content: "Invalid email. Please try again",
        });
        console.log(error)
       }
      }
  },
};
</script>
<style scoped>
input{
  width: 490px;
  /* height: 40px; */
  padding: 10px 15px;
  border: 1px solid #7557d3;
  outline-color: #7557d3;
}
.main{
    max-width: 700px;
  max-width: 700px;
    margin: auto;
    box-shadow: 5px 5px 20px 0px #e7e1e1;
    text-align: center;
    font-family: 'Lato', sans-serif;
    margin-top: 70px;
    text-align: center;
}
div.forgotPassword.border {
  border: 1px solid #7557d3 !important;
  border-radius: 4px !important;
}
/* .no-border{
  background: red;
}  */
h2 {
  padding: 50px 0 10px 0;
}

p {
  padding-bottom: 20px;
}
</style>

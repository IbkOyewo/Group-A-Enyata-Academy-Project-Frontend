<template>
  <div class="home">
    <h2>Forgot Password</h2>
    <p>Please select option to send link to reset password</p>
      <ForgotPassword :class="border" heading='Reset via Email' paragraph='Reset password link will be send to your registered email address.'/>
    <ForgotPassword :class="borderless" heading='Reset via Sms' paragraph='Reset password link will be send to your registered phone number.'/>
    <Button text="Send Link" message="Didn’t receive link?" link="Resend"/>
  </div>
</template>

<script>
import ForgotPassword from "@/components/ForgotPassword.vue"
import Button from "@/components/Button.vue"

export default {
  name: "Home",
  components: {
    ForgotPassword,
    Button
  },
  data: function () {
       return{
         borderless: 'no-border',
         border: 'border'

      }
  }
};
</script>
<style scoped>
.home{
    max-width: 700px;
    margin: auto;
    box-shadow: 5px 5px 20px 0px #e7e1e1;
    height: 95vh;
    font-family: 'Lato', sans-serif;
    margin-top: 40px;
    margin-bottom: 20px;
}
div.forgotPassword.border{
    border: 1px solid #7557D3 !important;
    border-radius: 4px !important;
}
/* .no-border{
  background: red;
}  */
h2{
    padding: 50px 0 10px 0 ;
}

p{
  padding-bottom: 20px;
}
</style>

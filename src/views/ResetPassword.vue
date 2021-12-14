<template>
  <div class="mainDiv">
  <div class="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">   
      <h2 class="formTitle">
        Reset Password
      </h2>
      
    <div class="inputDiv">
      <label class="inputLabel" for="password">New Password</label>
      <input type="password" v-model.trim="pass1" id="password" name="password" required>
    </div>
      
    <div class="inputDiv">
      <label class="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" v-model.trim="pass2" id="confirmPassword" name="confirmPassword">
    </div>
    
    <div class="buttonWrapper">
      <button type="submit" id="submitButton" @click.prevent="resetPassword()" class="submitButton pure-button pure-button-primary">
        <span>Continue</span>
      </button>
    </div>
      
  </form>
  </div>
</div>
</template>

<script>
export default {
name: "resetPassword",
data(){
  return {
      pass1:"",
      pass2:"",
      email: ""
  }
},
  methods: {
    async resetPassword() {
      try {
        let pass1 = this.pass1;
        let pass2 = this.pass2;
        // console.log(this.$route.query.verification)
        // console.log("====>",email)
        if (pass1 === pass2) {
          await this.$dtoast.pop({
            preset: "success",
            color: "white",
            heading: "Success",
            content: "password change successfully",
          });
          const userEmail = this.$store.state.getEmail
          console.log("===>",userEmail)
           this.$store.dispatch("forgetpassword", {pass1, userEmail });
          this.$router.push("/login");
        } else{
          await this.$dtoast.pop({
          preset: "error",
          color: "white",
          heading: "Error",
          content: "password dose not match",
        });
        }
      } catch (error) {
       console.log(error) 
      }
    },
  },
   beforeMount(){
     const {verification, email} = this.$route.query
     this.$store.commit("setGetEmail", email)
    console.log(email);
  }
}
</script>

<style scoped>
.mainDiv {
    display: flex;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    background-color: #f9f9f9;
    font-family: 'lato', sans-serif;
    padding-top: 45px;
  }
 .cardStyle {
    width: 600px;
    border-color: white;
    background: #fff;
    padding: 36px 0px 70px 0px;
    border-radius: 4px;
    margin: 30px 0;
    box-shadow: 0px 0 2px 0 rgba(0,0,0,0.25);
  }

.formTitle{
  font-weight: 600;
  margin-top: 20px;
  color: #2B3C4E;
  text-align: center;
}
.inputLabel {
  font-size: 14px;
  color: #4F4F4F;
  margin-bottom: 6px;
  margin-top: 24px;
}
  .inputDiv {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
input {
    width: 379px;
  height: 48px;
  font-size: 16px;
  border-radius: 4px;
  border: solid 1px #4F4F4F;
  padding: 0 11px;
  outline-color:#8570c5;
}
input:disabled {
  cursor: not-allowed;
  border: solid 1px #eee;
}
.buttonWrapper {
  margin-top: 40px;
}
  .submitButton {
    width: 300px;
    height: 50px;
    margin-left: 130px;
    display: block;
    color: #fff;
    background-color: #7557D3;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.035);
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
  }
.submitButton:disabled,
button[disabled] {
  border: 1px solid #cccccc;
  background-color: #cccccc;
  color: #666666;
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
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
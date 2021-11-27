<template>
    <div class='form'>
        <form>
            <div class='form-input'>
                <div class='input'>
                    <label> First Name</label>
                    <input type='text' v-model="firstname"/> 
                </div>
                <div class='input'>
                    <label> Last Name</label>
                    <input type='text' v-model="lastname"/> 
                </div>
            </div>
            <div class='form-input'>
                <div class='input'>
                    <label> Email Address</label>
                    <input type='email' v-model="email"/> 
                </div>
                <div class='input'>
                    <label> Phone Number</label>
                    <input type='text' v-model="phone"/> 
                </div>
            </div>
            <div class='form-input'>
                <div class='input'>
                    <label> Password</label>
                    <input type='password' v-model="password"/> 
                </div>
                <div class='input'>
                    <label> Confirm Password</label>
                    <input type='password' v-model="cpassword"/> 
                </div>
            </div>
            <div class='button'>
                <button @click.prevent="submit" type="submit" :disabled=!isComplete>Sign up</button> 
            </div> 
            <div>
                <p>Already have an account?<a href='#'>Sign in</a></p>
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
        cpassword: ""
    };
  },
  computed: {
       isComplete () {
            return (
                this.firstname != '' &&
                this.lastname != '' &&
                this.email != '' &&
                this.phone != '' &&
                this.password != '' &&
                this.cpassword != ''
            )
        }
},
  methods: {
      submit(){
          console.log("HELLO");
      }
  }
}
</script>

<style scoped>
.form{
    max-width: 700px;
    margin: auto;
    color: #2B3C4E;

}
.form-input{
    display: flex;
    justify-content: space-around;
}
.input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.input label, p {
    font-family: 'Lato', sans-serif;
}
.input input{
    margin: 16px 0;
    padding: 9px;
    width: 280px;
    border: 1.5px solid #BDBDBD;
}
.main{
    max-width: 700px;
    margin: auto;
}
button{
    background: #7557D3;
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
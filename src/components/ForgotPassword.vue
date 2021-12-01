<template>
<div class='forgotPassword'>
    <div class='main'>
        <div class='email'>
           <img alt="email logo" :src=emailLogo />
        </div>
        <div class='text'>
            <h4>{{ heading }}</h4>
            <p>{{ paragraph }}</p>
        </div>
        <div class='check'>
           <img alt="check logo" :src=checkLogo />
        </div>
        
  </div>
</div>
</template>

<script>
export default {
    name: "ForgotPassword",
    props: {
    heading: String,
    paragraph: String,
  },
  data: function () {
       return{
          emailLogo: require("../assets/email.png"),
          checkLogo: require("../assets/check-mark.png")

      }
  }
}
</script>

<style scoped>
.forgotPassword{
    max-width: 490px;
    margin: 20px auto;
    color: #B1B1B1;
    border: 1px solid #7557D3;
}

.no-border{
    border: none;
}
.main{
    background: #fff;
    display: flex;
    align-items: stretch;
    box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
    padding: 20px;
    justify-content: center;
}
h4{
    color: #7557D3;
}
.text{
    text-align: left;
}
.check img{
    padding: 5px;
    border-radius: 100%;
    background: #7557D3;
    margin-top: 34px;
    margin-right: 20px
}
.email img{
    border-radius: 100%;
    background: rgba(117, 87, 211, 0.1);
    padding: 16px;
    margin-right: 28px;
    margin-top: 19px;
}
</style>
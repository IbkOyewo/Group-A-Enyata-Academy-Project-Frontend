<template>
  <div class="main">
    <img alt="Enyata logo" src="../assets/logo.png" />
    <h3>Applicant Sign Up</h3>
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "signup",
  components: {
    Form,
  },
};
</script>
<style scoped>
.home{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}


h3{
  font-style: italic;
  margin-bottom: 55px;
  text-align: center;
  padding-top: 30px;
  font-family: 'Lato', sans-serif;
  text-align: center;
}
img {
  margin: 30px auto;
  text-align: center;
}
</style>
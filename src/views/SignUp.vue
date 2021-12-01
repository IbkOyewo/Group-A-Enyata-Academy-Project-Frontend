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
  name: "Sign up",
  components: {
    Form,
  },
};
</script>
<style scoped>
.main {
  margin-top: 30px;
  text-align: center;
}
h3 {
  font-style: italic;
  margin-bottom: 55px;
  text-align: center;
  padding-top: 30px;
  font-family: "Lato", sans-serif;
}
img {
  margin: 30px auto;
  text-align: center;
}
</style>
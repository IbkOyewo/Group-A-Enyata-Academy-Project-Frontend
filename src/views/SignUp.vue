<template>
  <div class="home">
    <img alt="Enyata logo" src="../assets/logo.png" />
    <h3>Applicant Sign Up</h3>
    <Form/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue"
export default {
  name: "Home",
  components: {
    Form
  }
};
</script>
<style scoped>
.home{
margin-top: 30px;
}
h3{
  font-style: italic;
  margin-bottom: 55px;
  padding-top: 30px;
  font-family: 'Lato', sans-serif;
}
img{
  margin:30px 20px 0;
}
</style>
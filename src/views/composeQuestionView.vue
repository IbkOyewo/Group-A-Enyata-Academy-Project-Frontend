<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar />
    </div>
    <div class="container col-8 pt-5">
      <ComposeQuestion />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import  ComposeQuestion from "@/components/ComposeQuestion.vue";
export default {
  name: "composeQues",
  components: {
    AdminSidebar,
    ComposeQuestion
  }
};
</script>

<style scoped>
/* .main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
} */
</style>

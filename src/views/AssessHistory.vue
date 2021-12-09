<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar />
    </div>
    <div class="container my-5 col-9">
      <AssessmentHistory />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import  AssessmentHistory from "@/components/AssessmentHistory.vue";
export default {
  name: "AssessHistory",
  components: {
    AdminSidebar,
    AssessmentHistory
  },
  
  
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>

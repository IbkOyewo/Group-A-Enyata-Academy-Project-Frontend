<template>
  <div>
    <div>
      <AdminSidebar />
    </div>
    <div class="main">
      <AssessmentHistory />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebars.vue";
import  AssessmentHistory from "@/components/AssessmentHistory.vue";
export default {
  name: "AssessHistory",
  components: {
    AdminSidebar,
    AssessmentHistory
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>

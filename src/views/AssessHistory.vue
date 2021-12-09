<template>
  <div>
    <div>
      <AdminSidebars />
    </div>
    <div class="main">
      <AssessmentHistory />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AdminSidebars from "@/components/AdminSidebars.vue";
import  AssessmentHistory from "@/components/AssessmentHistory.vue";
export default {
  name: "composeQues",
  components: {
    AdminSidebars,
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

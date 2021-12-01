<template>
  <div>
    <div>
      <AdminSidebars />
    </div>
    <div class="main">
      <composeQuestion />
    </div>
  </div>
</template>

<script>
import AdminSidebars from "@/components/AdminSidebars.vue";
import  ComposeQuestion from "@/components/ComposeQuestion.vue";
export default {
  name: "composeQues",
  components: {
    AdminSidebars,
    ComposeQuestion
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>

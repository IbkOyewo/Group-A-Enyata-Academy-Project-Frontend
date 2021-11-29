<template>
  <div>
    <div>
      <AdminSideBar />
    </div>
    <div class="main">
      <composeQuestion />
    </div>
  </div>
</template>

<script>
import AdminSideBar from "@/components/AdminSideBar.vue";
import  ComposeQuestion from "@/components/ComposeQuestion.vue";
export default {
  name: "home",
  components: {
    AdminSideBar,
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

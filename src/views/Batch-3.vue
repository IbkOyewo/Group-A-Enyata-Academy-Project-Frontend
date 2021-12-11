<template>
  <div>
    <div>
      <AdminSidebar />
    </div>
    <div class="main">
      <Batch3 />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebars.vue";
import  Batch3 from "@/components/Batch3.vue";
export default {
  name: "Batch-3",
  components: {
    AdminSidebar,
    Batch3
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>

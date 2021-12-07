<template>
  <div>
    <div>
      <AdminSidebars />
    </div>
    <div class="main">
      <Batch3 />
    </div>
  </div>
</template>

<script>
import AdminSidebars from "@/components/AdminSidebars.vue";
import  Batch3 from "@/components/Batch3.vue";
export default {
  name: "composeQues",
  components: {
    AdminSidebars,
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

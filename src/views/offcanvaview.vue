<template>
  <div>
    <div>
      <offcanva />
    </div>
    
  </div>
</template>

<script>
import  offcanva from "@/components/offcanva.vue";
export default {
  name: "composeQues",
  components: {
    offcanva,
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>

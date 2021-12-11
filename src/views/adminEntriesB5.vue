<template>
  <div class="all">
    <div>
      <AdminSidebar />
    </div>
    <div class="main">
      <AdminEntriesB5/>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebars.vue";
import AdminEntriesB5 from "@/components/AdminEntriesB5.vue";

export default {
  name: "adminEntryModal",
  components: {
    AdminSidebar,
    AdminEntriesB5,
  },
};
</script>

<style scoped>
body {
  background: rgba(0, 0, 0, 0.2);
  background-image: none;
  backdrop-filter: blur(30px);
}
.main {
  margin-left: 270px;
  padding: 75px 70px 50px 70px;
}
/* html {
  background: rgba(3, 17, 49, 0.2) !important;
backdrop-filter: blur(8px);
} */

.sidebar[data-v-355a12c6] {
    width: 292px;
    box-shadow: 0px 10px 20px rgb(0 0 0 / 25%);
    background: #ffffff;
    min-height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    background: rgba(3, 17, 49, 0.2);
    backdrop-filter: blur(10px);
}

</style>

<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  color: #2b3c4e;
}
* {
  margin: 0;
  padding: 0;
}
</style>

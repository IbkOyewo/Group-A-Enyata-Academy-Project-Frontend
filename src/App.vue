<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login"></router-link>
      <router-link to="/forgot-password"></router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  text-align: center;
  background: #fff;
}
</style>

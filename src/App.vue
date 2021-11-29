<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background-image: url("./assets/Background.png");
  // background-repeat: no-repeat;
}

body {
  background-image: url("./assets/Background.png");
  background-repeat: no-repeat;
  background-position: right top; 
}


@import'~bootstrap/dist/css/bootstrap.css'
</style>

<template>
  <div class="sidebar">
    <div class="purple-box">
      <img
        src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F186ee02a-6a58-4f08-ac47-d1a5d1a07934.image.png?v=1637727615361"
      />
      <h2>Jane Doe</h2>
      <i>doe@enyata.com</i>
    </div>
    <div class="white-box">
      <router-link to="/dashboard" class="icons">
        <img
          src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F7c6fdc3a-b0d7-4bfd-a533-2650a0de3e71.image.png?v=1637729448987"
          alt=""
        />
        <p>Dashboard</p>
      </router-link>
      <router-link to="/assessment" class="icons active">
        <img
          src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F8ea51fb5-5c1e-4f7a-84aa-f6cf1fb5e458.image.png?v=1637729495003"
          alt=""
        />
        <p>Assessment</p>
      </router-link><router-link to="/assessment" class="icons active">
        <img
          src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F8ea51fb5-5c1e-4f7a-84aa-f6cf1fb5e458.image.png?v=1637729495003"
          alt=""
        />
        <p>Assessment</p>
      </router-link>
      <router-link to="/assessment" class="icons active">
        <img
          src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F8ea51fb5-5c1e-4f7a-84aa-f6cf1fb5e458.image.png?v=1637729495003"
          alt=""
        />
        <p>Assessment</p>
      </router-link>
      <div class="icons">
        <img
          src="https://cdn.glitch.me/c20ca04d-8917-46db-b51d-424d643431c8%2F8db1a278-72a9-4356-a85f-af5ef83e9181.image.png?v=1637729509908"
          alt=""
        />
        <p>Log Out</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.purple-box {
  background: #7557d3;
  color: #ffffff;
  text-align: center;
  padding: 75px 100px 38px 82px;
}
.purple-box:hover{
      background-color: #6e5aac ;

}
.sidebar {
  width: 292px;
  height: 100vh;
  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
.icons {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 30px 42px;
  color: #2b3c4e;
}
a{
    text-decoration: none;
}
.white-box {
  /* padding: 42px; */
}
.active {
  border-left: 4px solid #7557d3;
  font-weight: bold;
}
</style>

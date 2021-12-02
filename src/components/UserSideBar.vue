<template>
  <div class="sidebar">
    <div class="user-image">
      <div class="">
        <img src="" class="logo" />
      </div>
      <form class="fileup">
        <div class="upload-btn-wrapper">
          <button class="btns">
            <strong><i class="fa fa-plus" aria-hidden="true"></i></strong> 
          </button>
          <input type="file" name="file" ref="file" @change="handleFileUpload"/>
        </div>
         <button type="submit" class="text-white p-2 btn btn-white">add profile picture</button>
         
      </form>

      <h1 class="user-name">Ibukun Oyewo</h1>
      <p class="user-email">email@mail.com</p>
    </div>

    <div class="sidebar-icon">
      <div class="container">
          <i class="fa fa-dashboard" aria-hidden="true"></i>
          <span class="mx-3">Dashboard</span>
      </div>
      <div class="container">
        
          <i class="fa fa-file" aria-hidden="true"></i>
          <span class="mx-3">Assesment</span>
      </div>

      <div class="container">
        <button class="logout">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span class="mx-3">Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSideBar",
}
</script>

<style scoped>
 body {
  background-image: none;
  }
.tests {
  color: #7557D3;
;
}
a.router-link-exact-active {
  color: #42b983;
}
.logout {
  background: #ffff;
  border: none;
}

.sidebar {
  width: 292px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  min-height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
}
.user-image {
  width: 100%;
  height: 255px;
  left: 0px;
  top: 0px;
  background: #7557D3;
;
  display: inline-block;
  text-align: center;
  padding-top: 50px;
}
.profile {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: auto;
}
.user-name {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  margin-top: 20px;
}
.user-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
}
.sidebar-icon {
  padding-top: 50px;
}
.sidebar-icon > div {
  height: 50px;
  width: 100%;
}
.icon {
  margin-right: 25px;
}
.sidebar-icon > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 18px 35px 12px 35px;
  text-align: left;
}
.sidebar-icon > div.active > p {
  font-weight: bold;
  color: #2b3c4e;
  border-left: 4px solid #31d283;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btns {
  border: 1.55px dashed #2b3c4e;
  box-sizing: border-box;
  /* color: #2b3c4e; */
  padding: 6px 18px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  /* font-weight: bold; */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.logo {
  max-width: 100px;
  max-height: 85px;
  border-radius: 50%;
}
</style>

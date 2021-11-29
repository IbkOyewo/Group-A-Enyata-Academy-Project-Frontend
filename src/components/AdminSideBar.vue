<template>
  <div class="sidebar">
    <div class="applicant-image">
      <div class="profile">
        <img src="../assets/Ellipse 2.png" class="logo" />
      </div>
      <h1 class="user-name">Josh Doe</h1>
      <p class="user-email">j.doe@enyata.com</p>
    </div>

    <div class="sidebar-icon">
      <div class="active">
        <p><img src="../assets/dashboard-icon.png" class="icon" />Dashboard</p>
      </div>
      <div>
        <p>
          <img src="../assets/create-assessment.png" class="icon" />Create
          Application
        </p>
      </div>
      <div>
        <p>
          <img src="../assets/app-entry.png" class="icon" />Application Entries
        </p>
      </div>
      <div>
        <p>
          <img src="../assets/compose-ass.png" class="icon" />Compose Assessment
        </p>
      </div>
      <div>
        <p>
          <img src="../assets/asses-history.png" class="icon" />Assessment
          History
        </p>
      </div>
      <div>
        <p><img src="../assets/result.png" class="icon" />Results</p>
      </div>
      <div class="setting-icon">
        <p><img src="../assets/Setting.png" class="icon" />Settings</p>
      </div>
      <div class="logout-icon">
        <p><img src="../assets/logout-icon.png" class="icon" />Logout</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 292px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  min-height: 100%;
  left: 0px;
  top: 0px;
  position:fixed;
}
.applicant-image {
  width: 292px;
  height: 235px;
  left: 0px;
  top: 0px;
  background: #7557d3;
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
  color: #ffffff;
  margin-top: 20px;
}

.setting-icon {
     margin-bottom: 60px;
}

.user-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.sidebar-icon {
  padding-top: 20px;
  margin-bottom: 60px;
}
.sidebar-icon > div {
  height: 38px;
  width: 100%;
  cursor: pointer;
}
.icon {
  margin-right: 25px;
}
.sidebar-icon > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #2b3c4e;
  padding: 18px 35px 12px 35px;
}
.sidebar-icon > div.active > p {
  font-weight: bold;
  color: #2b3c4e;
  border-left: 4px solid #31d283;
}
</style>

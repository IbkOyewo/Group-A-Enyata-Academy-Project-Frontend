<template>
  <div class="container">
    <div>
      <p id="top-text">Profiles and Settings</p>
      <p id="top-text-desc">
        Helps you set admin profile and give other users permissions
      </p>
    </div>
    <div>
      <div class="admin-setting">
        <p id="admin">Admin Profile</p>
        <p id="timer">Timer Settings</p>
      </div>

      <div class="profile-edit">
        <p id="profile">Profiles Settings</p>
        <button id="edit">Edit</button>
      </div>
      <hr />

      <div class="account">
        <img src="../assets/account-img.svg" alt="" />
        <p id="upload-image">Upload new image</p>
        <span id="remove"
          ><img id="remove-img" src="../assets/remove.png" alt="" />
          Remove</span
        >
      </div>

      <form>
        <div>
          <label for="name">Name</label><br />
          <input type="text" name="name" />
        </div>
        <div>
          <label for="email">Email</label><br />
          <input type="email" name="email" />
        </div>
        <div>
          <label for="phone">Phone number</label><br />
          <input type="num" name="phone" />
        </div>
        <div>
          <label for="country">Country</label><br />
          <input type="text" name="country" />
        </div>
        <div class="grid-2">
          <label for="address">Address</label><br />
          <input type="text" name="address" id="grid-2" />
        </div>
      </form>
      <div class="button"><button>Save</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSetting",
};
</script>

<style>
.container {
  padding: 100px 40px;
}
#top-text {
  font-size: 43.56px;
}
#top-text-desc {
  font-size: 12px;
  padding: 5px 0;
}
.admin-setting {
  padding: 4em 0 2em;
  color: #333758;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  align-items: center;
}
#admin {
  background-color: #efebfa;
  padding: 20px 20px;
}
hr {
  background-color: #f2f2f2;
  border: none;
  height: 1px;
}
#profile {
  color: #4a4a4a;
  font-size: 1em;
  font-weight: bold;
}
.profile-edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#edit {
  border: 2px solid #7557d3;
  border-radius: 3px;
  color: #7557d3;
  background-color: #fff;
  padding: 10px 50px;
  margin-bottom: 10px;
}
.account {
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 40px 0 30px;
}
#upload-image{
    color: #333758;
    border-bottom: 1px solid ;
}
#remove-img {
  width: 8px;
  height: 8px;
}
#remove {
  color: #ff5722;
  font-weight: bold;
}
form {
  display: grid;
  grid-template-columns: 14em 14em 14em;
  width: 100%;
  color: #333758;
  gap: 20px;
  font-size: 15px;
}
input {
  background-color: #efebfa;
  border: none;
  padding: 10px;
}
.grid-2 {
  width: 186%;
}
#grid-2 {
  grid-column-start: 2;
  grid-column-end: -1;
  width: 100%;
}
.button{
    align-items: center;
    justify-content: center;
    padding-top: 40px ;
    display: flex;
}
button {
  background-color: #7557d3;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 40px;
}
</style>

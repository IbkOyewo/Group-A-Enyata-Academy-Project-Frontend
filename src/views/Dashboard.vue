<template>
  <div class="page">
    <div class="top-text">
      <div class="top-text1">Dashboard</div>
      <div class="top-text2">
        <i
          >Your appliation is currently being reviewed, you will be notified if
          successful</i
        >
      </div>
    </div>
    <div class="status-main">
      <div class="status-date">
        <div class="date-text">Date of Application</div>
        <div class="status-display">09.09.19</div>
        <hr id="blue" />
        <div class="date-text">4 days since applied</div>
      </div>
      <div class="status-msg">
        <div class="date-text">Application Status</div>
        <div class="status-display">Pending</div>
        <hr id="orange" />
        <div class="date-text">We will get back to you</div>
      </div>
    </div>
    <div class="card-section">
      <div class="card">
        <h3 class="card-text">Updates</h3>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="card">
            <h3 class="card-text">Take Assessment</h3>
        <div class="content">
        <p class="card-text middle">
          We have 4 days left until the next assessment <br />Watch this space
        </p>

        <button>Take Assessment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>

<style scoped>
.page {
  width: 100%;
  padding-left: 40px;
}
.top-text {
  color: #2b3c4e;
  padding: 40px 0;
  margin-top: 50px;
}
.top-text1 {
  font-size: 43.56px;
  padding-bottom: 5px;
}
.status-main {
  color: #2b3c4e;
  /* margin: 20px; */
}
hr {
  display: block;
  border-style: inset;
  border-width: 1px;
  border-radius: 2px;
  width: 150px;
}
#blue {
  border: solid rgb(69, 69, 224);
}
#orange {
  border: solid orange;
}
.status-main {
  /* width: 100%; */
  display: flex;
}
.status-date {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
}
.status-msg {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 70px;
}
.date-text {
  font-size: 14px;
  color: #4f4f4f;
}
.status-display {
  font-size: 48px;
}
.card-section {
  display: flex;
  column-gap: 50px;
  margin-top: 50px;
}
.card {
  border-radius: 10px;
  border: 1px solid #ececf9;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 482px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  

}
.line{
    border-bottom: 2px solid #CECECE;
    padding: 20px 0;
    width: 90%;
}
.card-text{
   font-weight: bold;
   color: #2b3c4e;
   font-size: 16px;
}
.middle, button {
    color: #4F4F4F;
}
button{
    background-color: #B1B1B1;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
}
.content{
    text-align: center;
    
}
.text {
  padding: 10px;
}
</style>

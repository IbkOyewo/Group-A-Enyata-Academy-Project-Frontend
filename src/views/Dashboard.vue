<template>
  <div class="row">
<div class="col-3">
            <applicantSidebar/>
        </div>
    <div class="container my-5 col-9">
    <div class="top-text">
      <div class="top-text1">Dashboard</div>
      <div class="top-text2">
        <i>Your application is currently being reviewed, you will be notified if
          successful</i>
      </div>
    </div>
    <div class="status-main">
      <div class="status-date">
        <div class="date-text">Date of Application</div>
        <div class="status-display">{{Profile[0].created_at}}</div>
        <hr id="blue" />
        <div class="date-text">1 days since applied</div>
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

        <router-link :to="{name: 'takeAssessment'}"><button>Take Assessment</button></router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
export default {
  name: "dashboard",
  components: {
    applicantSidebar
  },
 data() {
    return {
      Profile: [],
      file: '',
      message: ""
    };
  },
  created: async function () {
    let res = await this.$store.dispatch("getDashboard")
    let obj = res.data.data
    this.Profile.push(obj)
    const date =new Date(this.Profile[0].created_at) 
    const newDate = date.toLocaleDateString()
    this.Profile[0].created_at = newDate
  }
};
</script>

<style scoped>
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
  border: solid #006DF0;
}
#orange {
  border: solid #F09000;
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

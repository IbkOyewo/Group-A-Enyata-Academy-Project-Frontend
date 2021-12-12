<template>
  <div class="row">
    <div class="col-3">
      <applicantSidebar/>
    </div>
    <div class="container my-5 col-9 top-view">
      <div>
        <h2>Take Assessment</h2>
        <i> Thank you! </i>
      </div>
      <div class="timer pe-5">
        <p>Timer</p>
        <h6 class="p3">{{timeFinish.mins}}<span>min</span> 0{{timeFinish.secs}}<span>sec</span></h6>
      </div>
    </div>
    <div class="row">
        <div class="col-9 offset-1 d-flex justify-content-around mt-5">
          <div class="row d-flex flex-column align-items-center confetti">
            <img
              src="../assets/confetti.svg"
              alt=""
              class="mb-4" 
            />
            <p class="text-center mb-3">
              We have received your assessment test, we will get back to you
              soon.
              <br />
              Best of luck.
            </p>
           <router-link :to="{name: 'home'}" style="padding-left: 189px;" class="tests"> <b-button type="submit" class="text-white button"> Home </b-button></router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
export default {
  name: "success",
  data(){
    return{
      timeFinish: {}
    }
  },
  components: {
       applicantSidebar
  },
  beforeMount(){
    console.log(this.$store.state.timeFinish)
    this.timeFinish = this.$store.state.timeFinish
  }
};
</script>

<style scoped> 
.main-view {
  width: 100%;
  padding: 107px 100px 0px 47px;
}
.top-view {
  display: flex;
  justify-content: space-between;
}

.confetti{
  margin-left: 320px
}

img.mb-4{
  width:148px;
}
.p3 {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  margin-top: 0;
}
span {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
}

div.timer.pe-5 p{ 
  font-style: normal;
font-weight: normal;
font-size: 14px;
 margin-bottom: 0 !important;
}

h2{
  font-weight: 100px;
}
button {
  background-color: #7557d3;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
  width:40%;
}
button:hover{
  background-color: #6e5aac ;
}
.body-view {
  /* max-width: 524px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 138px;
  justify-content: center;
  gap: 25px;
}
</style>

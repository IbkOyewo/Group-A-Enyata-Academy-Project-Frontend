<template>
  <div>
    <div class="containers">
      <div class="container-side">
        <div class="p-tag">
          <p>Take Assessment</p>
        </div>
        <p class="dot-text">
          Click the submit button to submit assessment, you can go back at any
          time to edit your answers.
        </p>
      </div>
      <div class="right">
        <p>Timer</p>
        <div class="span">
          <div>
            <span class="time">
              {{mins}}
              <span class="minute">mins</span>
            </span>
          </div>
          <div>
            <span class="seconds time">
              0{{secs}}
              <span class="minute">sec</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <div>      
          <h6 class="text-center">Question {{currentQuestion+1}}</h6>
          <h2 class="text-center question_name">{{questions[currentQuestion]["questions"]}}</h2>
         <div class= "d-flex justify-content-center mt-5">
           <div class="mb-5">
              <div  class="align-items-center mb-3">
                <div class="gap-3">
                  <input id="questions[currentQuestion].optiona" type="radio" value="questions[currentQuestion].optiona" v-model="userAnswers[currentQuestion]">
                <label for="questions[currentQuestion].optiona">
                  {{questions[currentQuestion].optiona}}
                  </label>
                </div>
                <div class="gap-3">
                  <input id="questions[currentQuestion].optionb" type="radio" value="questions[currentQuestion].optionb"   v-model="userAnswers[currentQuestion]">
                <label for="questions[currentQuestion].optionb">
                  {{questions[currentQuestion].optionb}}
                  </label>
                </div>
                <div class="gap-3">
                  <input id="questions[currentQuestion].optionc" type="radio" value="questions[currentQuestion].optionc"   v-model="userAnswers[currentQuestion]">
                <label for="questions[currentQuestion].optionc">
                  {{questions[currentQuestion].optionc}}
                  </label>
                </div>
                <div class="gap-3">
                  <input id="questions[currentQuestion].optiond" type="radio" value="questions[currentQuestion].optiond"   v-model="userAnswers[currentQuestion]">
                <label for="questions[currentQuestion].optiond">
                  {{questions[currentQuestion].optiond}}
                  </label>
                </div>
              </div> 
            </div>
         </div>
          
        </div>
    </div>
      <div class="two-buttons">
        <button class="second-button" @click="preQuest">Previous</button>
        <button :disabled="!isDisabled()" @click="submit" :class="btnBg()">Finish</button>
        <button @click="nextQuest" :class="btnNextQuest()">Next</button>
      </div>
  </div>
</template>


<script>
export default {
  name: "QuestionPage",
  data() {
        return {
            mins: 30,
            secs: 0,
             currentQuestion: 0,
             selectedAnswers:{},
            showScore: false,
            score:0,
            btn: "btn",
            btnFinish: "btn-finish",
            btnNext: "second-button",
            noNext: "second-btn-drop",
            countDown : 30,
            timer:null,
            startQuiz: false,
            userAnswers: new Array().fill(""),
            questions:[],
        }
    },
    computed:{
    },
    methods: {
      btnBg(){
        if(this.currentQuestion === 8){
        return this.btnFinish
        } 
          return this.btn
      },
        btnNextQuest(){
        if(this.currentQuestion === 8){
          return this.noNext
          } 
        return this.btnNext
      },
        startTimer(duration) {
            let timer = duration
            setInterval(() => {
                this.mins = parseInt(timer / 60, 10);
                this.secs = parseInt(timer % 60, 10);
                this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
                this.secs = this.secs < 10 ? "0" + this.secs : this.secs;
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        },
         
       
        nextQuest(){
          if(this.currentQuestion === this.questions.length - 1) return 
           this.currentQuestion += 1
        },
        preQuest(){
          if(this.currentQuestion === 0) return 
           this.currentQuestion -= 1
        },
       submit(){
           this.$router.push('/success');
           const timeFinish = {mins:this.mins, secs:this.secs} 
           this.$store.commit("setTimeFinish", timeFinish)
       },
       isDisabled(){
         if(this.currentQuestion === 8) return true
       }
    },
    created(){
       this.$http.get("http://localhost:8082/api/user/take-assessment")
       .then(data => {
         console.log(data.data.data)
          this.questions = data.data.data
         
       })
    },
   mounted() {
        const thirtyMins = 60 * 30
         this.startTimer(thirtyMins)
    },
    watch:{
      userAnswers:{
        handler(userAnswers){
          console.log(userAnswers)
        },
        deep:true
      },
      secs(secs){
        if(Number(secs)===0 && Number(this.mins)===0){
         this.submit()
          clearInterval(this.startTimer())
        }
      }
    }
  } 
</script>

<style scoped>
.gap-3{
  display: flex;
  align-items: baseline;
  margin:5px 0 ;
}
input[type="radio"]{
  width:12px;
  height: 12px;
  background: #7557D3;
}
label{
  font-size: 18px;
}
.question_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
}
.options_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}
li {
  list-style: none;
}
.time {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
.span {
  display: flex;
}
.seconds {
  padding-left: 30px;
}
.minute {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}
.containers {
  display: flex;
  justify-content: space-between;
}
.last-button {
  background: #cecece;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  color: white;
  border: none;
}
.second-button {
  background: #ffffff;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 125px;
  height: 41px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 50px 78px 30px 134px;
}
.second-btn-drop {
  background: #ffffff;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 125px;
  height: 41px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: no-drop;
  margin: 50px 78px 30px 134px;
}
.first-button {
  background: white;
  border-radius: 4px;
  color: black;
  width: 125px;
  height: 41px;
  border: none;
}
.second-button:hover {
  color: white;
  background: #7557D3;
}
.btn {
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: #CECECE;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  margin-top: 130px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  cursor: no-drop;
}
.btn-finish {
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: #7557D3;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  margin-top: 130px;
  font-size: 16px;
  line-height: 19px;
  color: white;
}
.two-buttons {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.dot-text {
  width: 510px;
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  color: #2b3c4e;
  margin-left: 0px;
}
.question-page {
  text-align: center;
}
.list {
  list-style-image: url("../assets/Rectangle.png");
  display: block;
  line-height: 3.333em;
  padding: 0 10px 0 20px;
  text-align: left;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
h2 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}
.container > p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
.right h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
}
.p-tag {
  font-family: Lato;
  font-style: normal;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
</style>
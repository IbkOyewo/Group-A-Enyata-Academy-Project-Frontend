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
          <h6 class="text-center">Question 1</h6>
          <h2 class="text-center question_name">What is the purpose of HDR technology?</h2>
         <div class= "d-flex justify-content-center mt-5">
           <div class="mb-5">
              <div class="d-flex align-items-center mb-3">
                <input type="radio"/>
                <span class="mx-3 options_name"></span>
              </div> 
            </div>
         </div>
          
        </div>
    </div>
      <div class="two-buttons">
        <button class="second-button">Previous</button>
        <button class="btn">Finish</button>
        <button class="second-button">Next</button>
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
            showScore: false,
            score:0,
            countDown : 30,
            timer:null,
            startQuiz: false,



                        questions : [
		{
			questionText: 'Which one is used for two-way binding?',
			answerOptions: [
				{ answerText: 'v-on', isCorrect: false },
                { answerText: 'v-bind', isCorrect: false },
				{ answerText: 'v-model', isCorrect: true },
				{ answerText: 'v-if', isCorrect: false },
                
			
			],
		},
		{
			questionText: 'Who is the creator of vueJS ?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Evan You', isCorrect: true },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Vue is used in the backend. - True or False?',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Which version of Vue is Launched on 2020?',
			answerOptions: [
				{ answerText: 'Vue 2', isCorrect: false },
				{ answerText: 'Vue 1', isCorrect: false },
				{ answerText: 'Vue 4', isCorrect: false },
				{ answerText: 'Vue 3', isCorrect: true },
			],
        },
        {
			questionText: 'Is vue an OpenSource Library?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
        },
        {
			questionText: 'Which of the following is a Full Javascript Frramework',
			answerOptions: [
				{ answerText: 'Vue', isCorrect: false },
				{ answerText: 'node', isCorrect: false },
				{ answerText: 'react', isCorrect: false },
				{ answerText: 'Angular', isCorrect: true },
			],
        },
        {
			questionText: 'Composition API can be used on which version?',
			answerOptions: [
				{ answerText: 'Vue 5', isCorrect: false },
				{ answerText: 'Vue 2 Only', isCorrect: false },
				{ answerText: 'Vue 3 Only', isCorrect: false },
				{ answerText: 'Both Vue 2 and Vue 3', isCorrect: true },
			],
		},
    ],
        }
    },
    methods: {
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
         startQuizFunc(){
            this.startQuiz = true
            this.countDownTimer()
        },
        handleAnswerClick(isCorrect){
            clearTimeout(this.timer);
            let nextQuestion = this.currentQuestion + 1;
            if(isCorrect){
                this.score = this.score + 1;
            }
            if(nextQuestion < this.questions.length){
            this.currentQuestion = nextQuestion;
            // this.$store.state.questionAttended = this.currentQuestion;
            // localStorage.setItem('qattended', this.currentQuestion)
            this.countDown = 30;
            this.countDownTimer();
            }
            else{
                // localStorage.removeItem('qattended')
                this.showScore = true;
                // localStorage.setItem('testComplete',this.showScore)
            }
        }
    },
    mounted() {
        const thirtyMins = 60 * 30

        this.startTimer(thirtyMins)


    }
  } 
</script>

<style scoped>
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
;
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

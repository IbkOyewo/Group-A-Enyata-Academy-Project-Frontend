<template>
  <div>
    <h1 class="compose">Compose Assessment</h1>
    <div class="container">
      <div class="container-side">
        <p>{{question}}/10</p>
        <form>
          <label for="fileUpload" class="form">
            <span class="plus">
              <b style="font-weight: 600">+</b>&nbsp;Choose File
              <input type="file" id="fileUpload" ref="file" @change="handleFile()" />
            </span>
          </label>
        </form>
      </div>
    </div>
    <div class="question-space">
      <h5>Question</h5>
      <input type="text" class="input-"  v-model="questions"/>
    </div>
    <form class="whole-form">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option A</label>
          <input type="text" class="form-control" v-model="optionA" />
        </div>
        <div class="form-group col-md-6">
          <label>Option B</label>
          <input type="text" class="form-control" v-model="optionB" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option C</label>
          <input type="text" class="form-control" v-model="optionC" />
        </div>
        <div class="form-group col-md-6">
          <label>Option D</label>
          <input type="text" class="form-control" v-model="optionD" />
        </div>
      </div>
    </form>
    <div>
      <div class="two-buttons">
        <button class="first-button">Previous</button>
        <button class="second-button" @click="handleSubmit()">Next</button>
      </div>
      <button class="last-button">Finish</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'ComposeQuestion',
  data() {
    return {
      question:1,
      imageUrl: "",
      questions: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: ""
    }; 
  },
  methods: {
    handleFile(){
    this.imageUrl = this.$refs.file.files[0];
  },
  async handleSubmit() {
   await this.$dtoast.pop({
    preset: "success",
    color: "white",
    heading: "compose questions",
    content: "submitted successfully",
  })
      let formData = new FormData();
      formData.append('imageUrl', this.imageUrl);
      formData.append('questions', this.questions);
      formData.append('optionA', this.optionA);
      formData.append('optionB', this.optionB);
      formData.append('optionC', this.optionC);
      formData.append('optionD', this.optionD);
      const data = {}
      formData.forEach((value, key) => (data[key] = value))
      let res = await this.$store.dispatch("composeAssessment", data)
      if (res.status === 201) {
        this.question++;
        this.questions = ''
        this.optionA = '' 
        this.optionB = ''
        this.optionC = '' 
        this.optionD = ''
      } 
    },
  },
  }
</script>

<style scoped>
body {
  font-family: Lato;
  background-image: none;
}

span {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
.question-space {
  margin-top: 40px;
  margin-left: 12px;
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

.form-row {
  display: flex;
  justify-content: space-between;
  width: 950px;
  margin-bottom: 47px;
  margin-left: 12px;
}

.whole-form {
  justify-content: space-between;
}

.last-button {
  margin-left: 350px;
  margin-top: 60px;
  background: #cecece;
  border-radius: 4px;
  width: 150px;
  height: 41px;
  color: white;
  border: none;
}
.second-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
  border: none;
}
.first-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
  border: none;
}
.two-buttons {
  display: flex;
  margin-right: 50px;
  margin-top: 50px;
  justify-content: space-around;
}

.input- {
  width: 855px;
  height: 144px;
}
.container-side {
  margin-top: 90px;
}
.container-side p {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 1px;
}
.span {
  display: flex;
}
.compose {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.right {
  margin-top: 120px;
  margin-left: 150px;
}
.container {
  display: flex;
}
.form {
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  height: 108px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.plus {
  font-size: 17px;
  margin-left: 165px;
  margin-top: 25px;
}

h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
form {
  padding-top: 30px;
}
.text {
  color: #1abc9c;
  font-size: 20px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
#fileUpload {
  visibility: hidden;
  cursor: pointer;
}

.icon {
  margin-right: 15px;
}
.form-control {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 380px;
  margin-top: 5px;
}

</style>

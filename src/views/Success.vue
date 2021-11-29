<template>
  <div class="main-view">
    <div class="top-view">
      <div>
        <h2>Take Assessment</h2>
        <i> Thank you! </i>
      </div>
      <div>
        <p>Timer</p>
        <p>23min 043sec</p>
      </div>
    </div>
    <div class="body-view">
      <img src="../assets/confetti.png" alt="" width="148" />
      <p>
        We have received your assessment test, we will get back to you soon.
        Best of luck
      </p>
      <button>Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
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
h2{
  font-weight: 100px;
}
button {
  background-color: #7557d3;
  color: #ffffff;
  padding: 10px 60px;
  border-radius: 4px;
  border: none;
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
  gap: 25px;
}
</style>

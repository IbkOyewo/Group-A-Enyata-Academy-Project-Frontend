<template>
  <div class="landing-page">
    <nav>
      <div>
        <img src="../assets/Enyata-logo.png" alt="Enyata Logo" />
      </div>

      <ul class="nav-links">
        <li>Home</li>
        <li>Sign in</li>
        <li>Register Now</li>
      </ul>
    </nav>

    <div class="containerOne">
      <div class="text-box">
        <div>
          <h1>
            Ever had a Dream of Becoming a Software <span>Engineer?</span>
          </h1>
        </div>
        <div class="small-text-box">
          <p class="small-text">
            Join enyata academy today and bring your long awaiting dream to reality.
          </p>
        </div>

        <button>Regster Now</button>
      </div>

      <div class="image-box">
        <img src="../assets/box-1.png" alt="Enyata" />
      </div>
    </div>

    <div class="secondContainer">
      <div class="line-box">
        <img src="../assets/Rectangle-1.png" alt="Enyata" />
        <h3>Why us?</h3>
      </div>

      <div class="containerTwo">
        <div class="box-1">
          <h4>Learn from the best</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            amet.
          </p>
        </div>
        <div class="box-2">
          <h4>100% online classes</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            amet.
          </p>
        </div>
        <div class="box-3">
          <h4>Get paid while learning</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            amet.
          </p>
        </div>
        <div class="box-4">
          <h4>Work on real project</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            amet.
          </p>
        </div>
      </div>

      <div class="footer">
        <p>Copyright © Enyata 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  padding-top: 50px;
  margin-left: 136px;
  display: flex;
  justify-content: space-between;
}

body {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-position: right top; 
}

nav img {
  cursor: pointer;
}

.nav-links {
  margin-right: 136px;
  cursor: pointer;
}

.nav-links li {
  border: none;
  padding: 10px;
}

.landing-page{
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-position: right top;
}

.nav-links li:hover {
  padding: 9px;
  color: #7557d3;
  border: 1px solid rgba(117, 87, 211, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
  outline-offset: -2px;
}

.containerOne {
  display: flex;
}

.text-box {
  margin-left: 136px;
  margin-top: 187px;
  height: 173.32142639160156px;
  width: 633px;
  left: 136px;
  top: 305px;
}

h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 40.9082px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: #211f26;
}

span {
  color: #7557d3;
  font-weight: bold;
  font-size: 40.9082px;
  line-height: 57px;
  letter-spacing: 0.035em;
}

.small-text {
  margin-top: 23.68px;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
}

.small-text-box {
  height: 67px;
  width: 508px;
  left: 136px;
  top: 502px;
  padding-right: 50px;
}

.image-box {
  margin-right: 153.81px;
  margin-top: 94px;
}

.text-box button {
  margin-top: 32px;
  width: 152px;
  height: 48px;
  left: 136px;
  top: 601px;
  background: #7557d3;
  border-radius: 2px;
  color: white;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;
}

.text-box button:hover {
  margin-top: 32px;
  width: 152px;
  height: 48px;
  left: 136px;
  top: 601px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #7557d3;
  border-radius: 2px;
  color: #7557d3;
  background: white;
}

.line-box {
  display: flex;
  margin-left: 136px;
}

.line-box img {
  width: 34px;
  height: 2px;
  left: 136px;
  top: 845px;
  margin-top: 151px;
  margin-right: 16px;
  background: #fdc840;
  border-radius: 2px;
}

.line-box h3 {
  margin-top: 134px;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
}

.containerTwo {
  display: flex;
  margin-left: 136px;
  margin-right: 136px;
  margin-top: 40px;
}

.containerTwo h4 {
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
}

.containerTwo p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
}

.box-1 {
  background: rgba(117, 87, 211, 0.1);
  padding: 24px 26px 34px 24px;
}

.box-2 {
  padding: 24px 26px 34px 24px;
}

.box-3 {
  background: rgba(117, 87, 211, 0.1);
  padding: 24px 26px 34px 24px;
}

.box-4 {
  padding: 24px 26px 34px 24px;
}

.footer {
  width: 100%;
  height: 170px;
  color: white;
  text-align: center;
  background: #7557d3;
}

.footer p {
  align-items: center;
  padding: 80px;
  padding-bottom: 0;
}

li {
  display: inline-block;
  margin: 0 16px;
}

// @media all and (max-width: 480px) {
//   body {
//     margin: 0%;
//   }

//   nav {
//     margin-top: 50px;
//     margin-left: 50px;
//     display: flex;
//     cursor: pointer;
//   }

//   .nav-links {
//     cursor: pointer;
//     margin-right: 44px;
//     font-size: 13px;
//   }

//   .nav-links li:hover {
//     padding: 1px;
//     color: #7557d3;
//     border: 1px solid rgba(117, 87, 211, 0.4);
//     box-sizing: border-box;
//     border-radius: 2px;
//     outline-offset: -2px;
//   }

//   .nav-links li {
//     padding: 6px;
//     margin: 0;
//   }

//   .image-box img {
//     vertical-align: middle;
//     width: 130%;
//   }

//   .text-box {
//     margin-left: 50px;
//     margin-right: 50px;
//     margin-top: 30px;
//     height: 250px;
//   }

//   .text-box h1,
//   span {
//     font-size: 37.9082px;
//   }

//   .containerTwo {
//     display: block;
//     margin-left: 50px;
//     margin-right: 50px;
//   }

//   .small-text-box {
//     height: 85px;
//     width: 100%;
//   }

//   .line-box {
//     margin-left: 34%;
//     display: flex;
//     height: 2px;
//   }

//   .line-box img {
//     margin-top: 15px;
//   }

//   .line-box h3 {
//     margin-top: 0;
//   }

//   .secondContainer {
//     margin-top: 50%;
// }

//   .containerOne {
//     flex-wrap: wrap-reverse;
//     margin-bottom: 38%;
//   }

//   .box-1 {
//     margin-top: 65px;
//   }

//   .containerTwo {
//     margin-top: 40px;
//   }

//   .image-box {
//     margin-top: 10px;
//     padding-left: 70px;
//     width: auto;
//     margin-right: auto;
//     padding-right: 170px;
//   }

//   .text-box button:hover {
//     margin-top: 32px;
//     width: 152px;
//     height: 48px;
//     left: 136px;
//     top: 601px;
//     font-weight: normal;
//     font-size: 16px;
//     line-height: 24px;
//     border: 1px solid #7557d3;
//     border-radius: 2px;
//     color: #7557d3;
//     background: white;
//   }
// }

// @media all and (max-width: 1024px) {
//   body {
//     margin: 0;
//   }

// .text-box[data-v-54f74f74] {
//     margin-left: 40px;
//     margin-top: 187px;
//     height: 173.32142639160156px;
//     width: 40%;
//   }

//   nav[data-v-54f74f74] {
//     margin-top: 50px;
//     margin-left: 40px;
//     display: flex;
//     justify-content: space-between;
// }

// .line-box[data-v-54f74f74] {
//     display: flex;
//     margin-left: 40px;
// }

// .containerTwo[data-v-54f74f74] {
//     display: flex;
//     margin-left: 40px;
//     margin-right: 40px;
//     margin-top: 40px;
// }

// .image-box img {
//     width: 500px;
//     height: 570px;
// }
// }

// @media screen and (max-width: 1200px) {
//   body {
//     margin: 0;
//   }

// .text-box[data-v-54f74f74] {
//     margin-left: 136px;
//     margin-top: 187px;
//     height: 173.32142639160156px;
//     width: 35%;
//     padding-right: 40px;
// }

// }


</style>

<template>
  <div class="overlay">
    <div class="details">
      <img src="../assets/girl-img.png" alt="" width="" />
      <p>Personal Details</p>
      <hr />
      <form action="">
        <div>
          <label for="full-name">Name</label> <br />
          <input type="text" name="full-name" /><br />
        </div>

        <div>
          <label for="email">Email</label> <br />
          <input type="email" name="email" /> <br />
        </div>

        <div>
          <label for="address">Address</label> <br />
          <input type="text" name="address" /><br />
        </div>

        <div>
          <label for="uni">University</label> <br />
          <input type="text" name="uni" /> <br />
        </div>

        <div>
          <label for="course">Course of study</label> <br />
          <input type="text" name="course" /><br />
        </div>

        <div>
          <label for="date">Date of Birth</label> <br />
          <input type="date" name="date" /><br />
        </div>

        <div>
          <label for="CGPA">CGPA</label> <br />
          <input type="num" name="CGPA" /><br />
        </div>

        <div class="file_upload">
          <div class="file_div">
            <label for="file-upload" class="custom-file-upload">
              <i>&#x2B; &nbsp;</i>Choose file
            </label>
            <input id="file-upload" type="file" />
          </div>
        </div>
      </form>
      <div class="button">
        <button id="approve">Approve</button>
        <button id="decline">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: absolute;
  background-color: #0311318a;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
}
.details {
  background-color: #fff;
  padding: 95px 30px;
}
hr {
  width: 90%;
  border: none;
  height: 1px;
  background-color: #f2f2f2;
}
form {
  display: grid;
  grid-template-columns: 250px 250px;
  grid-gap: 15px 20px;
  color: #b1b1b1;
  /* width: 2rem; */
  /* margin: ; */
}

form input {
  border: 2px solid #cdcfd6;
  width: 231px;
  height: 48px;
  border-radius: 4px;
}
.file_upload {
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  gap: 33px;
  padding: 20px 14px;
  justify-content: center;
}
.custom-file-upload {
  border: 1.5px dashed #2b3c4e;
  display: inline-block;
  padding: 15px 51px 0;
  width: 223px;
  height: 49px;
  text-align: center;
  cursor: pointer;
}
#approve {
  color: #fff;
  background-color: #7557d3;
  border: none;
  font-weight: 100;
  padding: 15px 30px;
  border-radius: 5px;
}
#decline {
  color: #2b3c4e;
  background-color: #fff;
  border: none;
  font-weight: 100;
  padding: 15px 30px;
  border-radius: 5px;
  border: 1px solid #cecece;
}
.button {
  padding: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
#approve:hover {
  background-color: #6e5aac;
}
#decline:hover {
  background-color: rgb(253, 247, 247);
}
</style>

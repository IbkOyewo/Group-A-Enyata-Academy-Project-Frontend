<template>
  <div class="page">
    <div>
      <p class="top-text">Create Application</p>
    </div>
    <form action="">
      <div>
        <div class="link">
          <div class="file_upload">
            <div class="file_div">
              <label for="file-upload" class="custom-file-upload">
                <i>&#x2B; &nbsp;</i>Choose file
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>

          <div id="link">
            <label for="link" class="text">Link</label> <br />
            <input type="text" name="link" />
          </div>
        </div>

        <div class="id">
          <div>
            <label for="closure" class="text">Application closure date</label> <br />
            <input type="date" placeholder="dd/mm/yyy" name="closure" />
          </div>
          <div>
            <label for="batch" class="text">Batch ID</label> <br />
            <input type="text" name="batch" />
          </div>
        </div>
      </div>

      <div class="instructions">
        <label for="instructions" class="text">Instructions</label> <br>
        <input name="instructions" id="instructions" />
      </div>
      <div class="button">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateApp",
};
</script>

<style scoped>
.page {
  color: #2b3c4e;
  margin: 60px;
}
.top-text{
    font-size: 43.56px;
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

input[type="file"] {
  position: fixed;
  right: 150%;
  bottom: 100%;
}
.link,
.id {
  display: flex;
  column-gap: 50px;
  margin-top: 50px;
}
input {
  border-radius: 4px;
  border: 2px solid #2b3c4e;
  outline: none;
  width: 320px;
  padding: 5px 0;
  height: 30px;
}
.instructions {
  padding: 60px 0;
}
#instructions {
  padding: 30px 187px;
}
button {
  background-color: #7557d3;
  color: #ffffff;
  padding: 10px 100px;
  border-radius: 4px;
  border: none;
}
.button {
  display: flex;
  justify-content: center;
}

button:hover {
  background-color: #6e5aac;
}
</style>

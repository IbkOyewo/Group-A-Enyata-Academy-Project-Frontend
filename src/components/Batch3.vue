<template>
  <div>
    <div>
      <div class="batch1">
        <h6>Entries - Batch 2</h6>
        <img src="../assets/Polygon.png" alt="" />
      </div>
      <p>Comprises of all that applied for batch 2</p>
    </div>
    <div>
      <table>
        <thead class="entry-table">
          <td>Name</td>
          <td>Email</td>
          <td>DOB - Age</td>
          <td>Address</td>
          <td>University</td>
          <td>CGPA</td>
        </thead>

        <tbody>
          <tr v-b-modal.modal-1>
            <td><div>Ify Chinke</div></td>
            <td><div>ify@enyata.com</div></td>
            <td><div>12/09/19 - 22</div></td>
            <td><div>3 Sabo Ave, Yaba, Lagos</div></td>
            <td><div>University of Nigeria</div></td>
            <td><div>5.0</div></td>
          </tr>

          <tr v-b-modal.modal-1>
            <td><div>Ify Chinke</div></td>
            <td><div>ify@enyata.com</div></td>
            <td><div>12/09/19 - 22</div></td>
            <td><div>3 Sabo Ave, Yaba, Lagos</div></td>
            <td><div>University of Nigeria</div></td>
            <td><div>5.0</div></td>
          </tr>

          <tr v-b-modal.modal-1>
            <td><div>Ify Chinke</div></td>
            <td><div>ify@enyata.com</div></td>
            <td><div>12/09/19 - 22</div></td>
            <td><div>3 Sabo Ave, Yaba, Lagos</div></td>
            <td><div>University of Nigeria</div></td>
            <td><div>5.0</div></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box mx-auto">
      <b-modal id="modal-1" data-backdrop="false" hide-footer hide-header>
        <div class="container">
          <img class="user-image" src="../assets/girl-img.png" alt="" />
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

            <form>
              <label for="fileUpload" class="form">
                <span class="plus">
                  <b style="font-weight: 500">+</b>&nbsp;Choose File
                  <input type="file" id="fileUpload" />
                </span>
              </label>
            </form>
          </form>
          <div class="btn-2">
            <button>Approve</button>
            <button>Decline</button>
          </div>
        </div>
      </b-modal>
    </div>

  </div>
</template>

<style scoped>
body {
  background-image: none;
}
.modal-dialog {
  position:absolute !important;
}
table {
  margin-top: 30px;
  width: 930px;
  text-align: center;
  border-collapse: collapse;
}

thead {
  background: #2b3c4e;
  color: white;
  width: 1042px;
  height: 46px;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
  margin-right: 200px;
}

td {
  padding: 0 20px 0 0;
}

td div {
  margin-bottom: 10px;
  margin-top: 11px;
  padding: 10px;
}

tr {
  height: 45.78px;
  border-left: 10px solid #ffffff;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}

tr:hover {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 10px solid #7557d3;
}

.batch1 {
  display: flex;
}
img {
  width: 12px;
  height: 12px;
  margin-left: 30px;
  margin-top: 20px;
}
h6 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  color: #2b3c4e;
}
p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #2b3c4e;
}

#modal-1 {
  padding: 95px 30px;
  position: absolute !important;
  width: 560px !important;
  height: 924px !important;
  left: 786px !important;
  top: 0px !important;
  background: #ffffff;
}

.container {
  padding: 95px 30px;
  position: absolute;
  width: 560px;
  height: 924px;
  left: 367px;
  top: 0px;
  background: #ffffff;
}

.container img {
  position: absolute;
  width: 179px;
  height: 179px;
  left: 0px;
  top: 65px;
}

.container p {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 190px;
  color: #7d7d7d;
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
}

form label {
  margin-bottom: 8px;
}

form input {
  border: 2px solid #cdcfd6;
  width: 221px;
  height: 42px;
  border-radius: 4px;
}

#fileUpload {
  visibility: hidden;
  cursor: pointer;
}

.form {
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  height: 42px;
  width: 221px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 30px;
}

.plus {
  font-size: 17px;
  /* margin-left: 85px;*/
  margin-top: 37px;
  text-align: center;
}
.file_upload {
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  gap: 33px;
  padding: 20px 14px;
  justify-content: center;
}

.btn-2 {
  padding: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.btn-2 button {
  color: #2b3c4e;
  background-color: #fff;
  border: none;
  font-weight: 100;
  padding: 13px 30px;
  border-radius: 5px;
  border: 1px solid #cecece;
}

.btn-2 button:hover {
  color: #fff;
  background-color: #7557d3;
  border: none;
  font-weight: 100;
  padding: 13px 30px;
  border-radius: 5px;
  border: 1px solid #cecece;
}
</style>

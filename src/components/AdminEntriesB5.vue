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
      <table class="entry-table">
        <thead class="table-head">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB - Age</th>
            <th scope="col">Address</th>
            <th scope="col">University</th>
            <th scope="col">CGPA</th>
          </tr>
        </thead>
        <tbody class="table-1">
          <tr class="row-1">
            <td class="first-row">Ify Chinke</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
          </tr>

          <tr class="row-2">
            <td class="second-row">Ify Chinke</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
          </tr>
          <tr class="row-3">
            <td class="third-row">Ify Chinke</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box">
      <div class="text">
        <small>Are you sure you want to decline this application?</small>
      </div>
      <div class="buttons">
        <button class="btn-1">Yes</button>
        <button class="btn-2">No</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-image: none;
}
.box {
  position: absolute;
  width: 458px;
  height: 300px;
  left: 511px;
  top: 240px;
  background: #ffffff;
  border-radius: 4px;
}

.first-row {
      border-left: 10px solid rgba(206, 205, 205, 0.2);
    border-radius: 10px 0 0px 10px;

}

.second-row {
      border-left: 10px solid rgba(206, 205, 205, 0.2);
    border-radius: 10px 0 0px 10px;

}

.third-row {
      border-left: 10px solid rgba(206, 205, 205, 0.2);
    border-radius: 10px 0 0px 10px;

}

.first-row:hover {
      border-left: 10px solid #7557d3;
    border-radius: 10px 0 0px 10px;

}

.second-row:hover {
      border-left: 10px solid #7557d3;
    border-radius: 10px 0 0px 10px;

}

.third-row:hover {
      border-left: 10px solid #7557d3;
    border-radius: 10px 0 0px 10px;

}

.text {
  position: absolute;
  width: 220px;
  height: 54px;
  left: 120px;
  top: 60px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #4f4f4f;
}

.buttons {
  position: absolute;
  width: 225px;
  height: 48px;
  left: 120px;
  top: 180px;
  display: flex;
  border-radius: 4px;
}

.btn-1 {
  width: 125px;
  height: 48px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
}

.btn-2 {
  width: 125px;
  height: 48px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
}

.btn-1:hover,
.btn-2:hover {
  background: #7557d3;
  color: white;
}

.row-1:hover {
  /* border-spacing: 10px;
  border-collapse: separate;
  border-spacing: 0 15px; */
  border-left: 10px solid #e41818;
  /* border-top-left-radius: 20px;
  border-bottom-left-radius: 20px; */
}

.entry-table {
  width: 932px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  font-size: 13px;
  border-spacing: 10px;
  border-collapse: separate;
  border-spacing: 0 15px;
  /* border-left: 10px solid #020202;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px; */
}

.row-1:hover,
.row-2:hover,
.row-3:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(19, 19, 20, 0.05);
  border-radius: 16px;
  padding-bottom: 40px;
  cursor: pointer;
  border: 2px solid black;
  border-left: 10px solid #e41818;
  /* border-left: 10px solid #020202; */
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

.row-1 tr {
  border-left: 10px solid;
  border-radius: 10px 0 10px 10px;
}

.table-head {
  background: #2b3c4e;
  color: white;
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
</style>

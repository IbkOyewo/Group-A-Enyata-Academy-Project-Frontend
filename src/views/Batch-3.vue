<template>
<<<<<<< HEAD
  <Fragment>
    <Overlay />
    <Table />
  </Fragment>
</template>

<script>
import Overlay from "../components/Overlay.vue";
import Table from "../components/Table.vue";
import { Fragment } from "vue-fragment";
export default {
  components: { Overlay, Table, Fragment },

  name: "Batch-3",
};
</script>

<style scoped>
.table {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.table-header {
  background-color: #2b3c4e;
  width: 100%;
  color: #fff;
}
.row-2 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.details {
  background-color: #fff;
  padding: 95px 30px;
  /* position: absolute; */
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
=======
  <div>
      <div>Assessment History</div>
       <!-- <div class="short-img">
                  <img src="..assets/short.png" alt="">
              </div> -->
      <div class="table">
          <table>
              <th class="table-header">
                  <td>Batch</td>
                  <td>Date Composed</td>
                  <td>No of Questions</td>
                  <td>Time Allocated</td>
                  <td>Status</td>
              </th>
              <tr class="row-2">
                  <td>Batch</td>
                  <td>12/07/94</td>
                  <td>30</td>
                  <td>30 mins</td>
                  <td>Taken</td>
              </tr>
               <tr>
                  <td>Batch</td>
                  <td>12/07/94</td>
                  <td>30</td>
                  <td>30 mins</td>
                  <td>Taken</td>
              </tr>
               <tr>
                  <td>Batch</td>
                  <td>12/07/94</td>
                  <td>30</td>
                  <td>30 mins</td>
                  <td>Taken</td>
              </tr>
          </table>
      </div>
       <div class="details"> 
              <img src="../assets/girl-img.png" alt="" width="">
              <p>Personal Details</p>
              <hr>
              <form action="">
                  <div>
                      <label for="full-name">Name</label> <br>
                  <input type="text" name="full-name"><br>
                  </div>

                  <div>
                      <label for="email">Email</label>  <br>
                  <input type="email" name="email"> <br>
                  </div>

                  <div>
                      <label for="address">Address</label> <br>
                  <input type="text" name="address"><br>
                  </div>

                  <div>
                       <label for="uni">University</label> <br>
                  <input type="text" name="uni"> <br>
                  </div>

                  <div>
                  <label for="course">Course of study</label> <br>
                  <input type="text" name="course"><br>
                  </div>
                  
                  <div>           
                  <label for="date">Date of Birth</label> <br>
                  <input type="date" name="date"><br>
                  </div>
                  
                  <div>
                      <label for="CGPA">CGPA</label> <br>
                  <input type="num" name="CGPA"><br>
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
export default {
    name: 'Batch-3'
}
</script>

<style scoped>
.table{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.table-header{
    background-color: #2B3C4E;
    width: 100%;
    color: #fff;
}
.row-2{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.details{
    background-color: #fff;
    padding: 95px 30px;
}
hr{
    width: 90%;
    border: none;
    height: 1px;
    background-color: #F2F2F2;
}
form{
    display: grid;
    grid-template-columns: 250px 250px;
    grid-gap: 15px 20px;
    color: #B1B1B1;
    /* width: 2rem; */
    /* margin: ; */
}

form input {
    border: 2px solid #CDCFD6;
    width: 231px;
    height: 48px;
    border-radius: 4px ;
>>>>>>> 441e82a18d45b7cd268dbee2c8ed03ff00f70622
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
<<<<<<< HEAD
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
.sidebar {
  position: fixed;
}
</style>
=======
#approve{
    color: #fff;
    background-color: #7557d3 ;
    border: none;
    font-weight: 100 ;
    padding: 15px 30px;
    border-radius: 5px;

}
#decline{
    color: #2b3c4e;
    background-color: #fff ;
    border: none;
    font-weight: 100 ;
    padding: 15px 30px;
    border-radius: 5px;
    border: 1px solid #CECECE;

}
.button{
    padding: 30px;
    display: flex;  
    gap: 20px;
    align-items: center;
    justify-content: center;
}
#approve:hover{
  background-color: #6e5aac ;
}
#decline:hover{
  background-color: rgb(253, 247, 247) ;
}
</style>
>>>>>>> 441e82a18d45b7cd268dbee2c8ed03ff00f70622

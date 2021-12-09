<template>
  <div class="main-div">
    <div id="top-text">Assessment History</div>
    <div class="container">
     

      <table>
        <thead class="table-header">
          <td>Batch</td>
          <td>Date Composed</td>
          <td>No of Questions</td>
          <td>Time Allocated</td>
          <td>Status</td>
        </thead>

        <tbody v-for="history in histories" v-bind:key="history.client_id">
          <tr>
            <td><div>{{ history.batch  }}</div></td>
            <td><div>{{ history.datecomposed }}</div></td>
            <td><div>{{ history.noofquestions }}</div></td>
            <td><div>{{ history.timeallocated }}</div></td>
            <td><div>{{ history.status }}</div></td>
          </tr>
          <!-- <tr>
            <td><div>Batch 1</div></td>
            <td><div>12/07/94</div></td>
            <td><div>30</div></td>
            <td><div>30 mins</div></td>
            <td><div>Taken</div></td>
          </tr>
          <tr>
            <td><div>Batch 1</div></td>
            <td><div>12/07/94</div></td>
            <td><div>30</div></td>
            <td><div>30 mins</div></td>
            <td><div>Taken</div></td>
          </tr>
          <tr>
            <td><div>Batch 1</div></td>
            <td><div>12/07/94</div></td>
            <td><div>30</div></td>
            <td><div>30 mins</div></td>
            <td><div>Taken</div></td>
          </tr>
          <tr>
            <td><div>Batch 1</div></td>
            <td><div>12/07/94</div></td>
            <td><div>30</div></td>
            <td><div>30 mins</div></td>
            <td><div>Taken</div></td>
          </tr> -->
        </tbody>
      </table>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'assessmentHistory',
  data() {
    return {
      histories: '',
    }
  },

  async mounted() {
    try {
      let res = await this.$store.dispatch('assessmentHistory');  
      console.log(res)
      // this.histories = res.data.data  
    } catch (error) {
      console.log(error)
    }
}

}


</script>

<style>
#top-text {
  position: absolute;
  width: 355px;
  height: 53px;
  left: 334px;
  top: 81px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.container {
  position: absolute;
  width: 850px;
  height: 430px;
  left: 334px;
  top: 164px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}

table {
  margin-top: 30px;
  margin-left: 25px;
  width: 720px;
  text-align: center;
  border-collapse: collapse; 
}

td {
     padding: 0;
}

td div {
    margin-bottom: 10px;
    margin-top: 11px;
    padding: 10px;
}

.table-header {
  background-color: #2b3c4e;
  color: #fff;
  width: 946.48px;
  height: 47.78px;
}

tr {
  width: 946.48px;
  height: 45.78px;
  border-left: 10px solid #ffffff;

}

tr:hover {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 10px solid #7557d3;
}
</style>

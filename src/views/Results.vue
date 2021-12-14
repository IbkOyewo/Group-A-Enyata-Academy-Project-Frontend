<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar/>
    </div>
    <div class="container my-5 col-9">
      <div class="title-entries d-flex">
      <span pt-5 pl-5>Results - Batch 2</span>
      <div class="image"><img src="../assets/arrow-down-icon.svg" alt="arrow"></div>
    </div>
    <div id="description-div">
      <i class="description">Comprises of all that applied for Batch 1</i>
    </div>

      <div class="my-4">
        
        <table class="table table-sm table-borderless table-responsive">
          <thead class="heading">
            <tr>
              <th class="name" scope="col">Name</th>
              <th class="email" scope="col">Email</th>
              <th class="dob" scope="col">
                DOB - Age
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('dob')"></i>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University<br></th>
              <th scope="col" >
                CGPA 
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('dob')"></i>
              </th>
              <th scope="col">Test Scores
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('score')"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="different-row" v-for="detail in result" :key="detail.index">
              <td class="text-left">{{detail.fname}} {{detail.lname}}</td>
              <td class="text-left">{{detail.email}}</td>
              <td class="text-left">{{detail.dob}}</td>
              <td class="text-left">{{detail.address}}</td>
              <td class="text-left">{{detail.university}}</td>
              <td class="text-left">{{detail.cgpa}}</td>
              <td class="text-left">{{detail.testscores}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';

export default {
  name: "results",
  components: {
    AdminSidebar
  },
  data() {
    return {
      result: [],
      details:{
        fname: "",
        lname: "",
        email:"",
        dob:"",
        address:"",
        university:"",
        cgpa:"",
        testscores:"",
        
      }
    }
  },
  created: async function () {
    let res = await this.$store.dispatch("getResults")
    let obj = res.data.data;
    obj.forEach(element => {
      this.result.push(element)
    });
  }
  }
</script>

<style scoped>
.different-row:hover {
background: #ffffff;
box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
border-radius: 10px;
font-weight: bold;
color: #2b3c4e;
border-left: 10px solid #31d283;
}
.title-entries {
  width: 350px;
  height: 53px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-top: 50px;
}
#description-div {
  margin-bottom: 37px;
  text-align: left;
}

.container{
  width: 70% !important;
}

.description {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: var(--text-secondary-small);
}

h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #4f4f4f;
}

.heading {
  background: #2b3c4e;
}
th {
  color: white;
  font-family: Lato;
  font-size: 14px;
  text-align: left;
  line-height: 17px;
  padding-left: 20px;
}

th.name{
  padding-right: 80px;
  padding-left: 20px;
}

th.dob{
  padding-right: 60px;
  padding-left: 40px;
}

td {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  padding-left: 20px;
}
i {
  cursor: pointer;
  color: white;
}
</style>
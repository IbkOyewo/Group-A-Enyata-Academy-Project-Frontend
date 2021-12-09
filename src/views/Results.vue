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
        
        <table class="table table-borderless">
          <thead class="heading">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">
                DOB - Age
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('dob')"></i>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University</th>
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
            <tr class="different-row">
              <td>{{details.fname}} {{details.lname}}</td>
              <td>{{details.email}}</td>
              <td>{{details.dob}}</td>
              <td>{{details.address}}</td>
              <td>{{details.university}}</td>
              <td>{{details.cgpa}}</td>
              <td>{{details.testscores}}</td>
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
      details:{
        fname: "",
        lname: "",
        email:"",
        dob:"",
        address:"",
        university:"",
        cgpa:"",
        testscores:""
      }
    }
  },
  mounted: async function () {
    let res = await this.$store.dispatch("getResults")
    let results = JSON.stringify(res.data.data)
    let obj = JSON.parse(results)
    for(let i=0;i < obj.length; i++){
      this.details.fname=obj[i].fname
      this.details.lname=obj[i].lname
      this.details.email=obj[i].email
      this.details.dob=obj[i].dob
      this.details.address=obj[i].address
      this.details.university=obj[i].university
      this.details.cgpa=obj[i].cgpa
      this.details.testscores=obj[i].testscores
      //console.log(Object.keys(obj[i]));
    }
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
  text-align: center;
  line-height: 17px;
}
td {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #4f4f4f;
}
i {
  cursor: pointer;
  color: white;
}
</style>
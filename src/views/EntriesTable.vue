<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar/>
    </div>
    <div class="container my-5 col-9">
       <div class="title-entries d-flex">
      <span pt-5 pl-5>Entries - Batch 1</span>
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
                <i class="fa fa-sort mx-1" aria-hidden="true"  @click="sort('dob')"></i>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University</th>
              <th scope="col" >
                CGPA
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('cgpa')"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="mx-1 different-row" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" v-for="entry in entries" :key="entry.id">
              <td>{{ entry.fname }} {{entry.lname}}</td>
              <td>{{entry.email}}</td>
              <td>{{entry.dob}}</td>
              <td>{{entry.address}}</td>
              <td>{{entry.university}}</td>
              <td>{{entry.cgpa}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import offcanva from '@/components/offcanva.vue'
// import { mapGetters, mapActions } from "vuex";


export default {
  name: "adminentries",
  components: {
    AdminSidebar,
    offcanva
  },

  data() {
    return {
      entries: "",
    }
  },

async mounted() {
    try {
      let res = await this.$store.dispatch('batchEntries');  
      console.log(res)
      this.entries = res.data.data  
    } catch (error) {
      console.log(error)
    }
}

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
html{
    overflow-x: hidden !important;
}

.different-row{
  border-left: 10px solid none;
  box-shadow: 8px 18px 20px none;
}
.different-row:hover {
  background: #ffffff;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 10px;
  font-weight: bold;
  color: #2b3c4e;
  border-left: 10px solid #7557D3;
  border-radius: 5px;
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
  overflow: hidden;
  border-left: 10px solid none;
  box-shadow: 8px 18px 20px none;
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
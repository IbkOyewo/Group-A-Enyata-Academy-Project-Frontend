<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar />
    </div>
    <div class="container my-5 col-9">
      <div class="title-entries d-flex">
        <span pt-5 pl-5>Entries - Batch 1</span>
        <div class="image">
          <img src="../assets/arrow-down-icon.svg" alt="arrow" />
        </div>
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
                <i
                  class="fa fa-sort mx-1"
                  aria-hidden="true"
                  @click="sort('dob')"
                ></i>
              </th>
              <th class="address" scope="col">Address</th>
              <th class="uni" scope="col">University</th>
              <th class="cgpa" scope="col">
                CGPA
                <i
                  class="fa fa-sort mx-1"
                  aria-hidden="true"
                  @click="sort('cgpa')"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <p v-if="entries === ''" class="fs-3 fw-bold">
              There are no applicants yet. Check back later
            </p>
            <tr
              v-else
              class="mx-1 different-row text-left"
              v-for="entry in entries"
              @click="selectEntry(entry.id)"
              :key="entry.id"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <!-- data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="selectEntry(entry.id)"
                            aria-controls="offcanvasRight"   -->
              <td class="text-left">{{ entry.fname }} {{ entry.lname }}</td>
              <td class="text-left">{{ entry.email }}</td>
              <td class="text-left">{{ entry.dob }}</td>
              <td class="text-left">{{ entry.address }}</td>
              <td class="text-left">{{ entry.university }}</td>
              <td class="text-left">{{ entry.cgpa }}</td>
            </tr>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              @click="selectEntry(id)"
            >
              <div class="offcanvas-header">
                <!-- <h5 id="offcanvasRightLabel">Offcanvas right</h5> -->
                <!-- <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
              </div>
              <div class="offcanvas-body">
                <div class="box ps-4">
                  <div>
        <img :src="Profile.image" class="profile"/>
      </div>
                  <p class="mt-4">Personal Details</p>
                  <hr />
                  <form action="">
                    <div>
                      <label for="full-name">Name</label> <br />
                      <input
                        type="text"
                        readonly
                        name="full-name"
                        v-model="entry.fname"
                      /><br />
                    </div>

                    <div>
                      <label for="email">Email</label> <br />
                      <input
                        type="email"
                        readonly
                        v-model="entry.email"
                        name="email"
                      />
                      <br />
                    </div>

                    <div>
                      <label for="address">Address</label> <br />
                      <input
                        type="text"
                        readonly
                        v-model="entry.address"
                        name="address"
                      /><br />
                    </div>

                    <div>
                      <label for="uni">University</label> <br />
                      <input
                        type="text"
                        readonly
                        v-model="entry.university"
                        name="uni"
                      />
                      <br />
                    </div>

                    <div>
                      <label for="course">Course of study</label> <br />
                      <input
                        type="text"
                        readonly
                        v-model="entry.course"
                        name="course"
                      /><br />
                    </div>

                    <div>
                      <label for="date">Date of Birth</label> <br />
                      <input
                        type="date"
                        readonly
                        v-model="entry.dob"
                        name="date"
                      /><br />
                    </div>

                    <div>
                      <label for="CGPA">CGPA</label> <br />
                      <input
                        type="num"
                        readonly
                        v-model="entry.cgpa"
                        name="CGPA"
                      /><br />
                    </div>

                    <form>
                      <label for="fileUpload" class="form">
                        <span class="plus">
                          <input
                            type="text"
                            readonly
                            v-model="entry.cv"
                            id="fileUpload"
                          />
                        </span>
                      </label>
                    </form>
                  </form>
                  <p
                    v-if="status === 'approved'"
                    class="mt-3 fw-bold fs-4 text-center text-success"
                  >
                    Approved
                  </p>
                  <p
                    v-else-if="status === 'declined'"
                    class="mt-3 fw-bold fs-4 text-center text-danger"
                  >
                    Declined
                  </p>
                  <div v-else class="mt-3 text-center">
                    <button
                      type="button"
                      class="btn btn-offcanvas"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      @click="handleApprove"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      class="btn btn-offcanvas ms-4"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      @click="handleDecline"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ApprovedModal
              @click="updateApplicantStatus('approved')"
              modalText="Are you sure you want to approve this application?"
            />
            <DeclineModal @click="updateApplicantStatus('declined')" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import ApprovedModal from "@/components/ApprovedModal.vue";
import DeclineModal from "@/components/DeclineModal.vue";
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "adminentries",
  components: {
    AdminSidebar,
    ApprovedModal,
    DeclineModal,
  },
  data() {
    return {
      entries: "",
      applicantId: "",
      entry: {},
      status:"",
      Profile: []
    };
  },

  async mounted() {
    try {
      console.log(this.entry);
      let res = await this.$store.dispatch("batchEntries");
      if (res.status === 200) {
        console.log(res);
        this.entries = res.data.data;
        this.applicantId = res.data.data[1].id;
      }
    } catch (error) {
      console.log(error);
    }
  },

   created: async function () {
    this.getUserDetails();
    let res = await this.$store.dispatch("getDashboard")
    let obj = res.data.data
    this.Profile.push(obj)
    //console.log(this.Profile);
  },

  methods: {
    async selectEntry(id)
 {
      // this.applicantId = entry;
      // console.log("applicant", this.applicantId);
      this.$route.query.applicantId = id;
      let res = await this.$store.dispatch("getUserDetails",id);
      const [entry] = this.entries.filter((entry) => entry.id === id);
      this.entry = entry;
       let obj = res.data.data
      this.Profile = obj;
      console.log("000000000?",this.entry);
    },
    updateApplicantStatus(status) {
      try {
        this.status = status
        console.log(this.status);
      } catch (error) {
        console.log(error);
      }
    },
    async handleApprove() {
      try {
        let res = await this.$store.dispatch("approveApplication");
        if (res.status === 200) {
          localStorage.setItem("Status",'Approved')
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleDecline() {
      try {
        let res = await this.$store.dispatch("declineApplication");
        if (res.status === 200) {
          localStorage.setItem("Status",'Declined')
        }
      } catch (error) {
        console.log(error);
      }
    },

     getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem("User-Token");
      try {
      //decode token here and attach to the user object
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded; 
      } catch (error) {
        // return error in production env
        console.log(error, 'error from decoding token')
      }
    },
  },
};
</script>

<style scoped>
/* * {
  box-sizing: border-box;
}
html {
  overflow-x: hidden !important;
} */

.different-row {
  border-left: 10px solid none;
  box-shadow: 8px 18px 20px none;
}
.different-row:hover {
  background: #ffffff;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 10px;
  font-weight: bold;
  color: #2b3c4e;
  border-left: 10px solid #7557d3;
  border-radius: 5px;
}

.profile {
  width: 179px;
  height: 179px;
  /* border-radius: 50px; */
  margin: auto;
  margin-top: 20px;
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

th.name{
  padding-right: 80px;
  padding-left: 20px;
}

th.dob{
  padding-right: 60px;
  padding-left: 40px;
}

.offcanvas.offcanvas-end {
  width: 36.5%;
}

.box p {
  font-weight: 700;
}

.description {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: var(--text-secondary-small);
}

.container {
  width: 70% !important;
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
  /* overflow: hidden; */
  border-left: 10px solid none;
  box-shadow: 8px 18px 20px none;
}
th {
  color: white;
  font-family: Lato;
  font-size: 14px;
  text-align: left;
  line-height: 17px;
   padding-left: 20px;
}
td {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
   padding-left: 20px;
  /* padding-left: 30px; */
}
i {
  cursor: pointer;
  color: white;
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
  outline: none;
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

.btn.btn-offcanvas {
  color: #fff;
  background-color: #7557d3;
  border: none;
  border-radius: 5px;
  padding: 13px 30px;
  margin-top: 15px;
}
</style>

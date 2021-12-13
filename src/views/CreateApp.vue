<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar/>
    </div>
    <div class="container col-8 pt-5">
      <h2 class="my-5">Create Application</h2>
      <div>
        <form enctype="multipart/form-data" @submit.prevent="submitForm">
          <div class="row">
            <div class="fileup col">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+</strong> Choose file
                </button>
                <input type="file" name="file" ref="file" @change="handleFileUpload"/>
              </div>
            </div>
            <div class="col">
              <label>Link</label>
              <input type="text" class="form-control"  v-model="link"/>
            </div>
           
          </div>
          
          <div class="row my-4">
            <div class="col">
              <label>Application closure date</label>
              <input type="date" class="form-control" v-model="closing_date"/>
            </div>
            <div class="col">
              <label>Batch ID</label>
              <input type="text" class="form-control"  v-model="batch_id"/>
            </div>
          </div>
          <div class="form-group my-3">
            <label for>Instructions</label>
            <textarea class="form-control" name id rows="4" v-model="instruction"></textarea>
          </div>
          <div class="text-center">
            <button class="btn" type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import { mapGetters, mapActions } from "vuex";
export default {
  name: "applicationAdmin",
  components: {
    AdminSidebar
  },
  data() {
    return {
      file: '',
      batch_id: '',
      link: '',
      closing_date: "",
      instructions: ""
    }
  },
  computed: {
    ...mapGetters(["apiResponse"]),

    isValid() {
      if (
        this.link == "" ||
        this.file == "" ||
        this.batch_id == "" ||
        this.closing_date == "" ||
        this.instruction == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["createApp"]),

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitForm() {
    this.$dtoast.pop({
    preset: "success",
    color: "white",
    heading: "create application",
    content: "successfully created",
  })
      if( this.isValid) {
        let formData = new FormData();
        // formData.append("file", this.file);
        formData.append("batch_id", this.batch_id);
        formData.append("link", this.link);
        formData.append("closing_date", this.closing_date);
        formData.append("instruction", this.instruction);
        this.createApp(formData);
        // this.file = '';
        this.batch_id =  '';
        this.link =  '';
        this.closing_date = "";
        this.instruction   = "";
        alert("Application Successfully Created")
        
      } else {
        alert("All fields are required");
      }
    }
    
  },

};
</script>

<style scoped>
.fileup {
  display: flex;
  justify-content: center;
}

h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

input, textarea{
  border:1.5px solid #2B3C4E;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn{
  width: 379px;
  height: 50px;
  color: #fff;
  background: #7557d3;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.btns {
  border: 1.55px dashed #2b3c4e;
  box-sizing: border-box;
  color: #2b3c4e;
  background-color: white;
  padding: 46px 180px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  /* / font-weight: bold; / */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
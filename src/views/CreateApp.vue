<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebar />
    </div>
    <div class="container col-8 pt-5">
      <h2 class="my-5">Create Application</h2>
      <div>
        <form
          method="post"
          enctype="multipart/form-data"
          @submit.prevent="postData"
        >
          <div class="row">
            <div class="fileup col">
              <div class="upload-btn-wrapper">
                <button class="btns"><strong>+</strong> Choose file</button>
                <input id="file-upload" :v-model="formData.imageUrl" :v-html="file" type="file" ref="image"  @change="handleFileUpload()"
          />
              </div>
            </div>
            <div class="col">
              <label>Link</label>
              <input type="text" class="form-control" v-model="formData.applicationLink" />
            </div>
          </div>

          <div class="row my-4">
            <div class="col">
              <label>Application closure date</label>
              <input type="date" class="form-control" v-model="formData.closureDate" />
            </div>
            <div class="col">
              <label>Batch ID</label>
              <input type="text" class="form-control" v-model="formData.batchId" />
            </div>
          </div>
          <div class="form-group my-3">
            <label for>Instructions</label>
            <textarea
              class="form-control"
              name
              id
              rows="4"
              v-model="formData.instructions"
            ></textarea>
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
export default {
  name: "applicationAdmin",
  components: {
    AdminSidebar
  },
  data() {
    return {
      formData:{
        batchId: "",
        imageUrl: "",
        applicationLink: "",
        closureDate: "",
        instructions: ""
      }

    }
  },
  
  methods: {
    handleFileUpload(){
    this.formData.imageUrl =  this.$refs.image.files[0];
  },
    async postData()
    {
      try {
        const { ...adminData} = this.formData
        let res = await this.$store.dispatch("createApplication", adminData)
        console.log(res)
      } catch (error) {
        console.log(error)
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

input,
textarea {
  border: 1.5px solid #2b3c4e;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
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
  /* font-weight: bold; */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>

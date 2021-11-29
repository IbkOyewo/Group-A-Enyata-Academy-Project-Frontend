<template>
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

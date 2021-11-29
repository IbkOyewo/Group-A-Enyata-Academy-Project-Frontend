<template>
<div class='main'>
    <div class='button'>
        <button @click.prevent="submit" type="submit">{{text}}</button> 
    </div> 
    <div>
        <p>{{message}}<a href='#'>{{link}}</a></p>
    </div>
</div>
    
</template>

<script>

export default {
    name: "Button",
    props: {
    text: String,
    message: String,
    link: String
  },
//    data() {
//     return {
//       inputValue: ""
//     };
//   },
   methods: {
      submit(){
          console.log("clicked", this.inputValue);
      }
  }
 
}
</script>

<style scoped>
.main{
    max-width: 600px;
    margin: auto;
}
button{
    background: #7557D3;
    margin: 15px 0;
    color: #fff;
    width: 65%;
    padding: 13px;
    border: none;
    border-radius: 4px;
}
button:disabled {
  background: #ccc;
}
</style>
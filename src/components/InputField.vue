<template>
 <input type="text" :placeholder="placeholder">
</template>
<script>
export default{
  props:{
    placeholder:{
      type:String,
      required:true,
      width:String
    }
  }
}
</script>
<style>
input{
width: 450px;
height: 48.4px;
border:1px #dbdbdb solid;
transition: all 0.3s ease;
outline: none;
padding-left: 17px;
padding-top: 0px;
padding-bottom: 0px;
background-color: #FBFBFB;
}
input:focus{
    border: 1px #dbdbdb solid;
    border-radius: 9px;
    /* box-shadow: 0 0 8px rgba(76, 175, 80, 0.5); */
}
input[type="text"] {
  padding-left: 17px; /* Removes all padding inside the input */
  font-size: 16px;
  outline: none;
  color:rgb(0, 0, 0);
  border-radius: 9px;
}
</style>
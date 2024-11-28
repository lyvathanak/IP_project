<template>
 <input type="text" name="name"  placeholder="name">
</template>
<script>
export default{}
</script>
<style>
input{
width: 313px;
height: 43.4px;
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
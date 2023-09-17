<template>
 <div>
  <div>shou ye</div>
  <div>shou ye</div>
  <div>shou ye</div>
  <div>shou ye</div>
  <div>shou ye</div>
  <div>shou ye</div>

 </div>
</template>

<script>
 export default {
  name:'home',
   data () {
     return {

     }
   },
   components: {

   },
  created() {
   history.pushState(null, null, document.URL);
   window.addEventListener("popstate", function () {
    history.pushState(null, null, document.URL);
   });
  },

 }
</script>

<style>

  body {
    background: #c92929;
  }
 
</style>

<template>
 <div>
  <div>home</div>
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

 
</style>

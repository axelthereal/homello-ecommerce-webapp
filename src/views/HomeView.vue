<style scoped>
</style>

<template>
    <!-- Navbar --> 
      <BasicNavbar active="home" />
</template>

<script>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';

export default {
       name:"HomeView",
       data(){
          return { 
          } 
       },
       methods: {
           setPageTitle(){ 
               document.title = "Homello | Home";
           }
       },
       components: { 
         BasicNavbar
       },
       beforeMount() {
         this.setPageTitle()
       } 
}
</script>
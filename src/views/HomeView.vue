<style scoped>
</style>

<template>
    <!-- Navbar --> 
      <BasicNavbar active="home" />
    
    <!-- Main-Banner --> 
    <main>
       <div class="container">
        <div class="bg-body-tertiary p-5 rounded">
    <h1>Navbar example</h1>
    <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.</p>
    <a class="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar docs »</a>
  </div>
       </div>
    </main>

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
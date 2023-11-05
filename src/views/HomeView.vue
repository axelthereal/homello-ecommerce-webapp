<style scoped>
   @media only screen and (max-width: 1015px){
    .main .mainbanner{
     margin-top:72px !important;  
   }
   }
   .main .mainbanner{ 
     margin-top: 78px; 
     background: #265a5a !important;
   } 
</style>

<template>
    <!-- Navbar --> 
      <BasicNavbar active="home" />
    
    <!-- Main  --> 
    <main class="main">
       
      <!-- Main-Banner --> 
       <div class="mainbanner mb-0 py-5 my-5 d-flex align-items-center">
        <div class="container py-5 my-5">
             <div class="bannercontent text-white col-lg-5">
              <h1 class="display-3 fw-semibold">Modern & Unique Home Furnitures.</h1>
              <p class="lead opacity-75">Fill your  home with furniture that brings you 
              comfort as soon as you walk in the door.</p> 
              <LinkButton btn-theme="secondary-btn" btn-label="Explore Now" btn-url="" btn-icon="arrow-right" outlined="false" class="btn-lg mt-3"/>
             </div>
        </div>
       </div>

   <!-- PositivePoints-Banner -->
   <div class="positive-points bg-color-secondary">
   <div class="container px-4 py-5">
    <div class="row g-4 py-2 row-cols-1 row-cols-lg-4">

      <div class="feature col p-5 color-primary" align="center">
        <span class="icon"><i class="bi bi-tree display-3"></i> </span>
        <p class="fs-5 mt-4 fw-semibold">High quality & affordable products</p> 
      </div>
      <div class="feature col p-5 color-primary" align="center">
        <span class="icon"><i class="bi bi-tree display-3"></i> </span>
        <p class="fs-5 mt-4 fw-semibold">Curated selection +12 exclusive colors</p> 
      </div>
      <div class="feature col p-5 color-primary" align="center">
        <span class="icon"><i class="bi bi-tree display-3"></i> </span>
        <p class="fs-5 mt-4 fw-semibold">Eco-friendly & premium furnitures</p> 
      </div>
      
      <div class="feature col p-5 color-primary" align="center">
        <span class="icon"><i class="bi bi-tree display-3"></i> </span>
        <p class="fs-5 mt-4 fw-semibold">Loved and approved by a world based population</p> 
      </div>
    </div>
    <span class="d-block pb-2 border-1 border-secondary opacity-25 border-bottom col-11 mx-auto"></span> 
      <div class="col-lg-9 mx-auto mt-5" align="center">
        <p class="display-5 fw-semibold color-primary">
      There's something amazing about our environmentally friendly materials, 
      and it's not just how amazing they look.</p>
      </div> 
    </div> 
  </div>


    </main> 
</template>

<script>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';

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
         BasicNavbar,
         LinkButton
       },
       beforeMount() {
         this.setPageTitle()
       } 
}
</script>
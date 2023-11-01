<style scoped>
</style>

<template>
</template>

<script>
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
       },
       beforeMount() {
         this.setPageTitle()
       } 
}
</script>
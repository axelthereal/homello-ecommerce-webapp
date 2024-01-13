<script setup>
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->
</template>

<script>
export default {
    name: "ProductView"
}
</script>
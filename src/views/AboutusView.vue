<script setup>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';
</script>

<style scoped></style>

<template>
    <!-- Navbar -->
    <BasicNavbar active="about" />
    <!-- */Navbar -->
</template>

<script>
export default {
    name: "AboutusView",
    data() {
        return {}
    },
    methods: {
        setPageTitle() {
            document.title = "Homello | About Us";
        },
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>
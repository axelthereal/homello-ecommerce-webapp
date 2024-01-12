<script setup>
</script>

<style scoped></style>

<template></template>

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
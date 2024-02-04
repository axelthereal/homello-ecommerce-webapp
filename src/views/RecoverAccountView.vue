<script setup>
import GlobalNavbar from "../components/headerComponents/globalnavbar.vue";
import LinkButton from "../components/btnComponents/GlobalButtons/LinkButton.vue";
</script>

<style scoped></style>

<template></template>

<script>
export default {
    name: "RecoverAccountView",
    methods: {
        setPageTitle() {
            document.title = "Homello | Recover Your Account";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>
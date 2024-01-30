<style scoped>
nav,
.mainbanner {
    background-color: #ffffff !important;
}

input.form-control:focus,
input.form-check-input:focus {
    background-color: #ffffff !important;
    border: 1px solid #0b9768 !important;
}

input.form-check-input:checked {
    background-color: #0b9768 !important;
    border: 1px solid #0b9768 !important;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0) !important;
}

input.form-check-input {
    cursor: pointer;
    box-shadow: none !important;
}

button:active {
    background-color: #214e4e !important;
}

.line {
    height: 2px;
    background-color: #e8ecf0;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->
</template>

<script>
import GlobalNavbar from "../components/headerComponents/globalnavbar.vue";
import LinkButton from "../components/btnComponents/GlobalButtons/LinkButton.vue";

export default {
    name: "LoginView",
    components: {
        GlobalNavbar,
        LinkButton
    }
}
</script>
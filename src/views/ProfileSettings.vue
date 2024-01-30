<script setup>
// import_required_components
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
import LinkButton from "../components/btnComponents/GlobalButtons/LinkButton.vue";
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


    <main>
        <!-- MainBanner -->
        <section class="mainbanner bg-banner py-5 text-center">
            <div class="container py-4">
                <div class="row py-lg-4">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-bold display-5 opacity-80">Settings.</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- ../MainBanner -->


        <!-- profile-settings -->
        <div class="container col-lg-10 col-sm-11 my-5 py-5">
        </div>
        <!-- profile-settings -->

    </main>
</template>

<script>
export default {
    name: "ProfileSettingsView"
}
</script>
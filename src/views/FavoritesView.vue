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

    <!-- MainBanner -->
    <section class="mainbanner bg-banner py-5 text-center">
        <div class="container py-4">
            <div class="row py-lg-4">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-bold display-5 opacity-80">Favorites products.</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- ../MainBanner -->
</template>

<script>
export default {
    name: "FavoritesView"
}
</script>
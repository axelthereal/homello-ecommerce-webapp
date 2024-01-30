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
        <div class="container col-lg-5 col-sm-12 my-5 py-5">
            <!-- Profile-Settings-Item -->
            <div class="settings-item">
                <div class="itemcontent d-flex justify-content-between align-items-center py-2 my-2 border-bottom">
                    <div class="item-desc">
                        <h4 class="fw-bold">Modify your username</h4>
                        <span class="d-block fw-normal text-body-secondary">
                            Click to modify the username diplayed on your profile and all product purchases invoices.</span>
                    </div>
                    <button class="item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1"
                        type="button">Modify <span class="ms-1 bi bi-pencil-square"></span></button>
                </div>

            </div>
            <!-- ...Profile-Settings-Item -->
        </div>
        <!-- profile-settings -->

    </main>
</template>

<script>
export default {
    name: "ProfileSettingsView"
}
</script>
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

.accordion-collapse,
.accordion-item {
    border: none !important;
    border-radius: 0px !important;
}

.btn.bg-success-subtle:hover {
    background-color: #b5cec3 !important;
}

.btn.bg-success-subtle:active {
    background-color: #b4e6d0 !important;
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
            <div class="settings-items accordion" id="settingsItems">

                <!-- Profile-Settings-Item --username -->
                <div class="settings-item accordion-item username-item">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Modify your username</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify the username diplayed on your profile and all product purchases
                                invoices.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserName" aria-expanded="false"
                            aria-controls="editUserName" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserName"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Enter your new username and click save.</span>
                        <div class="form">
                            <input type="text" name="nusername" id="nusername"
                                class="form-control border border-1 rounded rounded-0 my-2"
                                placeholder="Enter a new username...">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --username -->

                <!-- Profile-Settings-Item --email -->
                <div class="settings-item accordion-item email-item">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Edit your email address</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify your email address and add a new one to your account.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserMail" aria-expanded="false"
                            aria-controls="editUserMail" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserMail"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Enter a new email address and click save.</span>
                        <div class="form">
                            <input type="text" name="nmail" id="nmail"
                                class="form-control border border-1 rounded rounded-0 my-2" placeholder="username@mail.com">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --username -->

            </div>
        </div>
        <!-- profile-settings -->

    </main>
</template>

<script>
export default {
    name: "ProfileSettingsView"
}
</script>
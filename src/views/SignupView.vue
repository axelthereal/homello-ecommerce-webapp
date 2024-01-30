<script setup>
// import_required_components
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue"; 
</script>

<style scoped>
nav,
.mainbanner {
    background-color: #ffffff !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- MainBanner -->
    <main class="form-signin w-100 m-auto pt-5">
        <form class="form-bx col-lg-4 col-10 mx-auto p-lg-5 container mt-5">

            <h1 class="display-6 mb-1 fw-bold d-flex align-items-center justify-content-center">Create a new account</h1>
            <p class="w-80 mx-auto d-flex align-items-center justify-content-center opacity-50" align="center">Sign up to
                start shopping securely
                and get access to the best quality home & office products !</p>

            <div class="form-floating my-3">
                <input type="email" class="form-control rounded rounded-0" id="floatingEmail"
                    placeholder="name@example.com">
                <label for="floatingEmail" class="text-muted">Email address</label>
            </div>
            <div class="form-floating my-3">
                <input type="password" class="form-control rounded rounded-0" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword" class="text-muted">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button
                class="btn btn-light bg-color-primary w-100 py-2 text-white fs-5 d-flex align-items-center justify-content-center rounded-0"
                type="submit">Sign
                in</button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
    </main>
    <!-- ../MainBanner -->
</template>

<script>
export default {
    name: "SignupView"
}
</script>
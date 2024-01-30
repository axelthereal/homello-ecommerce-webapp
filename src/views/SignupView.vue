<script setup>
// import_required_components
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue"; 
</script>

<style scoped>
nav,
.mainbanner {
    background-color: #ffffff !important;
}

input.form-control:focus {
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
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- MainBanner -->
    <main class="form-signin w-100 m-auto pt-5">
        <form class="form-bx col-lg-4 col-10 mx-auto p-lg-5 container mt-5">

            <h1 class="display-6 mb-1 fw-bold d-flex align-items-center justify-content-center">Create a new account</h1>
            <p class="w-80 mb-4 mx-auto d-flex align-items-center justify-content-center opacity-50" align="center">Sign up
                to
                start shopping securely
                and get access to the best quality home & office products !</p>
            <div class="form-floating my-3">
                <input type="text" class="form-control rounded rounded-0" id="floatingName" placeholder="ex: elunmusk">
                <label for="floatingName" class="text-muted">User Name</label>
            </div>

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
                class="btn btn-light primary-btn w-100 py-2 text-white d-flex align-items-center justify-content-center rounded-0"
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
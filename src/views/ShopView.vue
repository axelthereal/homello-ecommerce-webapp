<script setup>
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}

#mainbanner .carousel-indicators .btn-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50% !important;
    padding: 0px !important;
    background-color: #265a5a;
}

#mainbanner .carousel-textbx {}

#mainbanner .carousel-img {}

#mainbanner .carousel-img .img {
    max-width: 100%;
    width: 100%;
    height: auto;
}

.mainbanner .carousel-control {
    width: auto;
    opacity: 1.0 !important;
}

.mainbanner .carousel-control .bi {
    color: #0c0c0c !important;
    font-size: 40px;
    display: block;
}

.carousel-item .btn-lg {
    border: 0px solid transparent !important;
    font-size: 18px !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- Main -->
    <main>

        <!-- Main-Lg-Banner -->
        <div class="mainbanner">
            <div id="mainbanner" class="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="0" class="active btn-indicator"
                        aria-label="Slide 1" aria-current="true"></span>
                    <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="1" aria-label="Slide 2"
                        class="btn-indicator"></span>
                    <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="2" aria-label="Slide 3"
                        class="btn-indicator"></span>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active w-100">
                        <div class="container col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Eco Solar Prowered Room Lamp</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img  col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="../assets/images/product-10.png" class="img" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">

                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Example headline. 2</h1>
                                <p class="opacity-75">Some representative placeholder content for the first slide of the
                                    carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">

                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Example headline. 3</h1>
                                <p class="opacity-75">Some representative placeholder content for the first slide of the
                                    carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control carousel-control-prev" type="button" data-bs-target="#mainbanner"
                    data-bs-slide="prev">
                    <span class="bi bi-chevron-left" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control carousel-control-next" type="button" data-bs-target="#mainbanner"
                    data-bs-slide="next">
                    <span class="bi bi-chevron-right" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- ..Main-Lg-Banner -->



    </main>
    <!-- ..Main -->

    <!-- ... -->
</template>

<script>
export default {
    name: "ShopView"
}
</script>
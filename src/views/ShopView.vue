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
    margin: 8px;
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

.mainbanner .carousel-img {
    position: relative;
}

.mainbanner .carousel-img img {
    z-index: 2;
}

.mainbanner .carousel-img::after {
    top: 0;
    left: 0;
    width: 400px !important;
    height: 400px !important;
    content: ".";
    opacity: 0.2;
    border-radius: 50% !important;
    position: absolute;
    background-color: #357979;
    display: block;
    -webkit-transform: translate(15%, 38%);
    -ms-transform: translate(15%, 38%);
    transform: translate(15%, 38%);
    z-index: 1;
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
                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="0" class="active btn-indicator"
                        aria-label="Slide 1" aria-current="true"></button>

                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="1" aria-label="Slide 2"
                        class="btn-indicator"></button>

                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="2" aria-label="Slide 3"
                        class="btn-indicator"></button>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active w-100">
                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Eco Solar Prowered Room Lamp</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img  col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="../assets/images/product-10.png" class="img img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item w-100">

                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Chanel Chair High Quality Wood Made</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img  col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="../assets/images/product-7.png" class="img" alt="" />
                            </div>
                        </div>


                    </div>

                    <div class="carousel-item w-100">

                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Mordern Minimalist Jaguar WallFrame</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img  col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="../assets/images/product-9.png" class="img" alt="" />
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
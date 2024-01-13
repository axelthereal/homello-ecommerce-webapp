<script setup>
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
</script>

<style scoped>
#mainbanner .carousel-indicators .btn {
    width: 15px;
    height: 15px;
    border-radius: 50% !important;
    padding: 0px !important;
    background-color: #265a5a;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- Main -->
    <main>

        <!-- Main-Lg-Banner -->
        <div id="mainbanner" class="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="0" class="active btn"
                    aria-label="Slide 1" aria-current="true"></span>
                <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="1" aria-label="Slide 2"
                    class="btn"></span>
                <span type="button" data-bs-target="#mainbanner" data-bs-slide-to="2" aria-label="Slide 3"
                    class="btn"></span>
            </div>
            <div class="carousel-inner">

                <div class="carousel-item active">

                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline. 1</h1>
                            <p class="opacity-75">Some representative placeholder content for the first slide of the
                                carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
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
            <button class="carousel-control-prev" type="button" data-bs-target="#mainbanner" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mainbanner" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
<script setup>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
</script>

<style scoped> .img-wrap img {
     border-radius: 20px;
 }

 .img-fluid {
     max-width: 100%;
     height: auto;
 }

 img,
 svg {
     vertical-align: middle;
 }

 #features .col-lg-6 {
     position: relative !important;
 }

 #features .grid-sm {
     position: absolute;
     z-index: 1 !important;
     -webkit-transform: translate(-30%, -55%);
     -ms-transform: translate(-30%, -55%);
     transform: translate(-30%, -55%);
     overflow: hidden;
     width: 50%;
 }

 #features .grid-sm img {
     width: 100%;
     max-width: 100%;
     height: 100%;
     object-fit: cover;
 }

 #features .grid-lg {
     z-index: 1 !important;
     overflow: hidden;
     width: 100%;
 }

 #features .grid-lg img {
     max-width: 100%;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }

 #features .icon {
     position: relative;
 }

 #features .icon::after {
     top: 0px;
     width: 38px;
     height: 38px;
     content: "";
     opacity: 0.4;
     border-radius: 50% !important;
     position: absolute;
     background-color: #357979;
     display: block;
     -webkit-transform: translate(50%, 50%);
     -ms-transform: translate(50%, 50%);
     transform: translate(50%, 50%);
     z-index: -1;
 }

 .img-wrap::before {
     position: absolute;
     content: "";
     width: 255px;
     height: 217px;
     background-image: url("../assets/images/dots-light.svg");
     background-repeat: no-repeat;
     background-size: contain;
     -webkit-transform: translate(25%, -25%);
     -ms-transform: translate(25%, -25%);
     transform: translate(25%, -25%);
     z-index: -1;
     right: 0px !important;
 }


 *,
 ::after,
 ::before {
     box-sizing: border-box;
 }
</style>

<template>
    <!-- Navbar -->
    <BasicNavbar active="about" />
    <!-- */Navbar -->

    <!-- Header-Banner -->
    <header class="py-5 bg-color-primary text-white">
        <div class="container px-0 mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-8">
                    <div class="text-center my-5">
                        <h1 class="fw-bolder mb-3">
                            Our mission is to make highquality home and office
                            furnitures easily accesible for everyone.
                        </h1>
                        <p class="lead fw-normal text-white-50 mb-4">Homello Store was built on the idea that high quality,
                            functional and good looking and products should be available and affordable to everyone. Use our
                            platform to search and purchase high quality products.</p>
                        <LinkButton btn-theme="secondary-btn" btn-label="Start shopping Now" btn-url=""
                            btn-icon="arrow-right" outlined="false" class="btn-lg mt-3" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- ../Header-Banner -->

    <!-- Features-header -->
    <section class="py-5" id="features">
        <div class="container px-5 my-5">
            <div class="row justify-content-between align-items-center">
                <!-- Container -->

                <!-- text-bx -->
                <div class="col-lg-5">
                    <div class="header">
                        <h1 class="h1 fw-bolder">Why Choose Us</h1>
                        <p class="fw-normal lead mb-3">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit.
                            Aliquam
                            vulputate
                            velit imperdiet
                            dolor tempor tristique.</p>
                    </div>
                    <div class="row gx-5">
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-truck"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Fast & Free Shipping</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-bag-check"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Easy to Shop</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-headset"></i>
                            </span>
                            <h2 class="h5 fw-bolder">24h/7 Support</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-arrow-repeat"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Hassle Free Returns</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>

                <!-- img-bx -->
                <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="img-wrap">
                        <div class="img-grid grid-lg">
                            <img src="../assets/images/image01.jpg" alt="Image" class="img-fluid">
                        </div>
                        <div class="img-grid grid-sm">
                            <img src="../assets/images/img-grid-6.jpg" alt="Image" class="img-fluid">
                        </div>


                    </div>
                </div>

                <!-- ..Container -->
            </div>
        </div>
    </section>
    <!-- ..Features-header -->


    <!---->
</template>

<script>
export default {
    name: "AboutusView",
    data() {
        return {}
    },
    methods: {
        setPageTitle() {
            document.title = "Homello | About Us";
        },
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>
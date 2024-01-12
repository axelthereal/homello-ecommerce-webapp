<script setup>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
</script>

<style scoped></style>

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
    <section class="py-5 border-bottom" id="features">
        <div class="container px-5 my-5">
            <div class="row justify-content-between align-items-center">
                <!-- Container -->

                <!-- text-bx -->
                <div class="col-lg-6">
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
                            <span><i class="bi bi-collection"></i>
                            </span>
                            <h2 class="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span><i class="bi bi-building"></i>
                            </span>
                            <h2 class="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span><i class="bi bi-toggles2"></i>
                            </span>
                            <h2 class="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span><i class="bi bi-toggles2"></i>
                            </span>
                            <h2 class="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>

                <!-- img-bx -->
                <div class="col-lg-6">
                    <div class="img-wrap">
                        <img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid">
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
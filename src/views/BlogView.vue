<script setup>
// import_required_components
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
</script>


<style scoped>
/* Blog_Style */
.navbar {
    background-color: #fff !important;
}

.mainbanner {
    background-color: #f1f1f1 !important;
}

.bg-banner {
    position: relative;
    overflow: hidden;
}

.bg-banner .banner-img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1 !important;
}

.bg-banner .banner-img img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
}


.bg-banner .banner-blur {
    top: 0;
    left: 0;
    background: #04150f;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    z-index: -1 !important;
}
</style>

<template>
    <!-- -->

    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- MainBanner -->
    <section class="bg-banner py-5 text-center">
        <div class="banner-img">
            <img src="../assets/images/image05.jpg" alt="" srcset="">
        </div>
        <div class="banner-blur"></div>
        <div class="container py-4">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-bold display-3 text-white">Our Blog</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- ../MainBanner -->



    <!-- -->
</template> 


<script>
export default {
    name: "BlogView"
}
</script>
<script setup>
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}

.w-80 {
    width: 80%;
}
</style>

<template>
    <!--   Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!--  -->
    <div class="mainbanner">
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top w-100 mb-5 mb-md-0" src="../assets/images/product-3.png"
                            alt="..."></div>
                    <div class="col-md-6">
                        <div class="small mb-1 opacity-75">CATEGORY</div>
                        <h1 class="display-5 fw-bolder">Product Name</h1>
                        <p class="lead fw-normal mt-4 mb-3 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Praesentium.
                            Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis deftus delectus
                            ipsam minima ea iste laborum vero?</p>

                        <div class="fs-1 mb-5 d-flex gap-1 flex-column align-items-start">
                            <span class="fw-bold">$45.00</span>
                            <span class="fs-6 fw-semibold d-block opacity-75">regular price <span
                                    class="text-decoration-line-through fw-bold">$40.00</span></span>
                        </div>

                        <div class="d-flex my-3 gap-2 prod-link fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label text-success"><span class="bi bi-box2"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold small ms-1"><a href="" class="">
                                    <span class="text-black"> IN STOCK, ORDER IT NOW ONLINE <br>
                                        <span class="text-decoration-underline opacity-50 small-xl">WITH FAST
                                            DELIVERY</span></span></a></span>
                        </div>

                        <div class="d-flex my-3 gap-2 prod-link fw-normal  fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label"><span class="bi bi-star text-danger"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold opacity-75 small"><a href="" class="">
                                    <span class="text-danger">4.8 (20)</span>
                                    <span class="text-decoration-underline text-black"> WRITE A REVIEW</span></a></span>
                        </div>

                        <div class="d-flex my-3 gap-2 small prod-link fw-normal  fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label"><span class="bi bi-heart"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold"><a href="" class="text-black-50">ADD TO WISHLIST</a></span>
                        </div>

                        <div class="d-flex mt-5">
                            <input class="form-control text-center me-3 border border-success shadow-none"
                                id="inputQuantity" type="num" value="1" style="max-width: 3rem">

                            <!-- LinkButton -->
                            <LinkButton btn-theme="primary-btn" btn-label="Add to Cart" btn-url="" btn-icon="cart"
                                outlined="false" class="btn-lg fw-semibold w-50" />
                        </div>






                    </div>
                </div>
            </div>
        </section>
    </div>
    <!--  -->
</template>


<script>
export default {
    name: "ProductView"
}
</script>
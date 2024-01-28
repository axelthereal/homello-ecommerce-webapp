<script setup>
// import_required_components
import GlobalNavbar from "../components/headerComponents/GlobalNavbar.vue";
</script>

<style>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
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
                        <h1 class="fw-bold display-5 opacity-80">Shopping Cart.</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- ../MainBanner -->

        <!-- Products-List -->
        <div class="container col-lg-10 col-sm-11 my-5 py-5">
            <!-- Title::: -->
            <div class="row mt-3 text-center py-1 border-bottom border-black">
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Image</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Product</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Price</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Quantity</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Total</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Delete</div>
            </div>
            <!-- ...Title::: -->

            <!-- Product-Item -->
            <div class="product-item row text-center border-bottom d-flex align-items-stretch justify-content-between">
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    <img src="../assets/images/product-3.png" class="w-100" alt="Product-img">
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    Chair-product</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">15$
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-between align-items-stretch gap-1">
                        <input type="text" name="" class="form-control" value="1" id="">
                        <button class="btn btn-light border" type="button"><span class="bi bi-plus-lg"></span></button>
                    </div>
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">45$
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    <span class="cursor-p bi bi-trash3 fs-4"></span>
                </div>
            </div>
            <!-- ...Product-Item -->



        </div>
        <!-- ..Products-List -->


    </main>
</template>

<script>
export default {
    name: "ShoppingcartView"
}
</script>
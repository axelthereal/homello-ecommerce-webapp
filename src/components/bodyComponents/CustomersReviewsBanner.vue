<style scoped>
/* Round-carousel-btn */
button.round-carousel-btn {
    width: 13px;
    height: 13px;
    border-radius: 50% !important;
}
</style>

<template>
    <!-- Customer-Reviews-Component -->
    <div class="reviews-banner py-4 my-4">

        <div class="container bg-color-secondary p-4 my-5 rounded rounded-1">
            <div class="row row-cols-1 row-cols-lg-2 py-4 ps-lg-4 align-items-center">
                <div class="banner-desc col-11 col-lg-5">
                    <h2 class="color-primary">What they say about us</h2>
                    <p class="fs-5 color-black opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam sit veniam cumat, gotask atque.
                    </p>
                    <LinkButton btn-theme="primary-btn" btn-label="Leave a review" btn-url="" btn-icon="chat-right-text"
                        outlined="true" class="btn-lg mt-3" />
                </div>

                <div class="reviews col-11 col-lg-7">
                    <!-- CUSTOMERS-REVIEWS... -->
                    <div id="myCarousel" class="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                                class="round-carousel-btn bg-color-primary" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                                class="round-carousel-btn bg-color-primary"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                                class="round-carousel-btn bg-color-primary active" aria-current="true"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item">

                                <div class="container">
                                    <ReviewsComponent class="w-75" />
                                </div>
                            </div>
                            <div class="carousel-item">

                                <div class="container">
                                    <ReviewsComponent class="w-75" />
                                </div>
                            </div>
                            <div class="carousel-item active">

                                <div class="container">
                                    <ReviewsComponent class="w-75" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ...End-CUSTOMERS-REVIEWS... -->

                </div>
            </div>

        </div>
    </div>
    <!-- */Customer-Reviews-Component -->
</template>


<script>
import ReviewsComponent from '../productsComponent/ReviewsComponent.vue';
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';

export default {
    name: "CustomersReviewsBanner",
    data() {
        return {
        }
    },
    components: {
        ReviewsComponent,
        LinkButton
    }
}
</script>
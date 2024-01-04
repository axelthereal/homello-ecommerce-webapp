<style scoped>
.review-img {
    width: 70px !important;
    height: 70px !important;
    border-radius: 50% !important;
    object-fit: cover;
}

button.round-carousel-btn {
    width: 13px;
    height: 13px;
    border-radius: 50% !important;
}
</style>

<template>
    <!-- CUSTOMERS REVIEWS... -->
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
                    <div class="review-item my-3 text-center w-75 mx-auto mb-5 pb-3">

                        <img src="../assets/images/girl-customer-service-image.jpg" class="mx-auto  review-img" alt="" />
                        <p class="opacity-80 my-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe dolorem ducimus
                            consectetur laudantium! Aperiam vero praesentium in odio sunt? Eum recusandae eligendi earum cum
                            id perspiciatis eaque sint quas?
                        </p>
                        <h5>Client Name</h5>
                        <span class="fw-semibold small opacity-50">Country</span>

                    </div>
                </div>
            </div>
            <div class="carousel-item">

                <div class="container">
                    <ReviewComponent class="w-75" />
                </div>
            </div>
            <div class="carousel-item active">

                <div class="container">
                    <div class="review-item my-3 text-center w-75 mx-auto mb-5 pb-3">

                        <img src="../assets/images/girl-customer-service-image.jpg" class="mx-auto  review-img" alt="" />
                        <p class="opacity-80 my-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe dolorem ducimus
                            consectetur laudantium! Aperiam vero praesentium in odio sunt? Eum recusandae eligendi earum cum
                            id perspiciatis eaque sint quas?
                        </p>
                        <h5>Client Name</h5>
                        <span class="fw-semibold small opacity-50">Country</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ...End CUSTOMERS REVIEWS... -->
</template>


<script>
import ReviewComponent from '../productsComponent/ReviewComponent.vue';


export default {
    name: "ReviewsBanner",
    data() {
        return {
        }
    },
    components: {
        ReviewComponent
    }
}
</script>
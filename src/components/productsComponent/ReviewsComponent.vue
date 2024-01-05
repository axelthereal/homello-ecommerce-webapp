<style scoped>
.review-img {
    width: 70px !important;
    height: 70px !important;
    border-radius: 50% !important;
    object-fit: cover;
}
</style>

<template>
    <!-- ReviewsComponent -->
    <div class="review-item my-3 text-center mx-auto mb-5 pb-3">

        <img src="../../assets/images/girl-customer-service-image.jpg" class="mx-auto  review-img" alt="" />
        <p class="opacity-80 my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe dolorem ducimus
            consectetur laudantium! Aperiam vero praesentium in odio sunt? Eum recusandae eligendi earum cum
            id perspiciatis eaque sint quas?
        </p>
        <h5>Client Name</h5>
        <span class="fw-semibold small opacity-50">Country</span>

    </div>
</template>


<script>
export default {
    name: "ReviewsComponent",
    data() {
        return {

        }
    }
}
</script>
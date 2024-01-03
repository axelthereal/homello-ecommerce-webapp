<script setup>
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';
</script>

<style scoped>
/* Image Banner Style */
.mdImgBanner {
    position: relative;
}

.mdImgBanner .bannerCaption {
    position: relative;
    z-index: 2 !important;
}

.mdImgBanner .bannerImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1 !important;
    overflow: hidden !important;
}

.mdImgBanner .bannerImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2 !important;
}
</style>

<template>
    <div class="mdImgBanner w-100 m-2">
        <div class="bannerCaption p-5">
            <h3 class="fs-2 fw-semibold">Banner title</h3>
            <p class="fs-4">Banner desc title</p>
            <LinkButton btn-theme="primary-btn" btn-label="Discover now" btn-url="" btn-icon="arrow-right" outlined="false"
                class="btn-lg mt-3" />
        </div>
        <div class="bannerImage">
            <img src="../../assets/images/product" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "MediumImageBanner"
        }
    }
}
</script>
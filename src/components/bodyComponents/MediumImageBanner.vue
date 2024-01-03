<script setup>
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';
</script>

<style scoped>
/* Image Banner Style */
.mdImgBanner {
    display: relative;
}

.mdImgBanner .bannerImage {}

.mdImgBanner .bannerImage img {}
</style>

<template>
    <div class="mdImgBanner">
        <div class="bannerCaption">
            <h3 class="fs-2 fw-semibold">Banner title</h3>
            <p class="fs-4">Banner desc title</p>
            <LinkButton btn-theme="primary-btn" btn-label="Discover now" btn-url="" btn-icon="arrow-right" outlined="false"
                class="btn-lg mt-3" />
        </div>
        <div class="bannerImage">
            <img src="../../assets/images/63ee15346d25e11b0e0148b0_hero-bg.jpg" alt="" srcset="">
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
<style scoped></style>

<template>
    <!-- Blog-article-Component -->
    <div class="tranding-products-bx">
        <div class="container">
            <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between align-items-center">
                <span class="fs-2 fw-semibold">Latest from our blog</span>
                <span class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-between align-items-center">
                    <a href="" class="link-primary"><span class="banner-nav-item">View all <span
                                class="bi bi-arrow-right ms-2"></span></span></a>
                </span>
            </div>

            <div class="content row row-cols-1 row-cols-lg-4 align-items-stretch">
                <!-- ProductItem-Cards -->
                <BlogArticleCard class="col-11 col-lg-3" />
                <BlogArticleCard class="col-11 col-lg-3" />
                <BlogArticleCard class="col-11 col-lg-3" />
                <BlogArticleCard class="col-11 col-lg-3" />
                <!-- */ProductItem-Cards -->
            </div>
        </div>
    </div>

    <!-- */BlogArticles-Component -->
</template>

<script>
import BlogArticleCard from './BlogArticleCard.vue';

export default {
    name: "BlogArticlesBanner",
    components: {
        BlogArticleCard
    }
}
</script>
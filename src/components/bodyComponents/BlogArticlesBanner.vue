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

            <div class="content row row-cols-1 row-cols-lg-4  align-items-stretch justify-content-evenly">
                <!-- ProductItem-Cards -->
                <BlogArticleCard :title="tmpTitle" :date="tmpDate" category="Tutorials" author="Admin"
                    img="../../src/assets/cloud/article-img-01.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle" :date="tmpDate" category="Tutorials" author="Admin"
                    img="../../src/assets/cloud/article-img-02.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle" :date="tmpDate" category="Tutorials" author="Admin"
                    img="../../src/assets/cloud/article-img-03.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle" :date="tmpDate" category="Tutorials" author="Admin"
                    img="../../src/assets/cloud/article-img-01.jpg" class="col-11 d-block col-lg-3" />
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
    data() {
        return {
            tmpTitle: "This card has supporting text below as a natural lead-in to additional content",
            tmpDate: "Jan 04, 2024",
        }
    },
    components: {
        BlogArticleCard
    }
}
</script>
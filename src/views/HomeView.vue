<style scoped>
@media only screen and (max-width: 1015px) {
  .main .mainbanner {
    margin-top: 72px !important;
  }
}

.main .mainbanner {
  margin-top: 78px;
  background: #265a5a !important;
}

.icon-img {
  max-width: 30%;
  height: auto;
}

.carousel-btn {
  max-width: 45px;
}

.carousel-btn .btn {
  width: 40px;
  height: 40px;
  border-radius: 50% !important;
  font-size: 20px;
}



.newproducts-banner .carousel-item {
  padding-left: 50px;
  padding-right: 50px;
}

.banner-nav .banner-nav-item {
  padding: 0px 15px 0px 15px;
}

.banner-nav .banner-nav-item.active {
  opacity: 0.6;
}

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
  <!-- Navbar -->
  <BasicNavbar active="home" />

  <!-- Main  -->
  <main class="main">

    <!-- Main-Banner -->
    <div class="mainbanner mb-0 py-5 my-5 d-flex align-items-center">
      <div class="container py-5 my-5">
        <div class="bannercontent text-white row row-cols-1 row-cols-lg-2 align-items-stretch">

          <div class="content col">
            <h1 class="display-3 fw-semibold">Modern & Unique Home Furnitures.</h1>
            <p class="lead opacity-75">Fill your home with furniture that brings you
              comfort as soon as you walk in the door.</p>
            <LinkButton btn-theme="secondary-btn" btn-label="Explore Now" btn-url="" btn-icon="arrow-right"
              outlined="false" class="btn-lg mt-3" />
          </div>

          <div class="banner-image col">
            <img src="../assets/images/couch.png" class="w-100" alt="">
          </div>

        </div>
      </div>
    </div>


    <!-- Double - Images-Banner -->
    <div class="middle-image-banner bg-color-primary">
      <div class="container bg-color-secondary p-4">
        <div class="row row-cols-1 row-cols-lg-2 align-items-stretch">
          <div class="col">
            <MediumImageBanner banner-title="Apparels Collection" banner-description="Homello Furniture"
              banner-image="src/assets/images/sli-h1.webp" />
          </div>
          <div class="col">
            <MediumImageBanner class="col-4" banner-title="Chair Collection" banner-description="Homello Furniture"
              banner-image="src/assets/images/slide-2.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- PositivePoints-Banner -->
    <div class="positive-points bg-color-secondary">
      <div class="container px-4 py-5">
        <div class="row g-4 py-2 row-cols-1 row-cols-lg-4">

          <div class="feature col p-5 color-primary" align="center">
            <img class="icon-img" src="../assets/images/icon-1-delivery.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">FREE DELIVERY</p>
            <span class="fw-semibold color-black">Free delivery for all products</span>
          </div>
          <div class="feature col p-5 color-primary" align="center">
            <img class="icon-img" src="../assets/images/icon-1-save-the-world.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">ECOFRIENDLY</p>
            <span class="fw-semibold color-black">Ecofriendly and premium furnitures</span>
          </div>
          <div class="feature col p-5 color-primary" align="center">
            <img class="icon-img" src="../assets/images/icon-1-return-on-investment.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">MONEY RETURN</p>
            <span class="fw-semibold color-black">Money return for all registred clients</span>
          </div>

          <div class="feature col p-5 color-primary" align="center">
            <img class="icon-img" src="../assets/images/icon-1-support.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">SUPPORT 24/7</p>
            <span class="fw-semibold color-black">Available customer support</span>
          </div>
        </div>
        <span class="d-block pb-2 border-1 border-secondary opacity-25 border-bottom col-11 mx-auto"></span>
        <div class="col-lg-9 mx-auto mt-5" align="center">
          <p class="display-5 fw-semibold color-primary">
            There's something amazing about our environmentally friendly materials,
            and it's not just how amazing they look.</p>
        </div>
      </div>
    </div>


    <!-- New-Products Banner-display -->
    <div class="newproducts-banner my-5 py-5">
      <div class="container px-4 py-5 my-5">
        <div class="row row-cols-1 row-cols-lg-2 align-items-center">

          <!-- Banner-Description -->
          <div class="banner-desc col-12 col-lg-4">
            <h3 class="fs-2 fw-semibold">New in our store</h3>
            <p class="fs-4">Discover some of our newest premium furnitures, at the cheapest rates possible </p>

            <LinkButton btn-theme="secondary-btn" btn-label="Discover Now" btn-url="" btn-icon="arrow-right"
              outlined="false" class="btn-lg mt-3" />
          </div>

          <!-- Products-Box -->
          <div class="products-bx col-12 col-lg-8">
            <div id="newProductsCarousel" class="carousel slide" data-bs-ride="carousel">

              <div class="carousel-inner">

                <div class="carousel-item active">
                  <div class="products-list row row-cols-1 row-cols-lg-3 align-items-stretch">
                    <ProductItemCard class="col-11 col-lg-4" />
                    <ProductItemCard class="col-11 col-lg-4" />
                    <ProductItemCard class="col-11 col-lg-4" />
                  </div>
                </div>

                <div class="carousel-item">
                  ...
                </div>

                <div class="carousel-item">
                  ...
                </div>

              </div>

              <span class="carousel-btn carousel-control-prev" type="button" data-bs-target="#newProductsCarousel"
                data-bs-slide="prev">
                <span class="btn text-white bg-success d-flex justify-content-center align-items-center">
                  <span class="bi bi-arrow-left" aria-hidden="true"></span>
                </span>
              </span>
              <span class="carousel-btn carousel-control-next" type="button" data-bs-target="#newProductsCarousel"
                data-bs-slide="next">
                <span class="btn text-white bg-success d-flex justify-content-center align-items-center">
                  <span class="bi bi-arrow-right" aria-hidden="true"></span>
                </span>
              </span>

            </div>
          </div>


        </div>
      </div>
    </div>
    <!-- ...endProductSlider -->

    <!-- Trending Product List -->
    <div class="tranding-products-bx">
      <div class="container">
        <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between align-items-center">
          <span class="fs-2 fw-semibold">Best selling</span>
          <span class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-between align-items-center">
            <a href="" class="link-primary"><span class="banner-nav-item active">All Products</span></a>
            <a href="" class="link-primary"><span class="banner-nav-item">Accessories</span></a>
            <a href="" class="link-primary"><span class="banner-nav-item">Chair</span></a>
            <a href="" class="link-primary"><span class="banner-nav-item">Decoration</span></a>
            <a href="" class="link-primary"><span class="banner-nav-item">Furniture</span></a>
            <a href="" class="link-primary"><span class="banner-nav-item">Tables</span></a>
          </span>
        </div>
        <div class="content row row-cols-1 row-cols-lg-4 align-items-stretch">
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
        </div>
      </div>
    </div>


    <!-- addBanner -->
    <div class="addBanner my-5 py-5">
      <div class="container">
        <MediumImageBanner banner-title="50% OFF Interior Collection"
          banner-description="Free shipping over 115$ for international orders"
          banner-image="src/assets/images/sli-h1.webp" class="py-5" />
      </div>
    </div>



    <!-- Latest arrivals Product List -->
    <div class="tranding-products-bx">
      <div class="container">
        <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between align-items-center">
          <span class="fs-2 fw-semibold">Latest Arrivals</span>
        </div>
        <div class="content row row-cols-1 row-cols-lg-4 align-items-stretch">
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
          <ProductItemCard class="col-11 col-lg-3" />
        </div>
      </div>
    </div>


    <!-- Customers-Testimonials -->
    <div class="reviews-banner py-4 my-4">
      <div class="container bg-color-secondary p-4 my-5 rounded rounded-1">
        <div class="row row-cols-1 row-cols-lg-2 py-4 ps-lg-4 align-items-center">
          <div class="banner-desc col-11 col-lg-5">
            <h1 class="color-primary">What they say about us</h1>
            <p class="fs-5 color-black opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam sit
              veniam cumat, gotask atque.
            </p>
            <LinkButton btn-theme="primary-btn" btn-label="Leave a review" btn-url="" btn-icon="chat-right-text"
              outlined="true" class="btn-lg mt-3" />
          </div>

          <div class="reviews col-11 col-lg-7">

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
            <!-- ...CUSTOMERS REVIEWS... -->



          </div>
        </div>
      </div>
    </div>


    <br>
  </main>
</template>

<script>
import BasicNavbar from '../components/headerComponents/BasicNavbar.vue';
import LinkButton from '../components/btnComponents/GlobalButtons/LinkButton.vue';
import MediumImageBanner from '../components/bodyComponents/MediumImageBanner.vue';
import ProductItemCard from '../components/productsComponent/ProductItemCard.vue';

export default {
  name: "HomeView",
  data() {
    return {
    }
  },
  methods: {
    setPageTitle() {
      document.title = "Homello | Home";
    }
  },
  components: {
    BasicNavbar,
    LinkButton,
    MediumImageBanner,
    ProductItemCard
  },
  beforeMount() {
    this.setPageTitle()
  }
}
</script>
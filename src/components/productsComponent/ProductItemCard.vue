<style scoped>
.product-card {
  position: relative;
}

.product-card .card-img {
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #dcdbe0 !important;
}

.product-card .card-img img {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>

<template>
  <div class="product-card">
    <div class="card-img py-5">
      <img src="../../assets/images/product-3.png" alt="" />
    </div>
    <div class="card-body py-3 d-flex flex-column align-items-between justify-content gap-2">
      <span class="product-info d-flex justify-content-between align-items-center">
        <span class="product-category opacity-50 small">Decor</span>
        <span class="product-rating small">...</span>
      </span>
      <span class="product-name fs-6 fw-semibold">
        Cillum dolore Lorem ipsum dolor sit amet decoration item</span>
      <span class="product-price fs-6">
        <span class="act-price color-primary fw-bold">$100</span>
        <span class="cans-price ms-3"><s>$120.00</s></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItemCard",
  data() {
    return {
    }
  }
}
</script>
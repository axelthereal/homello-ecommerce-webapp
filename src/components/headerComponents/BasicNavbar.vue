<style scoped></style>

<template>
  <nav class="navbar py-3 navbar-expand-lg navbar-default bg-default nav-primary fixed-top"
    aria-label="Offcanvas navbar large">
    <div class="container">
      <a class="navbar-brand fw-semibold fs-5 text-white" href="#">Homello</a>
      <button class="navbar-toggler border-0 fs-1 shadow-none" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBasicNavbar1" aria-controls="offcanvasBasicNavbar1" aria-label="Toggle navigation">
        <span class="icon"><i class="bi bi-list"></i></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark bg-color-primary" tabindex="-1" id="offcanvasBasicNavbar1"
        aria-labelledby="offcanvasBasicNavbar1Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBasicNavbar1Label">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end align-items-sm-start align-items-lg-center flex-grow-1 pe-3">
            <span v-for="navlink in navLinksList">
              <li class="nav-item">
                <a :class="`nav-link fs-6` + isIndexActive(navlink)" aria-current="page" :href="navlink.url">{{
                  navlink.label }}</a>
              </li>
            </span>
            <li class="nav-item ms-lg-5">
              <a class="nav-link fs-5" href=""><span class="icon"><i class="bi bi-cart"></i></span></a>
            </li>
            <LinkButton btn-theme="light-btn" btn-label="Login / Register" btn-url="" btn-icon="person" outlined="true"
              class="nav-link" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';

export default {
  name: "BasicNavbar",
  data() {
    return {
      navLinksList: [
        {
          tag: "home",
          isActive: true,
          url: "",
          label: "Home"
        },
        {
          tag: "furnitures",
          isActive: false,
          url: "",
          label: "Furnitures"
        },
        {
          tag: "about",
          isActive: false,
          url: "",
          label: "About us"
        },
        {
          tag: "services",
          isActive: false,
          url: "",
          label: "Services"
        },
        {
          tag: "Blog",
          isActive: false,
          url: "",
          label: "Blog"
        },
        {
          tag: "contact",
          isActive: false,
          url: "",
          label: "Contact us"
        }
      ]
    }
  },
  props: {
    active: {
      type: String,
      default: "home"
    }
  },
  methods: {
    isIndexActive(e) {
      return e.tag == this.active ? " active" : "";
    }
  },
  components: {
    LinkButton
  }
}
</script>

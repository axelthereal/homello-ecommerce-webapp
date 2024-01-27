import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutusView from "../views/AboutusView.vue";
import ShopView from "../views/ShopView.vue";
import ProductView from "../views/ProductView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/BlogView.vue";

/* Create router... */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutusView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    ,
    {
      path: "/product",
      name: "product",
      component: ProductView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

/* export router function */
export default router;

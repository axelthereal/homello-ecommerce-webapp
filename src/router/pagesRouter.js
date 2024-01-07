import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

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
  ],
});

/* export router function */
export default router;

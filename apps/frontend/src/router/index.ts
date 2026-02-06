import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("../views/ForgotPassword.vue"),
    },
  ],
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import HomeSignup from "../views/HomeSignup.vue";
import HomeLogin from "../views/HomeLogin.vue";
import UserPostView from "../views/UserPostView.vue";

import UserProfil from "../views/UserProfil.vue";
import UserMyProfil from "../views/UserMyProfil.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: HomeSignup,
  },
  {
    path: "/login",
    name: "Login",
    component: HomeLogin,
  },
  {
    path: "/allpost",
    name: "AllPost",
    component: UserPostView,
  },

  {
    path: "/profil",
    name: "Profil",
    component: UserProfil,
  },
  {
    path: "/myprofil",
    name: "MyProfil",
    component: UserMyProfil,
  },

];

const router = new VueRouter({
  routes,
});

export default router;

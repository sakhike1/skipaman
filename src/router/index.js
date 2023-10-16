import { createRouter, createWebHistory } from "vue-router";
import ProductsList from "../pages/ProductsList.vue";
import UserCart from "../pages/UserCart.vue";
import SignUp from "../components/Header/SignUp.vue";
import CreateAccount from "../components/Header/CreateAccount.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/SignUp", component: SignUp },
    { path: "/CreateAccount", component: CreateAccount },
  ],
});

export default router;

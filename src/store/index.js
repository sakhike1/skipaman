import { createStore } from "vuex";

import productsModule from "./modules/products.js";
import cartModule from "./modules/cart.js";

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      counter: 0,
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      // Check if the product is already in the cart
      const existingProduct = state.cartItems.find(item => item.productId === product.productId);
      if (existingProduct) {
        // If it exists, update the quantity
        existingProduct.qty += product.qty;
      } else {
        // If it doesn't exist, add it to the cart
        state.cartItems.push(product);
      }
      
    },
    removeFromCart(state, productId) {
      // Remove the product from the cart based on its productId
      state.cartItems = state.cartItems.filter(item => item.productId !== productId);
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
    cartTotalItems(state) {
      // Calculate and return the total number of items in the cart
      return state.cartItems.reduce((total, item) => total + item.qty, 0);
    },
    cartTotalPrice(state) {
      // Calculate and return the total price of items in the cart
      return state.cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    }
  },
});

export default store;

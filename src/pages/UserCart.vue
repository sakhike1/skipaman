<template>
  <section>
    <ul v-if="cartItems.length > 0">
      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Order details</h2>
      <!-- Check if cartItems array is not empty -->
      <cart-item v-for="item in cartItems" :key="item.productId" :prod-id="item.productId" :title="item.title"
        :image="item.image" :price="item.price" :qty="item.qty"></cart-item>
    </ul>

    <NoItem v-else></NoItem>
  </section>
  <router-view />
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';
import NoItem from '@/components/Ul/NoItem.vue';

export default {
  components: {
    CartItem,
    NoItem
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    },
    hasCoaches() {
      return this.cartItems.length > 0; // Check if cartItems array is not empty
    }
  }
};
</script>

<style scoped>
section {

  max-width: 100%;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

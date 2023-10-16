<template>
  <LatestSkipas />
  <div class="bg-gray-200">

    <div class="grid grid-cols-3 p-40 grid-rows-4 gap-11">
      <product-item v-for="prod in products" :key="prod.id" :id="prod.id" :SummerVibes="prod.SummerVibes"
        :image="prod.image" :textFromParent="prod.textFromParent" :wasAmount="prod.wasAmount"></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import LatestSkipas from '../components/Ul/LatestSkipas.vue';


export default {
  components: {
    ProductItem,
    LatestSkipas

  },
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
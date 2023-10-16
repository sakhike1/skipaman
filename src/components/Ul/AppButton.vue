<template>
    <div class="px-8 pt-4 ml-10 pb-2">
        <button @click="addToCart"
            class="inline-block border-2 border-gray-300 rounded-full bg-gray-200 ml-[-220px] px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-gradient-to-r from-rose-100 to-teal-100">
            Add to Cart
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        addToCart() {
            this.$store.dispatch('cart/addToCart', {
                id: this.id,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>

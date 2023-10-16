<template>
    <div class="bg-gray-200">
        <TextHeader />
        <div class="grid grid-cols-3 p-40 grid-rows-4 gap-11">
            <CardApp v-for="(item, index) in cardData" :key="index" :images="item.images" :childText="item.textFromParent"
                :SummerVibes="item.SummerVibes" :WasAmount="item.WasAmount" />
        </div>
    </div>
</template>
  
<script>

export default {
    props: ['id', 'image', 'WasAmount', 'SummerVibes', 'textFromParent'],
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
  
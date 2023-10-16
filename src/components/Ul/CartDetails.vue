<template>
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="(image, index) in images" :key="index">
            <router-link :to="getCartDetailsLink(index)">
                <img class="w-full" :src="image" alt="Card Image" />
            </router-link>
            <app-button> </app-button>
            <!-- Rest of your component -->
        </div>
    </div>
</template>
  
<script>
import AppButton from '@/components/UI/AppButton';


export default {
    props: ['textFromParent', 'SummerVibes', 'WasAmount', ' images',],
    components: { AppButton },

    methods: {
        addToCart() {
            this.$store.dispatch('cart/addToCart', {
                id: this.id,
            });
        },
    },
};
</script>
  
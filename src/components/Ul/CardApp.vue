<template>
    <div class="card bg-base-100 shadow-xl" v-for="(image, index) in images" :key="index">
        <a :href="getImageLink(index)">
            <img class="w-full" :src="image" alt="Card Image" />
        </a>
        <div class="card-body">
            <div class="px-6 py-4 bg-gradient-to-r from-rose-100 to-teal-100">
                <div class="font-bold text-[14px] text-left mb-2">{{ SummerVibes }}</div>
                <div class="text-left text-xs">
                    <span class="line-through">{{ WasAmount }}</span>
                    <span class="text-green-400">R261.75</span><br />
                    25% OFF
                </div>
                <StarRating />
                <p class="text-gray-700 text-left text-xs">
                    {{ childText }}
                </p>
                <!-- Use flexbox to move the button to the left -->

                <AppButton />

            </div>

        </div>
    </div>
</template>
  

<script>
import AppButton from '@/components/UI/AppButton';
import StarRating from '@/components/UI/StarRating';
export default {
    props: {
        images: Array, // Accepts an array of image URLs
        childText: String,
        SummerVibes: String,
        WasAmount: String, ///
    },
    components: {
        AppButton,
        StarRating
    },
    methods: {
        getImageLink(index) {
            // Define the URL for each image based on its index or other criteria
            // For example, you can use a computed property or a method to generate the link
            return `/CartDetails/${index}`; // Change this to your actual URL structure
        },
    },
};
</script>

<style lang="scss" scoped></style>
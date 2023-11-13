<template>
    <div class="mx-auto">
        <SalesText />
        <InfiniteSlider />
        <section class="overflow-hidden shadow-lg p-4 md:p-8 bg-gray-200">
            <div class="flex flex-col w-[80%] md:flex-row mx-auto">
                <div :style="{ backgroundColor: color }" class="p-4 sm:p-8 lg:p-16 flex-grow">
                    <div class="text-center pt-7 sm:text-left rtl:sm:text-right">
                        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
                            Latest skipas
                        </h2>
                        <p class="text-xs max-w-lg text-black mt-4 md:mt-6 md:block md:leading-relaxed">
                            High-quality t-shirts made from durable fabrics will ensure that your favorite tees remain
                            comfortable and stylish for a long time, providing excellent value for your money.
                        </p>
                        <div class="mt-4 sm:mt-8">
                            <a href="#" @click="randomColor"
                                class="inline-block rounded-full bg-green border border-gray-900   px-4 sm:px-12 py-3 text-sm font-medium hover:text-black hover:border-white transition  ">
                                Get your cool now!
                            </a>


                        </div>
                    </div>
                </div>
                <div class="bg-black">
                    <img :src="currentImage" alt="Your Image" class="w-[400px] h-[350px] object-cover" />
                </div>
            </div>
            <SpinningText />
        </section>
    </div>
</template>
  
<script>
import SalesText from '@/components/Ul/SalesText.vue'
import InfiniteSlider from '@/components/Ul/InfiniteSlider.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const imageSources = [
            require('@/assets/nice112.png'),
            require('@/assets/nicer11.png'),
            require('@/assets/kpi.png'),
            // Add more image sources as needed
        ];

        const currentImageIndex = ref(0); // Start with the first image
        let autoPlayTimer = null; // Initialize the auto-play timer

        const currentImage = ref(imageSources[currentImageIndex.value]);

        const startAutoPlay = () => {
            // Set the interval (in milliseconds) for auto-play
            const interval = 3000; // 3 seconds
            autoPlayTimer = setInterval(changeImage, interval);
        };

        const changeImage = () => {
            // Increment the currentImageIndex to change the image
            currentImageIndex.value = (currentImageIndex.value + 1) % imageSources.length;
            currentImage.value = imageSources[currentImageIndex.value];
        };

        const color = ref('#60a6a1');

        const randomColor = () => {
            const colors = ['#d5abd6', 'orange', 'yellow', '#b0bad6', '#9c4fe0', '#63e6a8', '#9ce04f']
            color.value = colors[Math.floor(Math.random() * colors.length)]
        };

        onMounted(() => {
            startAutoPlay();
            setInterval(randomColor, 3000);
        });

        onBeforeUnmount(() => {
            clearInterval(autoPlayTimer);
        });

        return {
            color,
            currentImage,
            randomColor,
        };
    },
    components: {
        SalesText,
        InfiniteSlider,

    },
};
</script>
  
<style  scoped>
.inline-block:hover {
    opacity: 1;
}

.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}
</style>
  
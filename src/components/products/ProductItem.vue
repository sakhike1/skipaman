<template>
    <div class="centered-component">
        <div v-motion-slide-visible-once-top>
            <div class="max-w-sm rounded   overflow-hidden shadow-lg">
                <div class="bg-black">

                    <div class="nakhoke"> <!-- Change the background color class here -->
                        <img :src="image" :alt="title" />
                    </div>
                </div>
                <div class="px-6 py-4 bg-gradient-to-r from-rose-100 to-teal-100">
                    <div class="font-bold text-[14px] text-left mb-2">{{ SummerVibes }}</div>
                    <div class="text-left text-xs">
                        <span class="line-through text-black mr-5">{{ WasAmount }}</span>
                        <span class="text-green-400">{{ prices }}</span><br />
                        25% OFF
                    </div>
                    <p class="text-gray-700 text-left text-xs">
                        {{ textFromParent }}
                    </p>
                    <StarRating />

                    <div class="flex justify-center">
                        <button
                            class="inline-block p-10 border-2 border-gray-300 rounded-full bg-green px-12 py-3 text-sm font-medium text-black hover:text-black hover:bg-gradient-to-r from-rose-100 to-teal-100"
                            @click="addToCart">Add to Cart {{ counter }}
                        </button>

                        <MessageComponent ref="messageComponent"></MessageComponent>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import StarRating from '../Ul/StarRating.vue';
import MessageComponent from '@/components/Ul/MessageComponent.vue.vue';


export default {
    components: {
        StarRating,
        MessageComponent,

    },
    props: ['id', 'image', 'WasAmount', 'SummerVibes', 'textFromParent', 'prices', 'qty'],
    methods: {
        addToCart() {
            console.log(this.props);

            let product = {
                id: this.id, // Change to your product ID property
            };
            this.$store.commit('cart/addToCart', product);

            this.$refs.messageComponent.showMessageAlert("Item added to cart!");
            this.$store.dispatch('cart/addToCart', {
                id: this.id,


            });
            this.$store.state.counter++;
        },

        computed: {
            counter() {
                return this.$store.state.counter
            }

        },
        data() {
            return {
                counter: 0,
                message: "", // Initialize the message as an empty string
            };
        },
    }


};
</script>

<style scoped>
.centered-component {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.nakhoke {
    background-color: rgb(235, 235, 243);
}
</style>
  

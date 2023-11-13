<template>
    <div class=" h-screen py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-2xl text-left font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-3/4">
                    <div class="bg-gradient-to-r from-rose-100 to-teal-100 rounded-lg shadow-md p-4 mb-4">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="text-left font-semibold">Product</th>
                                    <th class="text-left font-semibold">Price</th>
                                    <th class="text-left font-semibold">Quantity</th>
                                    <th class="text-left font-semibold">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="h-40 w-40 mr-4" :src="image" alt="Product image">
                                            <span class="font-semibold">Product name</span>
                                        </div>
                                    </td>
                                    <div class="py-4">{{ prices }}</div>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span class="text-center w-8">1</span>
                                            <button class="border rounded-md py-2 px-4 ml-2">+
                                            </button>
                                            <img @click="remove(counter)"
                                                class="product-remove h-6 w-6 ml-10 hover:-translate-y-1 hover:scale-56"
                                                src="@/assets/delete.png" />

                                        </div>

                                    </td>
                                    <div class="py-4"></div>
                                </tr>
                                <!-- More product rows -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="md:w-1/4">
                    <div class="bg-gradient-to-r from-rose-100 to-teal-100  rounded-lg shadow-md p-6">
                        <h2 class="text-lg font-semibold mb-4">Summary</h2>
                        <div class="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>{{ WasAmount }}</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Taxes</span>
                            <span>$1.99</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">$21.98</span>
                        </div>
                        <button class="bg-black text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {

    props: ["prodId", "title", "image", "prices", "qty"],
    computed: {
        itemTotal() {
            return (this.price * this.qty).toFixed(2);
        },
        counter() {
            return this.$store.state.counter
        },
    },
    methods: {
        remove() {
            this.$store.dispatch("cart/removeFromCart", {
                productId: this.prodId,
                title: this.title,
                price: this.price,
                qty: this.qty,
            });
            this.$store.state.counter--;

        }

    },


};
</script>


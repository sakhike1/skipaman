
<template>
    <div class="bg-gray-200  border border-slate-300">
        <header class=" md:py-6">
            <div class="container px-8 mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                        <router-link to="/" title="" class="flex rounded ">
                            <img class="h-8 ms-2" :src="require('@/assets/image.png')" alt="My Image" />
                        </router-link>
                    </div>

                    <div class="flex lg:hidden">
                        <button type="button" class="text-gray-900">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        class="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                        <a href="#" title=""
                            class="text-base font-medium text-gray-900 transition-all duration-200 rounded  font-pj hover:text-opacity-50">
                            latest arrival </a>

                        <a href="#" title=""
                            class="text-base font-medium text-gray-900 transition-all duration-200 rounded  font-pj hover:text-opacity-50 ">
                            Create your own Skipa</a>

                        <a href="#" title=""
                            class="text-base font-medium text-gray-900 transition-all duration-200 rounded  font-pj hover:text-opacity-50">
                            Kids Apparel </a>


                    </div>

                    <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <router-link to="/SignUp" title=""
                            class="text-base font-medium  text-white p-3 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50">
                            <img class="w-6 h-6 object-cover" :src="require('@/assets/user4.png')"
                                alt="My Image" /></router-link>
                        <router-link to="CreateAccount" title=""
                            class="text-base font-medium  text-white p-3 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 ">
                            <img class="w-6 h-6 object-cover" :src="require('@/assets/ad.png')" alt="My Image" />
                        </router-link>

                        <router-link to="/cart" title=""
                            class="px-5 py-2 flex text-base font-bold leading-7 text-white transition-all duration-200"
                            role="button">
                            <img class="w-6 h-6 mr-2 text-black" :src="require('@/assets/shopping2.png')" alt="Cart" /> {{
                                counter }}

                        </router-link>
                    </div>
                </div>
            </div>
        </header>


    </div>
</template>


  
  
<script>


export default {
    computed: {
        counter() {
            return this.$store.state.counter
        },

    },
    methods: {
        goTo(page) {
            page === "home" ? this.$router.push("/ProductsList") : this.$router.push("CartDetails")
        }
    },
    addOne() {
        this.$store.state.counter++;

    },
    components: {

    }

};
</script>
  
<style scoped>
/* Add custom styles here if needed */
</style>
  
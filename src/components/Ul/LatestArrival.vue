<template>
    <div ref="container" class="keen-slider">

        <div class="keen-slider__slide number-slide1">
            <img :src="require('@/assets/men.jpg')" />
        </div>

        <div class="keen-slider__slide number-slide2"> <img
                class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                :src="require('@/assets/image50.png')" /></div>
        <div class="keen-slider__slide number-slide3"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/image24.png')" />
        </div>


    </div>
    <TshirtsCard />
    <LastSlider />
</template>

<script>
// import HeaderText from '@/components/Ul/HeaderText.vue'

import TshirtsCard from "@/components/Ul/TshirtsCard.vue"
import LastSlider from "@/components/Ul/LastSlider.vue"
import { useKeenSlider } from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"

export default {
    components: {
        // HeaderText

        TshirtsCard,
        LastSlider
    },
    setup() {

        const [container] = useKeenSlider(
            {
                loop: true,
            },
            [
                (slider) => {
                    let timeout
                    let mouseOver = false
                    function clearNextTimeout() {
                        clearTimeout(timeout)
                    }
                    function nextTimeout() {
                        clearTimeout(timeout)
                        if (mouseOver) return
                        timeout = setTimeout(() => {
                            slider.next()
                        }, 2000)
                    }
                    slider.on("created", () => {
                        slider.container.addEventListener("mouseover", () => {
                            mouseOver = true
                            clearNextTimeout()
                        })
                        slider.container.addEventListener("mouseout", () => {
                            mouseOver = false
                            nextTimeout()
                        })
                        nextTimeout()
                    })
                    slider.on("dragStarted", clearNextTimeout)
                    slider.on("animationEnded", nextTimeout)
                    slider.on("updated", nextTimeout)
                },
            ]
        )
        return { container }
    },
}
</script>

<style>
body {
    margin: 0;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 640px;
    max-height: 100vh;
}

.number-slide1 {
    background: rgb(23, 23, 24);
    background: linear-gradient(128deg,
            rgb(10, 10, 10) rgb(10, 10, 10) 100%);
}

.number-slide2 {}

.number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(128deg,
            rgba(182, 255, 64, 1) 0%,
            rgba(63, 255, 71, 1) 100%);
    background: linear-gradient(128deg,
            rgba(189, 255, 83, 1) 0%,
            rgba(43, 250, 82, 1) 100%);
}

.number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(128deg,
            rgba(64, 255, 242, 1) 0%,
            rgba(63, 188, 255, 1) 100%);
}

.number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(128deg,
            rgba(255, 64, 156, 1) 0%,
            rgba(255, 63, 63, 1) 100%);
}

.number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(128deg,
            rgba(64, 76, 255, 1) 0%,
            rgba(174, 63, 255, 1) 100%);
}
</style>

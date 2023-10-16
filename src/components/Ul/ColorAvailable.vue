<template>
    <div>
        <div class="product-colours-available" tabindex="0" aria-label="5 colours available">
            <span class="swatch-beige refinement-color-swatch" data-color="beige"></span>
            <span class="swatch-orange refinement-color-swatch" data-color="orange"></span>
            <span class="swatch-black refinement-color-swatch" data-color="black"></span>
            <span class="swatch-grey refinement-color-swatch" data-color="grey"></span>
            <span class="swatch-light_pastel_blue refinement-color-swatch" data-color="light_pastel_blue"></span>
        </div>

        <!-- JavaScript -->

    </div>
</template>

<script>
const colorSwatches = document.querySelectorAll('.refinement-color-swatch');

colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
        const selectedColor = swatch.getAttribute('data-color');
        // You can perform actions with the selectedColor here, such as updating the product image or adding it to a cart.
        console.log(`Selected color: ${selectedColor}`);
    });
});
</script>

<style lang="scss" scoped></style>
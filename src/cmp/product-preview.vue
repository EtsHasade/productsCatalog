<template>
    <section class="product-preview">
        <div class="img-cntainer">
        <img :src="product.ProductImage">
        </div>
        <h3 class="product-title">{{product.ProductTitle}}</h3>
        <h3 class="product-price">{{product.PriceLabel}}</h3>
        <h3 class="shop-title">{{shop.StoreName}}</h3>
    </section>
</template>

<script>
export default {
    name: 'product-preview',
    props: {
        shop: Object,
        product: Object
    }
}
</script>
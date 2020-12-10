<template>
    <ul>
        <section v-for="shop in shops" :key="shop.StoreId">
           <product-preview v-for="product in productsToShow" :key="product.ProductId" :shop="shop" :product="product"></product-preview>
        </section>
    </ul>
</template>

<script>
import productPreview from './product-preview.vue'
export default {
    name: 'product-list',
    props: {
        shops: Array,
        filterBy: Object
    },
    computed: {
        productsToShow() {
            var products = {}
            shops.forEach(shop => {
                products[shop.StoreId] = shop.Products.filter(product => {
                    return (this.filterBy.byGender === 'both' || this.filterBy.byGender === product.tagGender ) && 
                            (product.Price >= this.filterBy.price.from && product.Price < this.filterBy.price.to)
                })
            })
        }
    }
    
}
</script>
<template>
    <ul>
        <section v-for="shop in shops" :key="shop.StoreId">
           <product-preview v-for="product in productsToShow[shop.StoreId]" :key="product.ProductId" :shop="shop" :product="product"></product-preview>
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
            this.shops.forEach(shop => {
                products[shop.StoreId] = shop.Products.filter(product => {
                    return (this.filterBy.byGender === 'both' || this.filterBy.byGender === product.tagGender ) && 
                            (product.Price >= this.filterBy.price.from && product.Price < this.filterBy.price.to)
                })
            })
            return products
        }
    },
    components: {
        productPreview
    }
    
}
</script>
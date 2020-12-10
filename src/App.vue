<template>
  <div id="app">
    <app-header />
    <product-filter @doFilter="setFilter" />
    <product-list :products="productsToShow">
    <app-footer />
  </div>
</template>

<script>
import productFilter from './cmp/product-filter.vue'
import productList from './cmp/product-list.vue'
import appHeader from './cmp/app-header.vue'
import appFooter from './cmp/app-footer.vue'
export default {
  name: 'App',
  computed: {
    productsToShow() {
      const shops = this.$store.getters.shopsToShow
      const products = []
      shops.forEach(shop => {
        products.push(...shop.Products)
      })
      return products
    }
  },

  components: {
    productList,
    productFilter,
    appHeader,
    appFooter
  }
}
</script>


<style lang="scss">
</style>

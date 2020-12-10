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
import appHeader from './views/app-header.vue'
import appFooter from './views/app-footer.vue'
export default {
  name: 'App',
  computed: {
    productsToShow() {
      const stores = this.$store.getters.storesToShow
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

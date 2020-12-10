<template>
  <div id="app">
    <app-header />
    <product-filter @doFilter="setFilter" />
    <product-list :shops="shopsToShow" :filterBy="filterBy">
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
  data() {
    return {
      filterBy: {byGender: 'both', price: {from: 0, to: Infinity}}
    }
  },
  computed: {
    productsToShow() {
      return this.$store.getters.productsToShow
    },
    shopsToShow() {
      return this.$store.getters.shops
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  },
  created() {
    this.$store.dispath({type: 'setShops'})
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

<template>
    <section>
        <product-filter @doFilter="setFilter" />
        <product-list :shops="shopsToShow" :filterBy="filterBy" />
    </section>
</template>

<script>
import productFilter from '../cmp/product-filter'
import productList from '../cmp/product-list'
export default {
  name: 'product-app',
  components: {
    productFilter,
    productList
  },
  data() {
    return {
      filterBy: { byGender: 'both', price: { from: 0, to: 100 } }
    }
  },
  computed: {
    productsToShow() {
      return this.$store.getters.productsToShow
    },
    shopsToShow() {
        return this.$store.getters.shopsToShow
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  },
  created() {
    this.$store.dispatch({ type: 'setShops' })
  },

}
</script>
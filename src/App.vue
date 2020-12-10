<template>
  <div id="app">
    <!-- <app-header /> -->
    <product-app />
    <!-- <app-footer /> -->
  </div>
</template>

<script>

import productFilter from './cmp/product-filter.vue'
import productList from './cmp/product-list.vue'
// import appHeader from './cmp/app-header.vue'
import productApp from './views/product-app'
// import appFooter from './cmp/app-footer.vue'

export default {
  name: 'App',
  components: {
    // appHeader,
    productApp,
    // appFooter
  }
}
</script>


<style lang="scss">
</style>

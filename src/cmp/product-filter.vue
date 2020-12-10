<template>
  <section class="product-filter">
      <form @change.prevent="emitFilter">
          <select v-model="filterBy.byGender">
              <option value="him">Him</option>
              <option value="her">Her</option>
              <option value="both">Both</option>
          </select>
          <select v-model="price" >
              <option value="1">up to $25</option>
              <option value="2">$25 - $50</option>
              <option value="3">$50+</option>
          </select>
      </form>
  </section>
</template>

<script>
export default {
  name: 'product-filter',
  data() {
    return {
      price: null,
      filterBy: { byGender: 'both', price: { from: 0, to: 100 } }
    }
  },
  methods: {
    emitFilter() {
        if(this.price) {
            if(this.price === '1') {
                this.filterBy.price.from = 0
                this.filterBy.price.to = 25
            } else if(this.price === '2') {
                this.filterBy.price.from = 25
                this.filterBy.price.to = 50
            } else if(this.price === '3') {
                this.filterBy.price.from = 50
            }
        }
        this.$emit("doFilter", JSON.parse(JSON.stringify(this.filterBy)));
    }
  },

}
</script>
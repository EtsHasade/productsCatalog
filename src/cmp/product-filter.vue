<template>
  <section class="product-filter">
      <form @submit.prevent="emitFilter">
          <select v-model="filterBy.byGender">
              <option value="him">Him</option>
              <option value="her">Her</option>
              <option value="both">Both</option>
          </select>
          <select price>
              <option value=""></option>
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
      filterBy: { byGender: 'both', price: { from: 0, to: Infinity } }
    }
  },
  methods: {
    emitFilter() {
      if (this.debounce) clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.$emit("doFilter", JSON.parse(JSON.stringify(this.filterBy)));
      }, 1000)
    }
  },

}
</script>
<template>
  <div>
    <h1>Cart: {{cartCount}}</h1>
    <h1>Cart - ProductA: {{productACount}}</h1>
    <h2>Count: {{count}}</h2>
    <button type="button" @click="increment">Increase Value</button>
  </div>
</template>

<script>
export default {
  name: 'StoreAccessView',
  computed: {
    count () {
      return this.$store.state.count
    },
    cartCount () {
      return this.$store.getters.cartCount
    },
    productACount () {
      return this.$store.getters.productACount
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>

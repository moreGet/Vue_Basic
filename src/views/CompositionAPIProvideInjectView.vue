<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'CompositionAPIProvideInjectView',
  setup () {
    const title = inject('title')

    return { title }
  }
}
</script>

<style scoped>

</style>

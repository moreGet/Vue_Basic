<template>
  <div>
    <h2>CompositionAPI4View</h2>
    <div>
      <input type="text" v-model.number="num1" />
      <span> + </span>
      <input type="text" v-model.number="num2" />
      <span> = </span>
      <span> {{result}} </span>
    </div>
  </div>
</template>

<script>
import { plusCalculator } from '../common.js'

export default {
  name: 'CompositionAPI4View',
  setup () {
    const { num1, num2, result } = plusCalculator()

    return {
      num1, num2, result
    }
  }
}
</script>

<style scoped>

</style>

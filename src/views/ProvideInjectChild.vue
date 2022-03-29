<template>
  <div>
    <h1>{{sampleData}}</h1>
    <hr>
    <ProvideInjectChildInChild />
  </div>
</template>

<script>
import ProvideInjectChildInChild from './ProvideInjectChildInChild.vue'

export default {
  name: 'ProvideInjectChild',
  components: {
    ProvideInjectChildInChild
  },
  data () {
    return {
      sampleData: 'ProvideInjectChild'
    }
  }
}
</script>

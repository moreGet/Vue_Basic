<template>
  <div>
    <CompositionAPIProvideInject />
  </div>
</template>

<script>
import { provide } from 'vue'
import CompositionAPIProvideInject from './CompositionAPIProvideInjectView.vue'

export default {
  name: 'CompositionAPIProvideView',
  components: { CompositionAPIProvideInject },
  setup () {
    // setup 내부에서 provide를 사용할 때에는 IMPORT를 해주어야 함
    provide('title', 'Vue.js 프로젝트 CompositionAPIProvideView')
  }
}
</script>

<style scoped>

</style>

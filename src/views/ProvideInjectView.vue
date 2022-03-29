<template>
  <div>
    <h1>{{sampleData}}</h1>
    <hr>
    <ProvideInjectChild />
  </div>
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild.vue'
export default {
  name: 'ProvideInjectView',
  components: {
    ProvideInjectChild
  },
  data () {
    return {
      sampleData: 'ProvideInjectView'
    }
  },
  // 자식 컴포넌트 간의 데이터 참조를 위한 static 선언
  provide () {
    return {
      items: 20
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {} // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

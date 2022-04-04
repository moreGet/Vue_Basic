<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model.number="num2" @keyup="plusNumbers" />
      <span> = </span>
      <span> {{result}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorView',
  components: {},
  data () {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    plusNumbers () {
      this.result = this.num1 + this.num2
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

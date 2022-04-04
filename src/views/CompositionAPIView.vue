<template>
  <div>
    <h2>CompositionAPIView</h2>
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span> {{state.result}} </span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'CompositionAPIView',
  components: {},
  // data () { reactive를 사용하기 때문에 사용 안함
  //   return {
  //     num1: 0,
  //     num2: 0,
  //     result: 0
  //   }
  // },
  setup () {
    const state = reactive({ // reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대해 반영
      num1: 0,
      num2: 0,
      result: 0
    })

    function plusNumbers () {
      state.result = state.num1 + state.num2
    }

    return { // reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods를 대체함
      state,
      plusNumbers
    }
  },
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {} // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  // methods: {} // reactive를 사용하기 때문에 사용 안함
}
</script>

<style scoped>

</style>

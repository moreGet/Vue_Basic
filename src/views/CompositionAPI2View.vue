<template>
  <div>
    <h2>CompositionAPI2View</h2>
    <div>
      <input type="text" v-model.number="state.num1" />
      <span> + </span>
      <input type="text" v-model.number="state.num2" />
      <span> = </span>
      <span> {{state.result}} </span>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'CompositionAPI2View',
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
      result: computed(() => state.num1 + state.num2)
    })

    return { // computed를 사용함으로 모델에 이벤트가 불필요 해짐
      state
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

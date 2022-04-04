import { reactive, computed, toRefs } from 'vue'

function plusCalculator () {
  const state = reactive({ // reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대해 반영
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2)
  })

  return toRefs(state) // 반응형으로 선언된 함수가 외부 함수에서 사용할 수 있게 해준다.
}

export {
  plusCalculator
}

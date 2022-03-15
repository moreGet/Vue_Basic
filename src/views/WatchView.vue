<template>
  <div>
    <div>
      <h1>watch 사용 안함</h1>
      <!-- .number는 해당 input 필드의 값을 숫자로 인식 -->
      <input type="text" v-model.number="x1" />
      <input type="text" v-model.number="x2" />

      <button type="button" @click="plusNumber">계산</button>
      <input type="text" v-model="y" />
    </div>
    <hr>
    <div>
      <!-- watch의 사용은 자원소모가 심함(지속적인 실시간 참조) -->
      <h1>watch 사용</h1>
      <!-- .number는 해당 input 필드의 값을 숫자로 인식 -->
      <input type="text" v-model.number="wx1" />
      <input type="text" v-model.number="wx2" />
      <input type="text" v-model="wy" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchView',
  components: {},
  data () {
    return {
      x1: 0,
      x2: 0,
      y: 0,
      wx1: 0,
      wx2: 0,
      wy: 0
    }
  },
  watch: {
    // data 필드에 있는 필드만 사용가능 compute(신규 인스턴스 생성)랑 조금 다름
    wx1 () {
      this.wy = this.wx1 + this.wx2
    },
    wx2 () {
      this.wy = this.wx1 + this.wx2
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    plusNumber () {
      this.y = this.x1 + this.x2
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

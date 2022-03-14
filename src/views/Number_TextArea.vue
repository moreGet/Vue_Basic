<template>
<div>
  <input type="text" v-model="valueModel" />
  <!-- 숫자형 타임을 위해 v-model.number 를 사용 -->
  <input type="number" v-model.number="valueModel2" />
  <!-- textarea 는 v-model을 사용하여 객체를 넣어줘야함. {{}} 패턴은 먹지 않음 -->
  <textarea v-model="valueModel"></textarea>
</div>
</template>

<script>
export default {
  name: 'Number_TextArea',
  components: {},
  data () {
    return {
      valueModel: 'South Korea',
      valueModel2: 12
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {
    console.log(this.valueModel2)
  }, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: { // 함수 정의를 위한 필드

  }
}
</script>

<style scoped>

</style>

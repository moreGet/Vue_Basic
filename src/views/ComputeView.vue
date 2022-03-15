<template>
  <div>
    <!-- 기본적인 데이터 출력 방법 -->
    <h1>Hello {{lastName}}{{firstName}} !</h1>

    <!-- 메소드를 통한 데이터 출력 방법 -->
    <h1>Hello {{getFullname()}} !</h1>

    <!-- computed를 활용한 데이터 출력( JAVA로 치면 STATIC변수 ) -->
    <h1>Hello {{fullName}} !</h1>

    <!-- -->
    <input type="text" v-model="lastName">
    <input type="text" v-model="firstName">
  </div>
</template>

<script>
export default {
  name: 'ComputeView',
  components: {},
  data () {
    return {
      firstName: '재석',
      lastName: '유'
    }
  },
  // 해당 필드 내부 에서는 참조하는 변수를 항상 리슨 하고 있음.
  computed: {
    fullName () {
      return this.lastName + this.firstName
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    getFullname () {
      return this.lastName + this.firstName
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

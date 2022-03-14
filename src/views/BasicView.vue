<template>
<div>
  <h1>{{title}}</h1>
  <input type="text" v-model="title" />
</div>
</template>

<script>
export default {
  name: 'BasicView',
  components: {},
  data () {
    return {
      title: 'Hello world'
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: { // 함수 정의를 위한 필드

  }
}
</script>

<style scoped>

</style>

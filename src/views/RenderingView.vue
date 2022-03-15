<template>
<!-- v-if 는 false일때 태그 자체를 생성 하지 않음(랜더링 하지 않음) -->
<!-- v-show 는 false일때 태그는 미리 생성해 놓고 display none 시킴 -->
<!-- 자주 사용하게 되는 기능 같은경우 자원 최적화를 위해 v-show가 더 최적화적임 -->
<div>
  <div>
    <h1>v-if, v-else</h1>
    <label>bRender값이 true이면, h1 블록이 화면에 보여지게 됩니다.<input type="checkbox" v-model="bRender" /></label>
    <h1 v-if="bRender">h1 블록</h1>
    <h1 v-else>bRender 값 : {{bRender}}</h1>
  </div>
  <hr>
  <div>
    <h1>v-if, v-else, v-else-if</h1>
    <input type="text" v-model="type" />
    <h1 v-if="type=='A'">텍스트가 A 일때</h1>
    <h1 v-else-if="type=='B'">텍스트가 B 일때</h1>
    <h1 v-else-if="type=='C'">텍스트가 C 일때</h1>
    <h1 v-else>텍스트가 A,B,C 이외 일때</h1>
  </div>
  <hr>
  <div>
    <h1>v-show</h1>
    <label>bRender2값이 true이면, h1 블록이 화면에 보여지게 됩니다.<input type="checkbox" v-model="bRender2" /></label>
    <h1 v-show="bRender2">h1 블록</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'RenderingView',
  components: {},
  data () {
    return {
      bRender: true,
      bRender2: true,
      type: 'A'
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

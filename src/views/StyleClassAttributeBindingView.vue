<template>
  <!-- class binding basic -->
  <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">
    <h1>{{sampleData}}</h1>
  </div>

  <!-- class binding array -->
  <div class="containerArray" v-bind:class="[activeClass, redClass]">
    <h1>{{sampleData02}}</h1>
  </div>

  <!-- Inline style binding -->
  <div v-bind:style="styleObject">
    <h1>{{sampleData03}}</h1>
  </div>

  <!-- Inline style binding array -->
  <div v-bind:style="[baseStyle, addStyle]">
    <h1>{{sampleData04}}</h1>
  </div>
</template>

<script>
export default {
  name: 'StyleClassAttributeBinding',
  components: {},
  data () {
    return {
      // class binding basic
      sampleData: 'Class Binding',
      isActive: true,
      isRed: true,

      // class binding basic
      sampleData02: 'Class Binding Array',
      activeClass: 'active',
      redClass: 'text-red',

      // Inline style binding
      sampleData03: 'Inline Style Binding',
      styleObject: {
        backgroundColor: 'yellow',
        color: 'red',
        fontWeight: 'bold'
      },

      // Inline style binding array
      sampleData04: 'Inline Style Binding Array',
      baseStyle: 'background-color:yellow',
      addStyle: 'color:red;font-weight:bold'
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
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>

<template>
<div>
  <!-- <select v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select> -->

  <!-- <label><input type="checkbox" value="서울" v-model="checked" /> 서울</label>
  <label><input type="checkbox" value="부산" v-model="checked" /> 부산</label>
  <label><input type="checkbox" value="제주" v-model="checked" /> 제주</label>
  <br>
  <span> 체크한 지역: {{checked}} </span> -->

  <!-- <label><input type="radio" v-bind:value="radio1" v-model="picked" />서울</label>
  <label><input type="radio" v-bind:value="radio2" v-model="picked" />부산</label>
  <label><input type="radio" v-bind:value="radio3" v-model="picked" />제주</label> -->

  <label><input type="radio" v-bind:value="radio[0]" v-model="picked" />서울</label>
  <label><input type="radio" v-bind:value="radio[1]" v-model="picked" />부산</label>
  <label><input type="radio" v-bind:value="radio[2]" v-model="picked" />제주</label>
  <br>
  <span> 선택한 지역: {{picked}} </span>
</div>
</template>

<script>
export default {
  name: 'Select_Checkbox_Radio',
  components: {},
  data () {
    return {
      city: '21',
      checked: [],
      radio: ['서울', '부산', '제주'],
      radio1: 'v-bind:서울',
      radio2: 'v-bind:부산',
      radio3: 'v-bind:제주',
      picked: ''
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

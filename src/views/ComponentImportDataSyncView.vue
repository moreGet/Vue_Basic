<template>
  <div>
    <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentImportDataSyncView',
  components: {},
  data () {
    return {
      sampleData: '변경전 데이터'
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    changeData () {
      this.sampleData = '자식 컴포넌트 에서 데이터 변경이 일어났습니다.'
    }
  }
}
</script>

<style scoped>

</style>

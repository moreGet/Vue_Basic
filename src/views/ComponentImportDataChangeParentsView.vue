<template>
  <div>
    <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentImportDataChangeParentsView',
  components: {},
  data () {
    return {
      msg: '자식 컴포넌트로 부터 보내는 메시지'
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    sendFromChild () {
      // $emit는 부모로 이벤트를 발생 시키게 함
      this.$emit('send-message', this.msg)
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

<template>
  <div>
    <button type="button" @click="childFunc" ref="childBtn">Click in child</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentImportEventChildView',
  components: {},
  data () {
    return {
      sampleData: 'Sample Data',
      timerInterval: 0
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    childFunc () {
      this.$swal({
        icon: 'success',
        title: 'Active!',
        html: '부모 컴포넌트에서 직접 발생시킨 이벤트</br><b>',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          this.$swal.showLoading()
          const b = this.$swal.getHtmlContainer().querySelector('b')
          this.timerInterval = setInterval(() => {
            b.textContent = this.$swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      })
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

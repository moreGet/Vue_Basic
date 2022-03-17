<template>
  <div>
    <input type="text" v-model="userInfo.name" />
    <input type="text" v-model.number="userInfo.age" />
    <input type="text" v-model="userInfo.job" />
    <button type="button" @click="saveUserInfo">저장</button>
  </div>
</template>

<script>
export default {
  name: 'SaveView',
  components: {},
  data () {
    return {
      userInfo: {
        name: '',
        age: 0,
        job: ''
      }
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    saveUserInfo () {
      if (this.userInfo.name === '') {
        // return alert('사용자 이름을 입력하세요.')
        return this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }

      if (this.userInfo.age === 0 || this.userInfo.age === '') {
        return alert('나이를 입력하세요.')
      }

      const result = this.saveData(this.userInfo)
      if (result === 'S') {
        alert('사용자 정보가 생성 되었습니다.')
      }
    },

    saveData (params) {
      console.debug(params)
      const result = 'S'
      return result
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

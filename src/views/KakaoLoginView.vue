<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
    </a>
    <br>
    <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
  </div>
</template>

<script>
export default {
  name: 'KakaoLoginView',
  components: {},
  data () {
    return {
      code: ''
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getKakaoAccount
      })
    },
    kakaoLogout () {
      const token = window.Kakao.Auth.getAccessToken()

      if (!token) {
        return
      }
      console.log('Kakao AccessToken : ' + token)

      window.Kakao.Auth.logout((res) => {
        console.log('Kakao AccessToken : ' + token)
        console.log('Are you logged out? (로그아웃이 되었는지?) : ' + res)
        alert('로그아웃')
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          const nickName = kakaoAccount.profile.nickname
          const email = kakaoAccount.email

          console.log('nickName', nickName)
          console.log('email', email)

          // 로그인 처리 구현
          console.log(kakaoAccount)
          this.$store.commit('user', kakaoAccount) // 스토어 이용

          alert('로그인 성공')
        },
        fail: (error) => {
          // this.$router.push('/errorPage')
          console.log(error)
        }
      })
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

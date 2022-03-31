import axios from 'axios'

export default {
  mounted () {
    console.log('믹스인 mounted()')
  },
  methods: {
    async $api (url, method, data) { // 믹스인 함수에는 다른 곳과 함수 이름 충돌을 피하기 위해 $를 앞에 붙힘
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'No Data!'
        })
      })).data
    }
  }
}

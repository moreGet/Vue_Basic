<template>
  <div>
    <button type="button" @click="getProductList">GET PRODUCT LIST!!!</button>
    <h1 v-cloak>SERVEDR DATA : {{productList}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ServerDataView',
  components: {},
  data () {
    return {
      productList: []
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    async getProductList () {
      this.productList = await this.api('http://localhost:8080/product/findAll', 'get', {})
      console.log(this.productList)
    },

    // 비동기
    async api (url, method, data) {
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e)
        this.productList = '데이터를 받아올 수 없음'
      })).data
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>
  [v-cloak]::before {
      content: '로딩중...'
  }

  [v-cloak] > * {
      display: none;
  }
</style>

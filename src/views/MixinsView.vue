<template>
  <div>
    <div>
      <h1>{{productList}}</h1>
      <button type="button" @click="getProductList">findAllData</button>
    </div>
    <hr>
    <div>
      <h1>{{productListGlobal}}</h1>
      <button type="button" @click="getProductListGlobal">findAllData(GLOBAL)</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from '../api.js'

export default {
  name: 'MixinsView',
  mixins: [ApiMixin], // 믹스인 공통 함수 파일을 쓰기 위해 해당 선언 필요
  components: {},
  data () {
    return {
      productList: [],
      productListGlobal: []
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {
    console.log('컴포넌트 mounted()')
  }, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: { // 함수 정의를 위한 필드
    async getProductList () {
      this.productList = await this.$callAPI(
        'http://localhost:8080/product/findAll',
        'GET',
        {}
      )
      console.log(this.productList)
    },
    async getProductListGlobal () { // main.js 에 등록한 js파일을 글로벌 방식으로 사용
      this.productListGlobal = await this.$api(
        'http://localhost:8080/product/findAll',
        'GET',
        {}
      )
      console.log(this.productListGlobal)
    }
    // mixins 에 선언되어 있는 js파일들은 methods 안에 구현한 것과 동일함
  }
}
</script>

<style scoped>

</style>

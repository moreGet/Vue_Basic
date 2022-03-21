<template>
  <div>
    <div>
      <button type="button" @click="getProductList">GET PRODUCT LIST!!!</button>
      <!-- <h1 v-cloak>SERVEDR DATA : {{productList}}</h1> -->
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>제품명</th>
            <th>가격</th>
            <th>종류</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(product, i) in productList">
            <td>{{product.productName}}</td>
            <td>{{product.price}}</td>
            <td>{{product.category}}</td>
            <td>{{product.deliveryPrice}}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'No Data!'
        })
        this.productList = []
      })).data
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>
  /* 테이블 정렬은 아래 예약어 스타일로 정렬 해야함 */
  table {
      margin-left:auto;
      margin-right:auto;
      margin-top: 20px;
      width: 40%;
      height: auto;
  }

  table, td, th {
      border-collapse : collapse;
      border : 1px solid black;
  }

  [v-cloak]::before {
      content: '로딩중...'
  }

  [v-cloak] > * {
      display: none;
  }
</style>

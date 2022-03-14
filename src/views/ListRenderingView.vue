<template>
  <div class="container">
    <div>
      <select v-model="globalKey">
        <option v-bind:key="i" v-bind:value="city.value" v-for="(city, i) in cities">{{city.key}}</option>
      </select>
      <label class="componentLeft">{{globalKey}}</label>
    </div>

    <div class="containerInner">
      <table>
        <thead>
          <tr>
            <th>제품명</th>
            <th>제품가격</th>
            <th>배송비</th>
            <th>제품카테고리</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(prod, i) in productList">
            <td>{{prod.product_name}}</td>
            <td>{{prod.price}}</td>
            <td>{{prod.delivery_price}}</td>
            <td>{{prod.category}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRenderingView',
  components: {},
  data () {
    return {
      // v-for key/value
      globalKey: '부산',
      cities: [
        { key: '02', value: '서울' },
        { key: '031', value: '경기' },
        { key: '064', value: '부산' }
      ],

      // v-for key/value 2
      productList: [
        { product_name: '기계식 키보드', price: 25000, delivery_price: 5000, category: '전자제품' },
        { product_name: '기계식 마우스', price: 15000, delivery_price: 2000, category: '전자제품' }
      ]
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {} // 함수 정의를 위한 필드
}
</script>

<style scoped>
/* 테이블 정렬은 아래 예약어 스타일로 정렬 해야함 */
table {
    margin-left:auto;
    margin-right:auto;
}

table, td, th {
    border-collapse : collapse;
    border : 1px solid black;
}

.container {
  align-self: center;
}

.containerInner {
  padding: 10px;
}

.componentLeft {
  padding: 10px;
}
</style>

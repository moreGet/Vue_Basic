<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option :value="city.code" :key="i" v-for="(city, i) in cities"> {{city.name}} </option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList" />
      <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(person, i) in userList">
            <td>{{person.name}}</td>
            <td>{{person.age}}</td>
            <td>{{person.job}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lookup_SaveView',
  components: {},
  data () {
    return {
      cities: [
        { name: '서울', code: '02' },
        { name: '부산', code: '21' },
        { name: '제주', code: '064' }
      ],
      selectedCity: '',
      userName: '',
      userList: []
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    searchUserList () {
      // const selectedCity = this.selectedCity
      // const userName = this.userName
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userName
      }

      this.userList = this.getUserList(params)
    },
    getUserList (params) {
      console.log(params)

      const list = [
        { name: '유재석', age: 50, job: '연예인' },
        { name: '하하', age: 45, job: '연예인' },
        { name: '노홍철', age: 45, job: '연예인' }
      ]

      return list
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>
  table {
      margin-left:auto;
      margin-right:auto;
      margin-top: 20px;
      width: 300px;
      height: auto;
  }

  table, td, th {
      border-collapse : collapse;
      border : 1px solid black;
  }
</style>

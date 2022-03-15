<template>
  <div>
    <div>
      <!-- Vue.js 는 Event 태그를 사용할때 v-on:click 대신 @click 로 대체 할 수 있다. -->
      <!-- <button type="button" v-on:click="increaseCounter">Add 1</button> -->
      <h1>Click Event</h1>
      <button type="button" @click="increaseCounter">Add 1</button>
      <button class="button-custom" type="button" @click="one(), two()" >Call Alert One Two</button>
      <p>The count is : {{count}}</p>
    </div>
    <hr>
    <div>
      <h1>Change Event</h1>
      <select v-model="city" @change="changeEvent">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
      </select>
    </div>
    <hr>
    <div>
      <h1>Key Event</h1>
      <input type="text" v-model="textValue" @keyup.enter="showKeyValue"/>
      <!-- 아래는 아무 이벤트나 감지 -->
      <!-- <input type="text" v-model="textValue" @keyup="showKeyValue"/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventView',
  components: {},
  data () {
    return {
      count: 0,
      city: '서울',
      textValue: ''
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    increaseCounter () {
      this.count += 1
    },
    one () {
      alert('One')
    },
    two () {
      alert('Two')
    },
    changeEvent () {
      alert(this.city)
    },
    showKeyValue () {
      // tab, delete, esc, space, up, down, left, right
      alert(this.textValue)
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>
.button-custom {
  margin-left: 20px;
}
</style>

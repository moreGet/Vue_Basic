<template>
  <div>
    <h1>props likes 변수 : {{likes}}</h1>
    <h1>props isType 변수 : {{isOkay}}</h1>
    <h1>props commentIds 변수 : {{commentIds}}</h1>
    <hr>
    <h1>props author 변수 : {{author}}</h1>
    <h1>props author.name 변수 : {{author.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ComponentImportChildView',
  props: {
    likes: {
      type: Number,
      default: 0
    },
    isOkay: {
      type: Boolean,
      defalut: false
    },
    commentIds: {
      type: Array
    },
    author: {
      type: Object
    }
  },
  components: {},
  data () {
    return {
      sampleData: 'Sample Data'
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

</style>

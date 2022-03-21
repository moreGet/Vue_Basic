<template>
  <div>
    <PageTitle :title="title" />
    <!-- :likes="22" 동적 바인딩(v-model:likes="22") 으로 int형으로 전달할 수 있다. -->
    <!-- 자료형 그대로 데이터 전달을 위해서는 v-model을 사용해야 한다. -->
    <ChildComponent :likes="23" :isOkay="true" :commentIds="[1, 5, 3, 2, 1]" :author="author" />
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent from './ComponentImportChildView.vue'

export default {
  name: 'ComponentImportView',
  components: {
    // 위 import 문으로 vue페이지를 로딩한 후 template에 사용하기 위해 선언
    PageTitle,
    ChildComponent
  },
  data () {
    return {
      title: '부모컴포넌트에서 전송한 페이지 타이틀',
      author: { // 위 컴포넌트 옆 동적 바인딩 이외에 전달 하는 방법
        name: '홍길동',
        company: '회사이름'
      }
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

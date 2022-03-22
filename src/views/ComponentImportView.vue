<template>
  <div>
    <div>
      <PageTitle :title="title" />
    </div>
    <hr>
    <div>
      <!-- :likes="22" 동적 바인딩(v-model:likes="22") 으로 int형으로 전달할 수 있다. -->
      <!-- 자료형 그대로 데이터 전달을 위해서는 v-model을 사용해야 한다. -->
      <ChildComponent :likes="23" :isOkay="true" :commentIds="[1, 5, 3, 2, 1]" :author="author" />
    </div>
    <hr>
    <div>
      <!-- Vue에서는 ref 속성으로 HTML ID값을 이용할 수 있다. -->
      <button type="button" @click="callFunc">Click in parents</button>
      <br>
      <br>
      <ComponentImportEventChildView ref="childComponent" />
    </div>
    <hr>
    <div>
      <button type="button" @click="changeDataOfChild">자식 데이터 변경</button>
      <ComponentImportDataChangeChildView ref="childChange"/>
    </div>
    <hr>
    <div>
      <h1>부모 데이터 : {{parentsMsg}}</h1>
      <ComponentImportDataChangeParentsView @send-message="changeDataChildToParents"/>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent from './ComponentImportChildView.vue'
import ComponentImportEventChildView from './ComponentImportEventChildView.vue'
import ComponentImportDataChangeChildView from './ComponentImportDataChangeChildView.vue'
import ComponentImportDataChangeParentsView from './ComponentImportDataChangeParentsView.vue'

export default {
  name: 'ComponentImportView',
  components: {
    // 위 import 문으로 vue페이지를 로딩한 후 template에 사용하기 위해 선언
    PageTitle,
    ChildComponent,
    ComponentImportEventChildView,
    ComponentImportDataChangeChildView,
    ComponentImportDataChangeParentsView
  },
  data () {
    return {
      title: '부모컴포넌트에서 전송한 페이지 타이틀',
      author: { // 위 컴포넌트 옆 동적 바인딩 이외에 전달 하는 방법
        name: '홍길동',
        company: '회사이름'
      },
      parentsMsg: ''
    }
  },
  setup () {},
  created () {}, // 컴포넌트가 실행되는 순간 바로 수행
  mounted () {}, // DOM 객체가 로딩이 다 되는 순간 수행
  unmounted () {}, // 현재 컴포넌트 에서 다른 컴포넌트로 이동 할때 수행
  methods: {
    callFunc () {
      // $refs 는 컴포넌트 옆 ref에 정의된 key값으로 해당 객체에 접근 하고
      // 해당 객체에 접근후 다시 $refs로 접근한 객체 내부에 ref 객체에 접근한다.
      // 또한 모든 메소드도 해당 $refs 키워드로 호출 가능하다.
      this.$refs.childComponent.$refs.childBtn.click()
    },
    changeDataOfChild () {
      this.$refs.childChange.childFunc()
    },
    changeDataChildToParents (data) {
      this.parentsMsg = data
    }
  } // 함수 정의를 위한 필드
}
</script>

<style scoped>

</style>

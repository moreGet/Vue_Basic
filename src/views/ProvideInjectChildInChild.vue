<template>
  <div>
    <h1>{{sampleData}} : {{items}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProvideInjectChildInChild',
  // 부모 컴포넌트의 provide 함수 구현 내부의 변수 참조
  inject: ['items'],
  data () {
    return {
      sampleData: 'ProvideInjectChildInChild'
    }
  }
}
</script>

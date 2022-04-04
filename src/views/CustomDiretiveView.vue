<template>
  <div>
    <h3>main.js에 등록된 custom directive</h3>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default { // main.js에 등록됨
  // directives: {
  //   focus: {
  //     mounted (el) { // el = 위 input 엘리먼트에 v-focus를 할당 해주었으니 el에는 input 엘리먼트가 들어온다
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>

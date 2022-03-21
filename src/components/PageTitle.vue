<template>
  <div class="container">
    <h1 class="page-title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      dafault: '페이지 타이틀'
    }
  }
}
</script>

<style scope>
  .page-title {
    padding-left: 5px;
    border-left: 5px solid red;
    text-align: center;
  }

  .container {
    justify-self: center;
  }
</style>

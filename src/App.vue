<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basic">Basic</router-link> |
    <router-link to="/databinding">Databinding</router-link> |
    <router-link to="/databindinghtml">DatabindingHtml</router-link> |
    <router-link to="/databindinginputtext">DataBindingHtmlInputText</router-link> |
    <router-link to="/Number_TextArea">Number_TextArea</router-link> |
    <router-link to="/Select_Checkbox_Radio">Select_Checkbox_Radio</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

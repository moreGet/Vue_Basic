<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basic">Basic</router-link> |
    <router-link to="/databinding">Databinding</router-link> |
    <router-link to="/databindinghtml">DatabindingHtml</router-link> |
    <router-link to="/databindinginputtext">DataBindingHtmlInputText</router-link> |
    <router-link to="/Number_TextArea">Number_TextArea</router-link> |
    <router-link to="/Select_Checkbox_Radio">Select_Checkbox_Radio</router-link> |
    <router-link to="/InputTypeAttributeView">InputTypeAttributeView</router-link> |
    <router-link to="/StyleClassAttributeBindingView">StyleClassAttributeBindingView</router-link> |
    <router-link to="/ListRenderingView">ListRenderingView</router-link> |
    <router-link to="/RenderingView">RenderingView</router-link> |
    <router-link to="/EventView">EventView</router-link> |
    <router-link to="/ComputeView">ComputeView</router-link> |
    <router-link to="/WatchView">WatchView</router-link> |
    <router-link to="/LookupView">LookupView</router-link> |
    <router-link to="/SaveView">SaveView</router-link> |
    <router-link to="/ServerDataView">ServerDataView</router-link> |
    <router-link to="/ComponentImportView">ComponentImportView</router-link> |
    <router-link to="/SlotUseModalLayoutView">SlotUseModalLayoutView</router-link> |
    <router-link to="/ProvideInjectView">ProvideInjectView</router-link> |
    <router-link to="/MixinsView">MixinsView</router-link> |
    <router-link to="/CalculatorView">CalculatorView</router-link> |
    <router-link to="/CompositionAPIView">CompositionAPIView</router-link> |
    <router-link to="/CompositionAPI2View">CompositionAPI2View</router-link> |
    <router-link to="/CompositionAPI3View">CompositionAPI3View</router-link> |
    <router-link to="/CompositionAPI4View">CompositionAPI4View</router-link> |
    <router-link to="/CompositionAPIProvideView">CompositionAPIProvideView</router-link> |
    <router-link to="/CustomDiretiveView">CustomDiretiveView</router-link> |
    <router-link to="/PluginsView">PluginsView</router-link> |
    <router-link to="/StoreAccessView">StoreAccessView</router-link>
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

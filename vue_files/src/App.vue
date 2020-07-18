<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default{
    name: 'App'
  }
</script>

<style lang="scss">
#app {
  font-family: 'museo-sans','Arial';
  color: #303030;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}
</style>

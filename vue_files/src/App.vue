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
  text-align: center;
  margin-top: 60px;
}

body {
  background-color: #f9f9f9;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

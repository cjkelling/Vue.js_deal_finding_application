<template>
  <div>
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader';

  export default{
    name: 'App',
    components: {
      AppHeader
    }
  };
</script>

<style>
#app {
  font-family: 'museo-sans','Arial';
  color: #303030;
  margin-top: 30px;
}
</style>

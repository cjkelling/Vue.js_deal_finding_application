<template>
  <div>
    <AppHeader/>
    <ApiHandler/>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader';
  import ApiHandler from './components/ApiHandler';

  export default{
    name: 'App',
    components: {
      AppHeader,
      ApiHandler
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

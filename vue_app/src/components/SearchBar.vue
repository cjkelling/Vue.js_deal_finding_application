<template>
  <div>
    <p v-if="$store.state.gallery">Search:
    <input type="text" v-model="$store.state.search" placeholder='Try "coffee" or "Walmart"'/></p>
  </div>
</template>

<script>
  export default {
    name: "SearchBar"
  };
</script>

<style scoped>
  input {
    margin-left: 5px;
    padding: 4px 12px;
    width: 200px;
    color: rgba(0,0,0,.70);
    font-size: 16px;
    border: 1px solid rgba(0,0,0,.12);
    background-color: white;
  }

  p {
    margin: 40px 60px;
    font-size: 20px;
  }
</style>

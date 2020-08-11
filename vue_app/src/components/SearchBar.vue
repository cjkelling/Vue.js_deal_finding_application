<template>
  <div>
    <p>Search:
    <input type="text" @input="onInput" placeholder='Try "coffee" or "Walmart"'/></p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "SearchBar",
    methods: {
      ...mapActions(['updateSearch']),
      onInput(event) {
        this.updateSearch(event.target.value);
      }
    }
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

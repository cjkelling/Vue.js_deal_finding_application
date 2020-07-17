<template>
  <p>Search:
  <input v-if="$store.state.gallery" type="text" v-model="$store.state.search" placeholder='Try "coffee" or "Walmart"'/></p>
</template>

<script>
  export default {
    name: "SearchBar"
  };
</script>

<style scoped>
  input {
    padding: 4px 12px;
    color: rgba(0,0,0,.70);
    border: 1px solid rgba(0,0,0,.12);
    transition: .15s all ease-in-out;
    background: white;
    &:focus {
      outline: none;
      transform: scale(1.05);
      & + label  {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
      }
    }
    &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0,0,0,.50);
        font-weight: 100;
    }
  }
</style>

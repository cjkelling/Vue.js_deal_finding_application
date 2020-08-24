<template>
  <div>
    <SearchBar/>
    <FilterMenu/>
    <Gallery/>
  </div>
</template>

<script>
  import SearchBar from '../components/SearchBar.vue';
  import FilterMenu from '../components/FilterMenu.vue';
  import Gallery from '../components/Gallery.vue';

  export default{
    components: {
      SearchBar,
      FilterMenu,
      Gallery
    }
  }
</script>

<template>
  <div id="app">
    <ApiHandler/>
    <SearchBar/>
    <FilterMenu/>
    <GalleryView/>
    <OfferCardDetailedView/>
  </div>
</template>

<script>
  import ApiHandler from '../components/ApiHandler.vue';
  import SearchBar from '../components/SearchBar.vue';
  import FilterMenu from '../components/FilterMenu.vue';
  import GalleryView from '../components/GalleryView.vue';
  import OfferCardDetailedView from '../components/OfferCardDetailedView.vue';

  export default{
    components: {
      ApiHandler,
      SearchBar,
      FilterMenu,
      GalleryView,
      OfferCardDetailedView
    }
  }
</script>

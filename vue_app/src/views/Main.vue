<template>
  <div id="app">
    <ApiService/>
    <Header/>
    <SearchBar/>
    <FilterMenu/>
    <OfferCardGalleryView/>
    <OfferCardDetailedView/>
  </div>
</template>

<script>
  import ApiService from '../components/ApiService.vue';
  import Header from '../components/Header.vue';
  import SearchBar from '../components/SearchBar.vue';
  import FilterMenu from '../components/FilterMenu.vue';
  import OfferCardGalleryView from '../components/OfferCardGalleryView.vue';
  import OfferCardDetailedView from '../components/OfferCardDetailedView.vue';

  export default{
    components: {
      ApiService,
      Header,
      SearchBar,
      FilterMenu,
      OfferCardGalleryView,
      OfferCardDetailedView
    }
  }
</script>

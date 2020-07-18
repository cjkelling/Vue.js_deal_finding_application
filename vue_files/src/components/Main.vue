<template>
  <div id="app">
    <ApiService/>
    <Header/>
    <SearchBar/>
    <OfferCardGalleryView/>
    <OfferCardDetailedView/>
  </div>
</template>

<script>
  import ApiService from './ApiService.vue';
  import Header from './Header.vue';
  import SearchBar from './SearchBar.vue';
  import OfferCardGalleryView from './OfferCardGalleryView.vue';
  import OfferCardDetailedView from './OfferCardDetailedView.vue';

  export default{
    components: {
      ApiService,
      Header,
      SearchBar,
      OfferCardGalleryView,
      OfferCardDetailedView
    }
  }
</script>

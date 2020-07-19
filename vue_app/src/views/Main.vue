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
  import ApiService from '../components/ApiService.vue';
  import Header from '../components/Header.vue';
  import SearchBar from '../components/SearchBar.vue';
  import OfferCardGalleryView from '../components/OfferCardGalleryView.vue';
  import OfferCardDetailedView from '../components/OfferCardDetailedView.vue';

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

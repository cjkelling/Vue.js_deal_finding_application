<template>
  <ul class="gallery" v-if="getGalleryView">
    <OfferCardItem v-for="offer in filterOffers" :offer="offer" :key="offer.id">
    </OfferCardItem>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';
  import OfferCardItem from './OfferCardItem';

  export default {
    name: 'GalleryView',
    components: {
      OfferCardItem
    },
    computed: {
      ...mapGetters(['allOffers', 'getGalleryView', 'getSearch', 'getFilters']),
      filterOffers() {
        const searchOffer = this.searchOffers
        const filteredOffers = searchOffer.filter(offer => {
          return offer.retailers.some(retailer => this.getFilters.includes(retailer.name))
        })
        return filteredOffers.length > 0 ? filteredOffers : searchOffer
      },
      searchOffers() {
        return this.allOffers.filter(offer => {
          return offer.name.toLowerCase().includes(this.getSearch.toLowerCase()) ||
          offer.description.toLowerCase().includes(this.getSearch.toLowerCase()) ||
          offer.terms.toLowerCase().includes(this.getSearch.toLowerCase())
        })
      }
    }
  }
</script>

<style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 3rem;
  }
</style>

<template>
  <ul class="gallery" v-if="$store.state.gallery">
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
      ...mapGetters(['allOffers']),
      filterOffers() {
        const searchOffer = this.searchOffers
        const filteredOffers = searchOffer.filter(offer => {
          return offer.retailers.some(retailer => this.$store.state.filters.includes(retailer.name))
        })
        return filteredOffers.length > 0 ? filteredOffers : searchOffer
      },
      searchOffers() {
        return this.allOffers.filter(offer => {
          return offer.name.toLowerCase().includes(this.$store.state.search.toLowerCase()) ||
          offer.description.toLowerCase().includes(this.$store.state.search.toLowerCase()) ||
          offer.terms.toLowerCase().includes(this.$store.state.search.toLowerCase())
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

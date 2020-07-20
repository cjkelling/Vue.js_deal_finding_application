<template>
  <div>
    <div class="gallery" v-if="$store.state.gallery">
      <div class="offer-card" v-for="offer in filterOffers" v-bind:key="offer.id" @click="offer.views++, offerShow(offer.id)">
        <div class="image-container">
          <img class="image" :src='offer.image_url'>
        </div>
        <div class="description-container">
          <p class="description">{{offer.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "OfferCardGalleryView",

    computed: {
      filterOffers() {
        const searchOffer = this.searchOffers
        const filteredOffers = searchOffer.filter(offer => {
          return offer.retailers.some(retailer => this.$store.state.filters.includes(retailer.name))
        })
        return filteredOffers.length > 0 ? filteredOffers : searchOffer
      },
      searchOffers() {
        return this.$store.state.offers.filter(offer => {
          return offer.name.toLowerCase().includes(this.$store.state.search.toLowerCase()) ||
          offer.description.toLowerCase().includes(this.$store.state.search.toLowerCase()) ||
          offer.terms.toLowerCase().includes(this.$store.state.search.toLowerCase())
        })
      }
    },

    methods: {
      offerShow(id) {
        this.$store.state.gallery = !this.$store.state.gallery,
        this.$store.state.offerId = id,
        this.$store.state.search = '',
        this.$store.state.filters = [],
        this.$store.state.showRetailers = false,
        this.registerView(id)
      },
      registerView(id) {
        axios.patch(this.$store.state.endpoint + '/' + id, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
          .then(response => {response})
          .catch(e => {this.$store.state.errors.push(e)})
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

  .offer-card {
    display: grid;
    grid-template-rows: 70% 30%;
    grid-template-areas:
      "image"
      "details";
    background-color: white;
    width: 12rem;
    height: 15rem;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    cursor: pointer;
  }

  .offer-card:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  }

  .image-container {
    grid-area: image;
    place-self: center-stretch;
  }

  .image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .description-container {
    grid-area: details;
    place-self: center-stretch;
    padding-top: 25px;
  }

  .description {
    object-fit: contain;
    text-align: center;
    font-weight: 700;
  }
</style>

<template>
  <li class="offer-card" @click="offer.views++, showOffer(offer.id)">
    <div class="image-container">
      <img class="image" :src='offer.image_url'>
    </div>
    <div class="description-container">
      <p class="description">{{offer.name}}</p>
    </div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';
  import services from '../services/api';

  export default {
    name: 'OfferCardItem',
    props: ['offer'],
    methods: {
      ...mapActions(['updateGallery', 'updateOfferId', 'updateSearch', 'updateShowRetailers', 'resetFilter']),
      showOffer(id) {
        this.updateGallery(false),
        this.updateOfferId(id),
        this.updateSearch(''),
        this.updateShowRetailers(false),
        this.resetFilter(),
        services.registerView(id)
      }
    }
  }
</script>

<style scoped>
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

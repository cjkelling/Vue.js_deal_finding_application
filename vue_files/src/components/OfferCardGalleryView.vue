<template>
  <div class="gallery" v-if="$store.state.gallery">
    <div class="offer-card" v-for="offer in searchOffers">
      <div @click="offer.views++, offerShow(offer.id)">
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
        this.registerView(id)
      },
      registerView(id) {
        axios.patch(this.$store.state.endpoint + '/' + id, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
          .then(response => {})
          .catch(e => {this.$store.state.errors.push(e)})
      }
    }
  };
</script>

<style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 3rem;
  }

  .offer-card {
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: white;
    width: 15rem;
    height: 18rem;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    cursor: pointer;
  }

  .image-container {
    width: 13rem;
    height: 10rem;
  }

  .description-container {
    width: 13rem;
    height: 8rem;
  }

  .offer-card:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .description {
    object-fit: contain;
  }
</style>

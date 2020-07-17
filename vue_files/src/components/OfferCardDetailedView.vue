<template>
  <div v-if="!$store.state.gallery">
    <div class="offer-card-detailed-container" v-for="offer in $store.state.offers">
      <div class="offer-card-detailed" v-if="offer.id === $store.state.offerId">
        <h1>{{offer.name}}</h1>
        <div class="image-container-detailed">
          <img class="image" :src='offer.image_url'>
        </div>
        <h3>Offer Description: </h3>
        <p>{{offer.description}}</p>
        <h3>Offer Terms: </h3>
        <p>{{offer.terms}}</p>
        <h3>Offer Expiration: </h3>
        <p>{{formatDate(offer.expiration)}}</p>
        <h3 v-if="offer.retailers.length">Retailers Accepting Offer: </h3>
        <p v-if="offer.retailers.length" v-for="retailer in offer.retailers">{{retailer.name}}</p>
        <h3>Offer Total Views: </h3>
        <p>{{offer.views}}</p>
        <button @click="$store.state.gallery = !$store.state.gallery">All Offers</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OfferCardDetailedView",
    methods: {
      formatDate(data) {
        var year = data.slice(0, 4);
        var month = data.slice(5, 7);
        var day = data.slice(8, 10);
        return month + '/' + day + '/' + year
      }
    }
  };
</script>

<style scoped>
  .offer-card-detailed-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .offer-card-detailed {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: white;
    width: 75vw;
    height: 75vh;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19);
  }

  .image-container-detailed {
    width: 15rem;
    height: 15rem;
  }
</style>

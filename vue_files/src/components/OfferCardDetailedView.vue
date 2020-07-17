<template>
  <div v-if="!$store.state.gallery">
    <div class="offer-card-detailed-container" v-for="offer in $store.state.offers" v-if="offer.id === $store.state.offerId">
      <div class="offer-card-detailed">
        <h1>{{offer.name}}</h1>
        <div class="image-container-detailed">
          <img class="image" :src='offer.image_url'>
        </div>
        <div class="details">
          <p><strong>Description: </strong>{{offer.description}}</p>
          <p><strong>Terms: </strong>{{offer.terms}}</p>
          <p><strong>Expires: </strong>{{formatDate(offer.expiration)}}</p>
          <p><strong>Offer Views: </strong>{{offer.views}}</p>
        </div>
        <div class="retailers">
          <p v-if="offer.retailers.length"><strong>Retailers: </strong></p>
          <select v-if="offer.retailers.length">
            <option v-if="offer.retailers.length" v-for="retailer in offer.retailers">{{retailer.name}}</option>
          </select>
        </div>
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
  @import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';

  * {
    box-sizing: border-box;
  }

  strong {
    font-weight: 700;
  }

  .offer-card-detailed-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .offer-card-detailed {
    display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: 20% 65% 15%;
    grid-template-areas:
      "title image"
      "details image"
      "button retailers";
    background-color: white;
    width: 75vw;
    height: 75vh;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.2);
  }

  h1 {
    grid-area: title;
    font-weight: 700;
    font-size: 35px;
    align-self: center;
    padding-left: 28px;
  }

  .details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    font-size: 20px;
    line-height: 1.3;
  }

  .retailers {
    grid-area: retailers;
    font-size: 20px;
    padding-left: 2rem;
    align-self: center;
    place-self: center;
  }

  button {
    grid-area: button;
    place-self: center;
    background-color: #0a7986;
    color: white;
    width: 35%;
    font-size: 16px;
    padding: .7rem;
    border-style: none;
    border-radius: 1.5rem;
    letter-spacing: .15rem;
  }

  .image-container-detailed {
    grid-area: image;
    place-self: center-stretch;
    padding-bottom: 15px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>

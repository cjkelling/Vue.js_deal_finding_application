<template>
  <div v-if="!$store.state.gallery">
    <div class="offer-card-detailed-container" v-for="offer in $store.state.offers.filter(offer => offer.id === $store.state.offerId)" v-bind:key="offer.id">
      <div class="offer-card-detailed">
        <h1>{{offer.name}}</h1>
        <div class="image-container-detailed">
          <img class="image" :src='offer.image_url'>
        </div>
        <div class="details">
          <p><strong>Description: </strong>{{offer.description}}</p>
          <p class="terms"><strong>Terms: </strong>{{offer.terms}}</p>
          <p><strong>Expires: </strong>{{formatDate(offer.expiration)}}</p>
          <p><strong>Offer Views: </strong>{{offer.views}}</p>
        </div>
        <div class="retailers">
          <span><strong>Retailers: </strong></span>
          <ul>
            <li v-for="retailer in offer.retailers" v-bind:key="retailer.id">{{'- ' + retailer.name}}</li>
          </ul>
        </div>
        <button @click="resetState()">All Offers</button>
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
      },
      resetState() {
        this.$store.state.gallery = !this.$store.state.gallery;
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
    grid-template-columns: 60% 40%;
    grid-template-rows: 15% 60% 10% 15%;
    grid-template-areas:
      "title image"
      "details image"
      "retailers image"
      "retailers button";
    background-color: white;
    width: 1150px;
    height: 500px;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.2);
    overflow-x: scroll;
    overflow-y: scroll;
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
    font-size: 18px;
    line-height: 1.3;
  }

  .terms {
    white-space: normal;
    overflow: scroll;
  }

  .retailers {
    grid-area: retailers;
    font-size: 18px;
    padding-left: 2rem;
    align-self: center;
    white-space: normal;
    overflow: scroll;
  }

  li {
    float: left;
    padding: 4px;
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

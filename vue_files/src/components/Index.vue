<template>
  <div id="app">

    <Header/>

    <main>
      <input type="text" v-model="search" placeholder="Search for offers.."/>
      <div class="gallery" v-if="gallery">
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

      <div v-if="!gallery" v-for="offer in offers">
        <div class="offer-card-detailed-container">
          <div class="offer-card-detailed" v-if="offer.id === offerId">
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
            <button @click="gallery = !gallery">All Offers</button>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
  import Header from './Header.vue';
  import axios from 'axios';

  export default{
    data() {
      return{
        offers:[],
        errors:[],
        gallery: true,
        offerId: null,
        search: '',
        endpoint: 'http://localhost:3000/api/v1/offers'
      }
    },

    created() {
      this.getAllOffers();
    },

    methods: {
      getAllOffers() {
        axios.get(this.endpoint)
          .then(response => {this.offers = response.data; })
          .catch(e => {this.errors.push(e)})
      },
      registerView(id) {
        axios.patch(this.endpoint + '/' + id, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
          .then(response => {})
          .catch(e => {this.errors.push(e)})
      },
      offerShow(id) {
        this.gallery = !this.gallery,
        this.offerId = id,
        this.registerView(id)
      },
      formatDate(data) {
        var year = data.slice(0, 4);
        var month = data.slice(5, 7);
        var day = data.slice(8, 10);
        return month + '/' + day + '/' + year
      }
    },

    computed: {
      searchOffers() {
        return this.offers.filter(offer => {
          return offer.name.toLowerCase().includes(this.search.toLowerCase()) ||
          offer.description.toLowerCase().includes(this.search.toLowerCase()) ||
          offer.terms.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },

    components: {
      Header
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

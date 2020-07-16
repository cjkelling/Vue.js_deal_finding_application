<template>
  <div id="app">
    <header>
      <h1>Ibotta Offers</h1>
    </header>
    <main>
      <div class="gallery" v-if="gallery">
        <div class="offer-card" v-for="offer in offers">
          <div @click="offerShow(offer.id)">
            <div class="image-container">
              <img class="image" :src='offer.image_url'>
            </div>
            <div class="description-container">
              <p class="description">{{offer.description}}</p>
            </div>
            <p v-if="offer.retailers.length > 0">{{'Has Retailer Information'}}</p>
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
            <h3>Offer Description:</h3>
            <p>{{offer.description}}</p>
            <h3>Offer Terms:</h3>
            <p>{{offer.terms}}</p>
            <h3>Offer Experation:</h3>
            <p>{{formatDate(offer.expiration)}}</p>
            <h3>Retailers Accepting Offer:</h3>
            <p v-if="offer.retailers.length > 0">{{'Has Retailer Information'}}</p>
            <button @click="gallery = !gallery">All Offers</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        offers:[],
        gallery: true,
        offerId: null,
        endpoint: 'http://localhost:3000/api/v1/home'
      }
    },

    created() {
      this.getAllOffers();
    },

    methods: {
      getAllOffers() {
        fetch(this.endpoint)
          .then(response => response.json())
          .then(result => { this.offers = result; })
      },
      offerShow(id) {
        this.gallery = !this.gallery,
        this.offerId = id
      },
      formatDate(data) {
        var year = data.slice(0, 4);
        var month = data.slice(5, 7);
        var day = data.slice(8, 10);
        return month + '/' + day + '/' + year
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
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 15rem;
  height: 18rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  cursor: pointer;
}

.image-container {
  width: 13rem;
  height: 10rem;
}

.description-container {
  width: 13rem;
  height: 4rem;
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
  overflow-wrap: break-word;
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
  width: 75vw;
  height: 75vh;
  padding: 0.8rem;
  margin: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  cursor: pointer;
}

.image-container-detailed {
  width: 15rem;
  height: 15rem;
}
</style>

<template>
  <div id="app">
      <header>
        <h1>Ibotta Offers</h1>
      </header>
      <main>
        <div class="gallery">
          <div class="offer-card" v-for="offer in offers">
            <div class="image-container">
              <img class="image" :src='offer.image_url'>
            </div>
            <p>{{offer.description}}</p>
            <p v-if="offer.retailers.length > 0">{{'Has Retailer Information'}}</p>
          </div>
        </div>
        <div class="show">
          <div v-for="offer in offers">
            <h2>{{offer.name}}</h2>
            <img :src='offer.image_url'/>
            <p>{{offer.description}}</p>
            <p>{{offer.terms}}</p>
            <p>{{offer.experation}}</p>
            <p v-if="offer.retailers.length > 0">{{'Has Retailer Information'}}</p>
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
  width: 14rem;
  height: 17rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  cursor: pointer;
}
.offer-card:hover {
  transform: scale(1.01);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.image-container {
  width: 13rem;
  height: 10rem;
}
.image{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

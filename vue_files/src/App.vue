<template>
  <div id="app">
    <header>
      <h1>Ibotta Offers</h1>
    </header>
    <main>
      <div class="gallery">
        <div v-for="offer in offers">
          <h2>{{offer.name}}</h2>
          <p>{{offer.description}}</p>
          <p>{{offer.terms}}</p>
          <p>{{offer.image_url}}</p>
          <p>{{offer.expiration}}</p>
          <p v-if="offer.retailers.length > 0">{{'it exists'}}</p>
        </div>
      </div>
      <div class="show">
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

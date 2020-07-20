<template>
  <div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    created() {
      this.getAllOffers();
    },

    methods: {
      getAllOffers() {
        axios.get(this.$store.state.endpoint)
          .then(response => {this.$store.state.offers = response.data; })
          .catch(e => {this.$store.state.errors.push(e)})
      }
    }
  }
</script>

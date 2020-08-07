<template>
  <div>
    Please wait...
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default{
    name: 'ApiHandler',
    methods: mapActions(['fetchOffers', 'fetchRetailers']),
    created() {
      this.fetchOffers();
      this.fetchRetailers();
    }
  }
</script>

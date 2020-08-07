<template>
  <div class="filterMenu" v-if="getGalleryView">
      <button @click="updateShowRetailers">Filter by Retailers
      </button>
    <div id="checkboxes" v-if="getShowRetailers">
      <label v-for="retailer in allRetailers" :key="retailer.id">
        <input type="checkbox" @change="addOrRemoveFilter(retailer.name, $event)">{{retailer.name}}</label>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "FilterMenu",
    computed: mapGetters(['getGalleryView', 'getShowRetailers', 'allRetailers']),
    methods: {
      ...mapActions(['addToFilter', 'removeFromFilter', 'updateShowRetailers']),
      addOrRemoveFilter(retailer, event) {
        if(event.target.checked) {
          this.addToFilter(retailer);
        } else {
          this.removeFromFilter(retailer);
        }
      }
    }
  }
</script>

<style scoped>
  button {
    background-color: #0a7986;
    color: white;
    width: 200px;
    font-size: 16px;
    margin-left: 60px;
    padding: .7rem;
    border-radius: 1.5rem;
    letter-spacing: .15rem;
    transition: 0.2s;
    cursor: pointer;
    border: none;
    outline: none;
  }

  button:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  }

  #checkboxes {
    margin: 20px 60px;
    padding: 15px;
    padding-left: 30px;
    border: 3px solid #0a7986;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    line-height: 1.4;
  }

  label {
    cursor: pointer;
  }

  input {
    margin-right: 8px;
    cursor: pointer;
  }
</style>

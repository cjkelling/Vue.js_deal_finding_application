<template>
  <div class="filterMenu" v-if="$store.state.gallery">
      <button @click="createRetailerList(), showCheckboxes()">Filter by Retailers
      </button>
    <div id="checkboxes" v-if="$store.state.showRetailers">
      <label v-for="retailer in $store.state.retailerList" v-bind:key="retailer">
        <input type="checkbox" @change="addOrRemoveFilter(retailer, $event)">{{retailer}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterMenu",

    methods: {
      createRetailerList() {
        const state = this.$store.state
        state.retailerList = []

        state.offers.forEach(offer => {
          offer.retailers.forEach(retailer => {
            state.retailerList.push(retailer.name)
          })
        })
        return state.retailerList = [...new Set(state.retailerList)]
      },
      showCheckboxes() {
        const state = this.$store.state
        state.showRetailers = !state.showRetailers
      },
      addOrRemoveFilter(retailer, event) {
        const state = this.$store.state
        if(event.target.checked) {
          state.filters = [...state.filters, retailer]
        } else {
          state.filters = state.filters.filter(filteredRetailer => filteredRetailer != retailer)
        }
      }
    }
  }
</script>

<style scoped>
  button {
    grid-area: button;
    place-self: center;
    background-color: #0a7986;
    color: white;
    width: 200px;
    font-size: 16px;
    margin-left: 60px;
    padding: .7rem;
    border-style: none;
    border-radius: 1.5rem;
    letter-spacing: .15rem;
  }
  button:active {
    border-style: none;
  }

  #checkboxes {
    margin: 20px 60px;
    border: 1 px solid #0a7986;
  }
</style>

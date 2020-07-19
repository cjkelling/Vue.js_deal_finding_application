<template>
  <div class="multiselect" v-if="$store.state.gallery">
      <button class="selectBox" @click="createRetailerList(), showCheckboxes()">Filter by Retailers
      </button>
    <div id="checkboxes" v-if="$store.state.showRetailers">
      <label v-for="retailer in $store.state.retailerList" v-bind:key="retailer.id">
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

</style>

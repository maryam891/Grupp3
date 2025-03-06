import { defineStore } from 'pinia'
export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    //if there aren't any planets added, show empty array
    planet: JSON.parse(localStorage.getItem('favPlanet')) || []
  }),
  actions: {
    addToFav(addedPlanet) {
      //Check if pushed planet dosen't have the same id to make sure to not add same planet again
      let planetExists = this.planet.find(
        (favPlanet) => favPlanet.id === addedPlanet.id
      )
      if (planetExists === undefined) {
        //push favorite planet into localstorage if it doesn't exist
        this.planet.push(addedPlanet)
      } else {
        console.log('planet already exists')
      }
      //Localstorage added favorite planet
      localStorage.setItem('favPlanet', JSON.stringify(this.planet))
      //get favorite planet
      JSON.parse(localStorage.getItem('favPlanet'))
    }
  }
})

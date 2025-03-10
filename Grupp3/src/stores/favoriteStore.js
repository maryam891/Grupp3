import { defineStore } from 'pinia'
export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    //If there aren't any planets added, show empty array
    planetList: JSON.parse(localStorage.getItem('favPlanet')) || []
  }),
  actions: {
    addToFav(addedPlanet) {
      //Declare planetExist to be false
      let planetExists = false
      //Check for all of the three to check if planetList is empty
      if (
        this.planetList === undefined ||
        this.planetList === null ||
        this.planetList.length === 0
      ) {
        planetExists = false
      } else {
        //Checking for true and false to check when planet list is empty and not empty to check for planets
        //Check if pushed planet dosen't have the same id to make sure to not add same planet again
        planetExists = !!this.planetList.find((favPlanet) => {
          return favPlanet.id === addedPlanet.id
        })
      }
      //Push favorite planet into planetList if it doesn't exist
      if (planetExists === false) {
        this.planetList.push(addedPlanet)
      } else {
        console.log('planet already exists')
      }
      //Localstorage added favorite planet
      localStorage.setItem('favPlanet', JSON.stringify(this.planetList))
      //Get favorite planet
      JSON.parse(localStorage.getItem('favPlanet'))
      //return planetExists from favoritesView
      return planetExists
    }
  }
})

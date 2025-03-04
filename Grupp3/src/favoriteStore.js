import { defineStore } from 'pinia'
export const useCounterStore = defineStore('favorite', {
  state: () => {
    //check if there aren't any planets added, show empty array
    const fav = JSON.parse(localStorage.getItem('favPlanet'))
    return { planet: fav === null ? [] : fav, settings: null }
  },
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings
      }
      const SETTINGS_LOCAL_STORAGE_KEY = 'settings'
    },
    addToFav(planet) {
      //push favorite planet into fav

      this.planet.push(planet)

      //Localstorage added favorite planet
      localStorage.setItem('favPlanet', JSON.stringify(this.planet))
      //get favorite planet
      JSON.parse(localStorage.getItem('favPlanet'))
    }
  }
})

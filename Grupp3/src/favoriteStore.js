import { defineStore } from 'pinia'
export const useCounterStore = defineStore('favorites', {
  state: () => {
    const fav = JSON.parse(localStorage.getItem('favPlanet'))
    console.log(fav)
    return { favoriteList: fav === null ? [] : fav, settings: null }
  },
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings
      }
      const SETTINGS_LOCAL_STORAGE_KEY = 'settings'
      localStorage.setItem('favPlanet', 'planet_favorites')
    },
    addToFav(planet) {
      console.log('hej!', planet)
      this.favoriteList.push(planet.id)
    }
  }
})

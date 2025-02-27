import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({ /* favoriteList: 0, settings: null, */ value: '' }),
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings
      }
      const SETTINGS_LOCAL_STORAGE_KEY = 'settings'
      // localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
    },
    increment() {
      console.log('hej')
      // this.favoriteList
    }
  }
})

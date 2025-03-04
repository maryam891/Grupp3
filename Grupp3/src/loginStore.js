 import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      username: ""
    }
  },
  actions: {
    login(username) {
      if (username) {
        this.username = username
        this.loggedInStatus = true
        localStorage.setItem('username', username)
      } else {
        alert('Please enter correct username and password')
      }
    },
    logout() {
      this.username = ''
      this.loggedInStatus = false
      localStorage.removeItem('username')
    }
  },
})

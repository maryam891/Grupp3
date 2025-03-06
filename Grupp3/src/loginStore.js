import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    username: localStorage.getItem('username') || '',
    loggedIn: localStorage.getItem('loggedIn') === 'true'
  }),
  actions: {
    //saving username and loggedin status in localstorage
    login(username, password) {
      if (username !== '' && password !== '') {
        this.username = username
        this.loggedIn = true
        localStorage.setItem('loggedIn', 'true')
        localStorage.setItem('username', username)
      } else {
        alert('Please enter correct username and password!')
      }
    },
    //removing from localstorage and making loggedin status false
    logout() {
      this.username = ''
      this.password = ''
      this.loggedIn = false
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('username')
    }
  }
})

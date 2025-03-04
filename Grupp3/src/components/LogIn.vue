<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        loggedInStatus: localStorage.getItem('loggedIn') === 'true'
      }
    },
    methods: {
      login() {
        if (this.username !== '' && this.password !== '') {
          this.loggedInStatus = true
          localStorage.setItem('loggedIn', 'true')
        } else {
          alert('Please enter name and password')
        }
      },
      logout() {
        localStorage.removeItem('loggedIn')
        this.username = ''
        this.password = ''
        this.loggedInStatus = false
      }
    }
  }
</script>

<template>
  <div class="login-container">
    <div v-if="!loggedInStatus">
      <input
        type="text"
        placeholder="Username"
        v-model="username"
        class="input-field"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="input-field"
        required
      />
      <button @click="login" class="login-btn">Log in</button>
    </div>
    <div class="logout-container" v-else>
      <button @click="logout" class="logout-btn">Log out</button>
    </div>
  </div>
</template>

<style scoped>
  .login-container {
    display: flex;
    justify-content: end;
  }

  .input-field,
  .login-btn,
  .logout-btn {
    border: transparent;
    border-radius: 36.06px;
    padding: 5px;
    font-family: poppins;
    margin-right: 1em;
  }

  .login-btn,
  .logout-btn {
    cursor: pointer;
    background-color: #e3cafb;
    color: #40027d;
    font-weight: 550;
  }

  .input-field {
    max-width: 10em;
    cursor: text;
    margin-bottom: 0.5em;
  }
</style>

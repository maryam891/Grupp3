<script>
  import { mapActions, mapState } from 'pinia'
  import { useLoginStore } from '../loginStore'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      //collect actions login&logout from store
      ...mapActions(useLoginStore, ['login', 'logout']),
      //sending input to & using login from store, saving username to be able to reuse it in profile
      manageLogin() {
        this.login(this.username, this.password)
      }
    },
    computed: {
      //collect state from store
      ...mapState(useLoginStore, ['loggedIn', 'username'])
    }
  }
</script>

<template>
  <div class="login-container">
    <!-- Check if logged in to show login field-->
    <div v-if="!loggedIn">
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
      <!--Sending login-info to pinia-->
      <button @click="manageLogin" class="login-btn">Log in</button>
    </div>
    <!--Check if logged in, hide login field and view logout-btn-->
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
    font-weight: 400;
    width: 60px
  }

  .input-field {
    max-width: 10em;
    cursor: text;
    margin-bottom: 0.5em;
  }
</style>

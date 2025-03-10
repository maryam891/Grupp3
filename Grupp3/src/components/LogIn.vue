<script>
  import { mapActions, mapState } from 'pinia'
  import { useLoginStore } from '../stores/loginStore'

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
      },
      manageLogout() {
        this.logout()
        this.username = ''
        this.password = ''
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
    <div class="login-content" v-if="!loggedIn">
      <p>Log in to view your progress</p>
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
      <button @click="manageLogout" class="logout-btn">Log out</button>
    </div>
  </div>
</template>

<style scoped>
  .login-content {
    display: grid;
    justify-content: center;
    background-color: #fff;
    position: relative;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
    width: 30vw;
    left: 35%;
    padding: 3.7em 2vw 6vh 2vw;
    background-color: #ffffff;
    color: #40027d;
    border-radius: 43.02px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 4%;
  }

  .login-content p {
    margin-bottom: 1.5em;
  }

  .input-field,
  .login-btn,
  .logout-btn {
    border-radius: 36.06px;
    padding: 5px;
    font-family: poppins;
    margin-right: 1em;
  }

  .login-btn,
  .logout-btn {
    cursor: pointer;
    border: transparent;
    background-color: #e3cafb;
    color: #40027d;
    font-weight: 400;
    width: 60px;
  }

  .login-btn {
    display: flex;
    justify-content: center;
    margin-left: 50%;
  }

  .logout-btn {
    margin-left: 90%;
    margin-bottom: 3%;
  }

  .input-field {
    max-width: 50%;
    cursor: text;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 374.9px) and (max-width: 768px) {
    .login-content {
      width: 50%;
      left: 30%;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {
    .logout-btn {
      margin-left: 85%;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 572px) {
    .input-field {
      max-width: 70%;
      cursor: text;
      margin-bottom: 1em;
    }

    .logout-btn {
      margin-left: 80%;
    }
  }
</style>

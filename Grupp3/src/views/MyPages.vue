<script>
  import LogIn from '../components/LogIn.vue'
  import QuizResult from '../components/QuizResult.vue'
  import { mapActions, mapState } from 'pinia'
  import { useLoginStore } from '../stores/loginStore'

  export default {
    components: {
      LogIn,
      QuizResult
    },
    data() {
      return {
        currentPage: 'My Page',
        message: '',
        modalText: '',
        showModal: false,
        modalClick: ''
      }
    },
    computed: {
      ...mapState(useLoginStore, ['username', 'loggedIn'])
    },
    methods: {
      ...mapActions(useLoginStore, ['loggedIn']),
      //displays different content depending on tab
      openPage(pageName) {
        this.currentPage = pageName
      },
      //function to sign up for newsletter + empty textfield
      onSubmitNewsletter() {
        alert(
          "You've signed up to our newsletter using email address: " +
            this.message
        )
        this.message = ''
      },
      //settings to delete acc or unsubscribe from newsletter
      clickToUndo(click) {
        if (click === 'delete') {
          this.modalText = 'Do you wish to delete your account?'
          this.modalClick = 'delete'
        } else if (click === 'unsubscribe') {
          this.modalText = 'Do you wish to unsubscribe from our newsletter?'
          this.modalClick = 'unsubscribe'
        }
        this.showModal = true
      },
      confirmChoice() {
        if (this.modalClick === 'delete') {
          alert('Your account will be deleted within 30 days.')
        } else if (this.modalClick === 'unsubscribe') {
          alert('You have unsubscribed from our newsletter.')
        }
        this.showModal = false
      }
    }
  }
</script>

<template>
  <main>
    <LogIn />
    <div class="my-page-container" v-if="loggedIn">
      <!-- Navigation to my page & progress/journey -->
      <div class="my-page-navbar">
        <button class="mp-navbar-tab" @click="openPage('My Page')">
          My Page
        </button>
        <button class="mp-navbar-tab" @click="openPage('My Journey')">
          My Journey
        </button>
      </div>
      <div class="content-container">
        <!-- <RouterView /> -->
        <div class="page" v-show="currentPage === 'My Page'">
          <h2>My Page</h2>
          <!-- Box with user-info -->
          <div class="user-container">
            <i class="fa-solid fa-circle-user" style="color: #40027d" />
            <div class="user-info">
              <p>Username: {{ username }}</p>
            </div>
          </div>
          <!-- Form to sign up to Newsletter -->
          <form @submit="onSubmitNewsletter">
            <h3 class="newsletter-h3">Sign up to our newsletter</h3>
            <p class="newsletter-text">
              Stay updated with our latest news and exclusive insights—subscribe
              to our newsletter! Enter your email below and join our community.
            </p>
            <div class="newsletter-container">
              <input
                type="email"
                v-model="message"
                @keyup.enter="onSubmitNewsletter"
                placeholder="Email address"
                class="email-field"
                required
              />
              <input type="submit" value="Submit" class="submit-btn" />
            </div>
          </form>
          <!-- Account settings to delete acc or unsubscribe -->
          <div class="account-settings">
            <button class="settings-btn" @click="clickToUndo('delete')">
              Delete account
            </button>
            <button class="settings-btn" @click="clickToUndo('unsubscribe')">
              Unsubscribe*
            </button>
            <p class="unsubscribe-news">
              *You are welcome to subsribe to our newsletter again
            </p>
          </div>
          <!-- Display confirmation modal when the user clicks to delete acc/unsubscribe -->
          <div v-if="showModal" class="modal-overlay">
            <div class="modal">
              <h4>{{ modalText }}</h4>
              <div class="modal-buttons">
                <button class="modal-btn secondary-btn" @click="confirmChoice">
                  Yes
                </button>
                <button
                  class="modal-btn secondary-btn"
                  @click="showModal = false"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="page" v-show="currentPage === 'My Journey'">
          <h2>My Journey</h2>
          <QuizResult />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /* whole page container */
  .my-page-container {
    position: relative;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
    width: 80vw;
    left: 10%;
    padding: 3.7em 2vw 6vh 2vw;
    background-color: #ffffff;
    color: #40027d;
    border-radius: 43.02px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .my-page-navbar {
    display: flex;
    justify-content: left;
    align-items: start;
    width: 80%;
  }

  .content-container {
    border-radius: 43.02px;
    border: 10px solid #e3cafb;
    width: 90%;
    height: 82%;
  }

  h2 {
    position: relative;
    margin: 1.5em;
  }

  /*navigation bar/tabs my pages*/
  .mp-navbar-tab {
    border-radius: 36.06px 36.06px 0 0;

    font-weight: 550;
    cursor: pointer;
    height: 43.21px;
    margin-top: 10px;
    margin-right: 0.2em;
    padding: 5px;
    background-color: #e3cafb;
    border: none;
    width: 140px;
    color: #280070;
  }

  /*sign up to newsletter*/
  .email-field {
    border: transparent;
    padding: 8px;
    border-radius: 43.02px;
    font-family: poppins;
    border: 4px solid #e3cafb;
  }

  .submit-btn {
    border: transparent;
    border-radius: 36.06px;
    width: 90px;
    padding: 8px;
    font-family: poppins;
    cursor: pointer;
    background-color: #e3cafb;
    color: #280070;
    font-weight: 400;
  }

  /*user info and settings*/
  .user-container {
    display: flex;
    justify-content: center;
    border-radius: 43.02px;
    background-color: #e3cafb;
    width: 50%;
    padding: 4vw;
    margin-top: 2em;
    margin-left: 14vw;
  }

  .fa-circle-user {
    position: relative;
    right: 23%;
    font-size: 80px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    position: relative;
    right: 20%;
    text-align: left;
    margin-top: 1em;
  }

  /*sig up to newsletter part*/
  form {
    margin: 5em;
    height: 100%;
  }

  .newsletter-text {
    width: 100%;
  }

  /*account settings*/
  .account-settings {
    display: inline-block;
    margin-top: 8em;
  }

  .unsubscribe-news {
    font-size: 9px;
    margin-bottom: 5em;
  }

  .settings-btn {
    border-radius: 36.06px;
    font-weight: 550;
    cursor: pointer;
    height: 35px;
    padding: 5px;
    background-color: #c6bccf88;
    font-size: 0.7rem;
    border: none;
    width: 100px;
    color: #270070c0;
    margin: 2em;
  }

  /* modal confirm choice */
  .modal-overlay {
    position: fixed;
    top: 30%;
    left: 40%;
    width: 20rem;
    height: 20rem;
    background: #ffffff;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 43.02px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .modal {
    text-align: center;
  }

  .modal-buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-btn {
    cursor: pointer;
    color: #40027d;
    border-color: #40027d;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    .email-field {
      width: 60%;
    }
    /*navigation and main content*/
    .my-page-container {
      width: 90vw;
      left: 5%;
    }

    .content-container {
      border-radius: 43.02px;
      border: 10px solid #e3cafb;
      width: 100%;
      height: 82%;
    }
    /*user info and settings*/
    .user-container {
      width: 100%;
      padding: 10%;
      margin-left: 10%;
    }

    .fa-circle-user {
      position: relative;
      right: 2%;
      font-size: 40%;
    }

    .user-info {
      left: 2%;
      text-align: left;
      margin-top: 1em;
    }

    form {
      margin: 1em 1em 0 1em;
    }

    .submit-btn {
      margin-top: 1em;
    }

    .logout-btn {
      position: relative;
      left: 10%;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 572px) {
    .email-field {
      width: 70%;
      margin-bottom: 1em;
    }
    .my-page-navbar {
      height: 30%;
      width: 70%;
    }
    .newsletter-container {
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 90%;
    }
    .newsletter-text {
      margin-top: 1em;
      width: 70%;
      height: 50%;
    }
    .newsletter-h3 {
      text-align: left;
    }
    /*user info and settings*/
    .user-container {
      width: 64%;
    }

    .fa-circle-user {
      right: 16%;
      font-size: 60px;
    }

    .user-info {
      right: 15%;
    }
    .mp-navbar-tab {
      border-radius: 25px 25px 0 0;
      width: 100%;
    }
    /* modal confirm choice */
    .modal-overlay {
      top: 0;
      left: 4%;
    }
    .page {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    .settings-btn {
      font-weight: 550;
      padding: 5px;
      font-size: 1rem;
      margin-top: 20px;
      width: 140px;
      height: 40px;
    }
    .account-settings {
      flex-direction: column;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-left: 1em;
      margin-top: 3em;
    }
    .newsletter-text {
      width: 90%;
      height: 70%;
      text-align: left;
    }
    .newsletter-container {
      justify-content: center;
      margin-top: 1em;
      height: 100%;
    }
    .unsubscribe-news {
      font-size: 0.9em;
      width: 50%;
      margin-left: 1.4em;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {
    .newsletter-container {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
    .my-page-navbar {
      width: 90%;
    }
    /*user info and settings*/
    .user-container {
      width: 63%;
      height: 25%;
      position: relative;
      left: 10%;
    }

    .email-field {
      width: 50%;
      margin-bottom: 1em;
    }

    .fa-circle-user {
      right: 20%;
      font-size: 60px;
    }

    .user-info {
      right: 15%;
    }
    .submit-btn {
      border-radius: 32px;
      width: 90px;
      height: 40px;
      padding: 8px;
    }
    .page {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      flex-direction: column;
    }
    .newsletter-text {
      width: 100%;
      height: 40%;
    }

    form {
      margin: 1em 1.4em 0 1em;
    }

    .newsletter-container {
      justify-content: center;
      margin-top: 1em;
      height: 100%;
    }

    .account-settings {
      justify-content: left;
    }
    .settings-btn {
      font-weight: 550;
      height: 35px;
      padding: 5px;
      font-size: 1rem;
      width: 140px;
      height: 40px;
    }
    .unsubscribe-news {
      font-size: 1em;
      margin-left: 1em;
    }
  }
  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    .unsubscribe-news {
      font-size: 0.8em;
    }
    .my-page-navbar {
      width: 80%;
    }
    .submit-btn {
      border-radius: 32px;
      width: 90px;
      height: 40px;
      padding: 8px;
      margin-top: 1em;
    }
    .page {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    .newsletter-text {
      width: 100%;
      height: 40%;
    }

    form {
      margin: 2em 1.4em 0 1em;
    }

    .newsletter-container {
      justify-content: center;
      margin-top: 1em;
    }
    /*user info and settings*/
    .user-container {
      width: 63%;
      height: 25%;
    }

    .fa-circle-user {
      right: 20%;
      font-size: 60px;
    }

    .user-info {
      right: 15%;
    }
  }

  @media screen and (min-width: 980.1px) {
    .page {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    .submit-btn {
      border-radius: 32px;
      width: 90px;
      height: 40px;
      padding: 8px;
      margin-top: 1em;
    }

    .newsletter-container {
      justify-content: center;
      margin-top: 1em;
    }

    .newsletter-container {
      justify-content: center;
      margin-top: 1em;
    }

    form {
      margin: 2em 1.4em 0 1em;
    }
  }
</style>

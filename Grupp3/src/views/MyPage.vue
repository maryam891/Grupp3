<script>
  import LogIn from '../components/LogIn.vue'
  import QuizResult from '../components/QuizResult.vue'
  import { mapActions, mapState } from 'pinia'
  import { useLoginStore } from '../loginStore'

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
        modalClick: '',
        username: this.username
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
        <div class="page" v-show="currentPage === 'My Page'">
          <h2>My Page</h2>
          <!-- Box with user-info -->
          <div class="user-container">
            <i class="fa-solid fa-circle-user" style="color: #40027d" />
            <div class="user-info">
              <p>Username: {{ username }}</p>
              <p>Password: *********</p>
            </div>
            <i class="fa-solid fa-gears" style="color: #40027d" />
          </div>
          <!-- Form to sign up to Newsletter -->
          <form @submit="onSubmitNewsletter">
            <h3 class="newsletter-h3">Sign up to our newsletter</h3>
            <p>
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
    position: absolute;
    top: 1%;
    left: 10%;
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
    width: 60%;
    padding: 4vw;
    margin-top: 2em;
    margin-left: 14vw;
  }

  .fa-circle-user {
    position: relative;
    right: 23%;
    font-size: 80px;
  }

  .fa-gears {
    position: relative;
    left: 22%;
    font-size: 30px;
    cursor: pointer;
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
  }

  /*account settings*/
  .account-settings {
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

  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {

  }

  @media screen and (min-width: 375px) and (max-width: 572px){
    
  }

@media screen and (min-width: 572.1px) and (max-width: 768px){

}

@media screen and (min-width: 768.1px) and (max-width: 980px){

}

@media screen and (min-width: 980.1px) {

}

</style>

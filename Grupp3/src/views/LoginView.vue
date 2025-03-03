<script>
  import LogIn from '../components/LogIn.vue'

  export default {
    components: {
      LogIn
    },
    data() {
      return {
        currentPage: 'My Page',
        message: ''
      }
    },
    methods: {
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
      }
    }
  }
</script>

<template>
  <header>
    <LogIn />
  </header>
  <main>
    <div class="my-page-container">
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
          <div class="user-container">
            <i class="fa-solid fa-circle-user" style="color: #40027d" />
            <div class="user-info">
              <p>Username:</p>
              <p>Email address:</p>
            </div>
            <i class="fa-solid fa-gears" style="color: #40027d" />
          </div>
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
              <input type="submit" value="Submit" class="enter-btn" />
            </div>
          </form>
          <div class="user-settings">
            <button class="primary-btn">Delete account</button>
            <button class="primary-btn">Unsubscribe*</button>
            <p class="unsubscribe-news">
              *You can always subsribe to our newsletter again
            </p>
          </div>
        </div>
        <div class="page" v-show="currentPage === 'My Journey'">
          <h2>My Journey</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .login-container {
    display: flex;
    justify-content: end;
  }

  .email-field {
    border: transparent;
    padding: 8px;
    border-radius: 43.02px;
    font-family: poppins;
    border: 4px solid #e3cafb;
  }

  .enter-btn {
    border: transparent;
    padding: 4px;
    border-radius: 8px;
    font-family: poppins;
  }

  .enter-btn {
    cursor: pointer;
    background-color: #e3cafb;
  }

  .my-page-navbar {
    position: absolute;
    top: 2%;
    left: 10%;
  }

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

  .primary-btn {
    padding: 8px;
    margin-right: 2em;
    margin-left: 2em;
  }

  .content-container {
    border-radius: 43.02px;
    border: 4px solid #e3cafb;
    width: 90%;
    height: 82%;
  }

  h2 {
    position: relative;
  }

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
    right: 25%;
    font-size: 80px;
  }

  .fa-gears {
    position: relative;
    left: 30%;
    font-size: 30px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    position: relative;
    right: 20%;
    text-align: left;
    margin-top: 1em;
  }

  form {
    margin: 3em;
  }

  .user-settings {
    margin-top: 2em;
  }

  .unsubscribe-news {
    font-size: 9px;
  }

  .my-page-container {
    position: relative;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
    height: 100vh;
    width: 80vw;
    left: 10%;
    background-color: #ffffff;
    color: #40027d;
    border-radius: 43.02px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    form {
      display: flex;
      flex-direction: column;
      padding-bottom: 1em;
      padding-left: 3em;
    }

    .newsletter-container {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    form {
      display: flex;
      flex-direction: column;
      padding-bottom: 1em;
      padding-left: 3em;
    }

    .newsletter-container {
      display: flex;
    }
  }
</style>

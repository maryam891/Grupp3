<script>
  export default {
    data() {
      return {
        logo: '/assets/image/Space Learning Logo.png',
        message: ''
      }
    },
    methods: {
      //function to sign up for newsletter + empty textfield
      onSubmitNewsletter(e) {
        alert(
          "You've signed up to our newsletter using email address: " +
            this.message
        )
        this.message = ''
        e.preventDefault()
      }
    }
  }
</script>

<template>
  <footer>
    <div class="footer-row">
      <div class="footer-column">
        <router-link to="/">
          <img :src="logo" alt="Logo" />
        </router-link>
      </div>
      <div class="footer-column">
        <ul class="footer-links">
          <li>
            <router-link to="/contact" class="nav-link">Contact us</router-link>
          </li>
          <li>
            <router-link to="/quiz" class="nav-link">Quiz</router-link>
          </li>
          <li>
            <router-link to="/facts" class="nav-link">Planets</router-link>
          </li>
          <li>
            <router-link to="/Favorites" class="nav-link"
              >Favorites</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Newletter part -->
        <form @submit="onSubmitNewsletter">
          <h3 class="footer-newsletter-h3">Sign up to our newsletter</h3>
          <div class="newsletter-container">
            <input
              type="email"
              v-model="message"
              @keyup.enter="onSubmitNewsletter"
              placeholder="Email address"
              class="email-field"
              required
            />
            <input type="submit" value="Submit" class="btn-enter" />
          </div>
        </form>
      </div>
    </div>
    <hr />
    <div class="copyright">
      <p>Copyright FAME © 2025</p>
    </div>
  </footer>
</template>

<style>
  footer {
    width: 100%;
    margin-top: 4em;
    position: static;
    bottom: 0;
  }

  footer .footer-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  }

  .footer-column img {
    width: 100%;
    margin-left: 2em;
  }

  .footer-newsletter-h3 {
    margin-right: 2em;
  }

  .footer-links {
    list-style: none;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  .footer-links li {
    margin: 0.5em;
  }

  .email-field,
  .btn-enter {
    border: transparent;
    padding: 4px;
    border-radius: 8px;
    font-family: poppins;
  }

  .btn-enter {
    cursor: pointer;
    background-color: #e3cafb;
  }

  .email-field {
    cursor: text;
    margin-top: 1em;
    margin-right: 1em;
  }

  .copyright {
    display: flex;
    justify-content: center;
    margin-top: 0.4em;
    margin-bottom: 0.2em;
  }

  .copyright p {
    font-size: 12px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    img {
      padding-left: 1em;
    }

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

    .btn-enter {
      margin-top: 1em;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    img {
      padding-left: 1em;
    }

    form {
      display: flex;
      flex-direction: column;
      padding-bottom: 1em;
      padding-left: 3em;
    }

    .newsletter-container {
      display: flex;
    }

    .btn-enter {
      margin-top: 1em;
    }

    ul {
      margin-top: 0em;
    }

    li {
      margin-top: 0em;
    }
  }
</style>

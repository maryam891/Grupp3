<script>
  export default {
    data() {
      return {
        logo: "/assets/image/Space Learning Logo.png",
        message: ""
      }
    },
    methods: {
        onBtnClick() {
            alert("You've signed up to our newsletter using email address: " + this.message)
            this.message = ""
        }
    }
  };
</script>

<template>
    <footer>
        <div class="footer-row">
            <div class="footer-column">
                <img :src="logo" alt="Logo">
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
                    <router-link to="/quizshow" class="nav-link">QuizShow</router-link>
                    </li>
                    <li>
                    <router-link to="/facts" class="nav-link">Facts</router-link>
                    </li>
                    <li>
                    <router-link to="/Favorites" class="nav-link">Favorites</router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-newsletter-h3">Sign up to our newsletter</h3>
<!--                 <p>Stay updated with our latest news and exclusive insights—subscribe to our newsletter! Simply enter your email below and join our community.</p> -->
                <div class="newsletter-container">
                    <input type="email" v-model="message" @keyup.enter="onBtnClick" placeholder="Email address" class="email-field">
                    <input @click="onBtnClick" type="button" value="Submit" class="btn-enter">
                </div>
            </div>
        </div>
        <hr>
        <div class="copyright">
            <p>Copyright FAME © 2025</p>
        </div>
    </footer>
</template>

<style>
footer {
    width: 100%;
    position: fixed;
    bottom: 0;
}

footer .footer-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
}

.footer-column img {
    height: 25%;
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
    margin: .5em;
}

.email-field, .btn-enter {
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
    margin-top: .4em;
}

.copyright p {
    font-size: 12px;
}
</style>

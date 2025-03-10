<script>
export default {
  methods: {
    // Dispatches a custom event named "resetView"
    // This event is used to reset the quiz view when navigating back to the quiz page
    handleResetQuizView() {
      window.dispatchEvent(new CustomEvent("resetView"));
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
      this.isClicked = !this.isClicked
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
       if(this.windowWidth <= 768){
         this.mobile = true;
         return;
       }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
  data(){
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
      isClicked: false
    }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  }
}
// const handleResetQuizView = () => {
//   window.dispatchEvent(new CustomEvent("resetView"));
// };
</script>

<template>
  <header>
    <nav class="navbar-container">
      <router-link to="/">
        <img src="/assets/image/Space Learning Logo.png" alt="Logo" />
      </router-link>
      <ul class="nav" v-show="!mobile">
        <li>
          <router-link to="/quiz" class="nav-link" @click="handleResetQuizView"
            >Quiz</router-link
          >
        </li>
        <li>
          <router-link to="/facts" class="nav-link">Planets</router-link>
        </li>
        <li>
          <router-link to="/favorites" class="nav-link">Favorites</router-link>
        </li>
        <li>
          <router-link to="/mypages" class="nav-link">My Pages</router-link>
        </li>
      </ul>
      <!--Hamburgericon or xmark icon-->
      <div class="icon" v-show="mobile">
        <i :class="[isClicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']" @click="toggleMobileNav" />
      </div>
      <!--Mobile navigation-->
      <transition name="mobile-nav">
        <ul class="dropdown-nav" v-show="mobileNav">
          <li>
            <router-link to="/" class="nav-link">Home
            </router-link>
          </li>
          <li>
            <router-link to="/quiz" class="nav-link" @click="handleResetQuizView"
              >Quiz</router-link
            >
          </li>
          <li>
            <router-link to="/facts" class="nav-link">Planets</router-link>
          </li>
          <li>
            <router-link to="/Favorites" class="nav-link">Favorites</router-link>
          </li>
          <li>
          <router-link to="/mypages" class="nav-link">My Pages</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style>
.navbar-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%
}
.nav {
  display: flex;
  list-style: none;
}
.nav-link {
  padding: 0 40px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: rgb(179, 179, 253);
  }
}
/*Hamburger icon*/
.icon, .exit-icon {
  display: flex;
  /* position: absolute; */
  top: 0;
  right: 24px;
  cursor: pointer;
  font-size: 24px;

 /*i {
    cursor: pointer;
    font-size: 24px;
  }*/
}
/*Mobilenavigation styling*/
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: black;
  top: 0;
  left: 0;
  z-index: 99;

  li {
    padding-top: 3em;
    margin-left: 0;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}
</style>

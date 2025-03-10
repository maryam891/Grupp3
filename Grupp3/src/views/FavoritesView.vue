<script>
  import { mapStores } from 'pinia'
  import { useFavoriteStore } from '../stores/favoriteStore'
  export default {
    created() {
      //Get added planets
      this.favorite = JSON.parse(localStorage.getItem('favPlanet')) || []
      //If a planet is added show Your favorite planets
      if (this.favorite.length > 0) {
        this.favoritePlanets = true
        this.noAddedplanets = false
      }
      //Check if no planet is added to favorites to render No favorite planet added
      if (this.favorite.length <= 0) {
        this.noAddedplanets = true
        this.favoritePlanets = false
      }
    },
    methods: {
      //function to remove planets from favorites
      confirmToRemove(id) {
        //Filter out planets that are removed
        this.favorite = this.favorite.filter((planet) => {
          return planet.id !== id
        })
        //Update localstorage when removing planet
        localStorage.setItem('favPlanet', JSON.stringify(this.favorite))
        //Check if no planet is added to favorites to render other message
        if (this.favorite.length <= 0) {
          this.noAddedplanets = true
          this.favoritePlanets = false
        }
      },
      //Show confirm remove overlay when clicking on heart icon
      //Check for which planet with the icon has been clicked to only show overlay for that planet
      removeFromFav(id) {
        let clicked = this.favorite.find((clickedFav) => {
          return clickedFav.id === id
        })
        if (clicked) {
          this.confirmRemove = id
        }
      },
      //close overlay when clicking on the No button
      cancelRemove() {
        this.confirmRemove = false
      }
    },

    data() {
      return {
        favorite: [],
        favImg: [],
        favoritePlanets: false,
        noAddedplanets: false,
        confirmRemove: false
      }
    },
    computed: {
      ...mapStores(useFavoriteStore)
    }
  }
</script>

<template>
  <!--Check if any planet is added and show the planets-->
  <div v-if="favoritePlanets" class="main">
    <h1>Your favorite planets</h1>
    <div class="favorites-container">
      <div
        v-for="favorites in favorite"
        class="favorite-card"
        :key="favorites.id"
      >
        <i
          class="fa-solid fa-heart heart-icon"
          @click="removeFromFav(favorites.id)"
        />
        <p>{{ favorites.name }}</p>
        <img :src="favorites.src" />
        <div
          class="remove-planet-overlay"
          v-if="confirmRemove === favorites.id"
        >
          <p class="remove-overlay-text">
            Are you sure you want to remove the planet?
          </p>
          <button
            @click="confirmToRemove(favorites.id)"
            class="confirm-remove-btn"
          >
            Yes
          </button>
          <button @click="cancelRemove" class="cancel-remove-btn">No</button>
        </div>
      </div>
    </div>
  </div>
  <!--If no planet is added show the following message-->
  <div v-show="noAddedplanets" class="empty-planet-container">
    <h1>No favorite planet added</h1>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  .favorites-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 95%;
    margin-bottom: 1em;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em;
  }

  .favorite-card {
    margin-top: 2em;
    height: 300px;
    width: 300px;
    background-color: rgba(79, 79, 136, 0.502);
    border-radius: 5px;
    margin-bottom: 2em;
  }

  .heart-icon {
    color: #e3cafb;
    cursor: pointer;
    font-size: 1em;
    margin-left: 1em;
    transition: all 0.2s ease-in-out;
  }
  .heart-icon:hover {
    transform: scale(1.2);
  }

  img {
    height: 200px;
    width: 200px;
    margin-left: 2em;
  }

  p {
    margin-left: 1em;
  }

  .empty-planet-container {
    height: 100vh;
  }

  .remove-planet-overlay {
    margin-bottom: 1em;
    height: 120px;
    width: 300px;
    border-radius: 0.2em;
    background-color: rgb(250, 247, 247);
  }

  .confirm-remove-btn {
    height: 30px;
    width: 80px;
    margin-top: 1em;
    margin-left: 1em;
    background-color: #ffffff;
    border: 2px solid #40027d;
    color: #40027d;
    cursor: pointer;
    border-radius: 1em;
  }
  .cancel-remove-btn {
    cursor: pointer;
    position: relative;
    left: 30%;
    margin-top: 1em;
    height: 30px;
    width: 80px;
    background-color: #ffffff;
    border: 2px solid #40027d;
    border-radius: 1em;
    color: #40027d;
  }

  .remove-overlay-text {
    color: black;
  }
</style>

<script>
  import { mapStores } from 'pinia'
  import { useCounterStore } from '../favoriteStore'
  export default {
    created() {
      //Get added planets
      this.favorite = JSON.parse(localStorage.getItem('favPlanet'))
      this.favoritePlanets = true
    },
    methods: {
      confirmToRemove(id) {
        //function to remove planets from favorites
        this.favorite.splice(id, 1)
        //Update localstorage when removing planet
        localStorage.setItem('favPlanet', JSON.stringify(this.favorite))
        //Check if no planet is added to favorites to render other message in div
        if (this.favorite.length === 0) {
          this.favoritePlanets = false
          this.noAddedplanets = true
        }
      },
      //show confirm remove overlay when clicking on heart icon
      removeFromFav() {
        this.confirmRemove = true
      },
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
      ...mapStores(useCounterStore)
    }
  }
</script>

<template>
  <!--Check if any planet is added and show the planets-->
  <div v-if="favoritePlanets" class="main">
    <h1>Your favorite planets</h1>
    <div class="favorites-container">
      <div v-for="(favorites, id) in favorite" class="favorite-card" :key="id">
        <i class="fa-solid fa-heart heart-icon" @click="removeFromFav()" />
        <p>{{ favorites.name }}</p>
        <img :src="favorites.src" />
        <div v-show="confirmRemove" class="remove-planet-overlay">
          <p class="remove-overlay-text">
            Are you sure you want to remove the planet?
          </p>
          <button @click="confirmToRemove" class="confirm-remove-btn">
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

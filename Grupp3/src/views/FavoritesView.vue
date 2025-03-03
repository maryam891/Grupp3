<script>
  import { mapStores } from 'pinia'
  import { useCounterStore } from '../favoriteStore'
  export default {
    created() {
      //Get added planets
      this.favorite = JSON.parse(localStorage.getItem('favPlanet'))
    },
    methods: {
      //function to remove planets from favourites
      removeFromFav(id) {
        this.favorite.splice(id, 1)
        //Update localstorage when removing planet
        localStorage.setItem('favPlanet', JSON.stringify(this.favorite))
      }
    },
    data() {
      return {
        favorite: [],
        favImg: []
      }
    },
    computed: {
      ...mapStores(useCounterStore)
    }
  }
</script>

<template>
  <!--Check if any planet is added and show the planets-->
  <div v-if="favorite !== []">
    <h1>Your favorite planets</h1>
    <div class="favorites-container">
      <div v-for="(favorites, id) in favorite" class="favorite-card" :key="id">
        <i class="fa-solid fa-heart heart-icon" @click="removeFromFav(id)" />
        <p>{{ favorites.name }}</p>
        <img :src="favorites.src" />
      </div>
    </div>
  </div>
  <!--If no planet is added show the following message-->
  <div v-if="favorite === []">
    <h2>No favorite planet added</h2>
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
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 15px;
  }

  .favorite-card {
    margin-top: 1em;
    height: 300px;
    width: 300px;
    background-color: rgba(79, 79, 136, 0.502);
    border-radius: 5px;
  }

  .heart-icon {
    color: #e3cafb;
    cursor: pointer;
    font-size: 1em;
    margin-left: 1em;
  }

  img {
    height: 200px;
    width: 200px;
    margin-left: 2em;
  }

  p {
    margin-left: 1em;
  }
</style>

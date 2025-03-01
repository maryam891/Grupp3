<script>
  import { mapStores } from 'pinia'
  import { useCounterStore } from '../favoriteStore'
  export default {
    created() {
      this.favorite = JSON.parse(localStorage.getItem('favPlanet'))
      console.log(this.favorite[0].name)
    },
    methods: {
      //function to remove planets from favourites
      removeFromFav(id) {
        this.favorite.splice(id, 1)
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
  <div class="main">
    <h1>Your favorite planets</h1>
    <div class="favorites-container">
      <!-- <p v-if="favoriteStore.planet !== 0">
        {{ favoriteStore.planet[0] }}
      </p> -->
      <div v-for="(favorites, id) in favorite" class="favorite-card" :key="id">
        <i class="fa-solid fa-heart heart-icon" @click="removeFromFav(id)" />
        <p>{{ favorites.name }}</p>
        <img :src="favorites.src" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    height: 100vh;
  }
  h1 {
    text-align: center;
  }

  .favorites-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }

  .favorite-card {
    margin-top: 1em;
    height: 300px;
    width: 300px;
    background-color: rgb(47, 47, 55);
    border-radius: 5px;
  }

  .heart-icon {
    color: #e3cafb;
    cursor: pointer;
    font-size: 1em;
  }

  img {
    height: 200px;
    width: 200px;
  }
</style>

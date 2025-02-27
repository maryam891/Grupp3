<script>
  import { mapStores } from 'pinia'
  import { useCounterStore } from '../favoriteStore'
  export default {
    created() {
      let addedFavoritePlanet = localStorage.getItem('favPlanet')
      console.log(addedFavoritePlanet)
    },
    methods: {
      //function to remove planets from favourites
      removeFromFav(id) {
        this.result.planets.splice(id, 1)
      }
    },
    data() {
      return {
        result: []
      }
    },
    computed: {
      ...mapStores(useCounterStore)
    }
  }
</script>

<template>
  <div>
    <h1>Your favorite planets</h1>
    <div class="favorites-container">
      <p v-if="favoritesStore.favoriteList !== 0">
        {{ favoritesStore.favoriteList[0] }}
      </p>
      <div
        v-for="(planet, id) in result.planets"
        class="favorite-card"
        :key="id"
      >
        <i class="fa-solid fa-heart heart-icon" @click="removeFromFav(id)" />
        <p>{{ planet.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  .favorites-container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: 300px 300px 300px;
    gap: 10px;
    margin-top: 15px;
  }

  .favorite-card {
    height: 300px;
    width: 300px;
    background-color: rgb(90, 89, 88);
  }

  .heart-icon {
    color: #e3cafb;
    cursor: pointer;
    font-size: 1em;
  }
</style>

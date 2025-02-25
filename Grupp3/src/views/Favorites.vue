<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../store'
export default {
  created() {
    fetch("/db.json")
      .then((response) => response.json())
      .then((result) => {
        this.result = result;
        console.log(result);
      });
  },
  methods: {
    //function to remove planets from favourites
    removeFromFav(id) {
      this.result.planets.splice(id, 1);
    },
  },
  data() {
    return {
      result: [],
    };
  },
};
</script>

<template>
  <h1>Your favorite planets</h1>
  <div id="favorites-container">
    <div v-for="(planet, id) in result.planets" id="favorite-card" :key="id">
      <i class="fa-solid fa-heart heart-icon" @click="removeFromFav(id)"></i>
      <p>{{ planet.name }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

#favorites-container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: 300px 300px 300px;
  gap: 10px;
  margin-top: 15px;
}

#favorite-card {
  height: 300px;
  width: 300px;
  background-color: rgb(90, 89, 88);
}

.heart-icon {
  color: #e3cafb;
  cursor: pointer;
}
</style>

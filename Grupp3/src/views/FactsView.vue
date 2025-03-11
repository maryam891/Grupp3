<script>
  import { mapStores } from 'pinia'
  import { useFavoriteStore } from '../stores/favoriteStore'
  import Nasa from '../components/NasaInfo.vue'
  import NasaInfo from '../components/NasaInfo.vue'
  export default {
    components: {
      NasaInfo: NasaInfo
    },
    created() {
      fetch('/infodb.json')
        .then((response) => response.json())
        .then((data) => {
          this.planets = data
        })
    },
    data() {
      return {
        clickedPlanet: null,
        planets: null,
        modalVisible: false,
        modalText: '',
        modalHeader: '',
        iconOverlay: false,
        clicked: false,
        addedPlanet: false,
        planetExist: false,
        planetExists: false,
        heartColor: false,
        isFavorite: false,
        isDisabled: false
      }
    },

    computed: {
      ...mapStores(useFavoriteStore),
      favoriteText() {
        return this.isFavorite ? 'Added to favorites' : 'Add to favorites'
      }
    },

    methods: {
      mouseOver(event) {
        event.target.classList.add('hovered')
      },
      mouseOut(event) {
        event.target.classList.remove('hovered')
      },

      showModal(planet) {
        this.clickedPlanet = planet
        this.modalVisible = true
        this.modalText = planet.info
        this.modalHeader = planet.name
        const planets = this.favoriteStore.planetList.find((planet) => {
          return planet.id === this.clickedPlanet.id
        })
        if (planets) {
          this.heartColor = true
          this.isFavorite = true
        } else {
          this.heartColor = false
          this.isFavorite = false
        }
      },
      closeModal() {
        this.modalVisible = false
        this.iconOverlay = false
        this.heartColor = false
        this.isFavorite = false
      },

      closedOverlay() {
        this.iconOverlay = false
        this.heartColor = true
      },
      addToFav(planets) {
        console.log('das')
        this.isFavorite = !this.isFavorite
        if (this.favoriteStore.addToFav(planets) === false) {
          this.planetExists = false
          this.addedPlanet = true
          this.planetExist = false
          this.iconOverlay = true
        } else {
          this.planetExist = true
          this.planetExists = true
          this.addedPlanet = false
          this.iconOverlay = true
        }
      }
    }
  }
</script>

<template>
  <div class="main">
    <div class="information">
      <h1>
        Some fun facts about each planet in our solar system (including Pluto)
      </h1>
      <p>Click the planet to read more</p>

      <!--Planets-->
      <div class="planet-card">
        <!--Rendering the pictures from the array in created-->
        <div class="planets">
          <div class="planet-card" v-for="planet in planets" :key="planet.id">
            <img
              :src="planet.src"
              :alt="planet.name"
              :class="planet.class"
              @click="showModal(planet)"
              @mouseover="mouseOver"
              @mouseout="mouseOut"
            />
            <p>{{ planet.name }}</p>
          </div>
        </div>
      </div>

      <p id="source">science.nasa.gov (Source)</p>
      <hr />
      <h2>Picture of the day and some facts</h2>
      <NasaInfo />
    </div>

    <!--modal code-->
    <div class="modal" v-show="modalVisible">
      <div class="modal-inner">
        <header class="modal-header">
          <!--Add planet to favorites icon-->
          <div class="icon-container">
            <i
              class="fa-solid fa-heart"
              :class="{
                pink: heartColor
              }"
              @click="addToFav(clickedPlanet), (heartColor = !heartColor)"
              :style="{ pointerEvents: heartColor ? 'none' : 'auto' }"
            />
            <p class="heart-text">{{ favoriteText }}</p>
          </div>

          <!--show icon overlay-->
          <div v-if="iconOverlay" class="icon-overlay">
            <i
              class="fa-solid fa-x close-icon-overlay"
              @click="closedOverlay"
            />
            <p class="overlay-text" v-if="addedPlanet">
              Planet added to favorites
            </p>
            <p class="overlay-text" v-else>
              Planet already exists in favorites
            </p>
          </div>
          <h1>{{ modalHeader }}</h1>
        </header>

        <section class="modal-body">
          {{ modalText }}
        </section>

        <button class="primary-btn" @click="closeModal">Close</button>
      </div>
    </div>

    <!--Background to the modal so that you cannot click on anything else-->
    <div class="overlay" v-show="modalVisible" />
  </div>
</template>

<style scoped>
  /* .icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    position: relative;
  } */

  .hovered {
    scale: 1.1;
  }

  .main {
    padding: 3em;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: rgba(0, 0, 0, 0, 5);
    max-width: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal-inner {
    background: #efefef;
    padding: 2rem;
    color: black;
    border-radius: 25px;
  }

  .modal-header {
    padding-bottom: 1rem;
  }

  .modal-body {
    padding-bottom: 1rem;
  }

  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #57565672;
    opacity: 0.6;
    z-index: 5;
  }

  .planets {
    display: flex;
    flex-wrap: wrap;
  }

  .planet-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 70%;
    cursor: pointer;
  }

  hr {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .icon-overlay {
    position: relative;
    left: 30%;
    top: 20%;
    height: 110px;
    width: 200px;
    background-color: #d1cece72;
    border-radius: 1em;
  }

  .overlay-text {
    text-align: center;
  }
  .close-icon-overlay {
    margin-right: 0.7rem;
    margin-top: 0.3rem;
    color: rgb(105, 104, 104);
    float: right;
    cursor: pointer;
  }

  .fa-heart {
    color: rgb(120, 118, 118);
    position: relative;
    left: 94%;
    top: 10%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .heart-text {
    position: relative;
    left: 84%;
    top: 10%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 11px;
  }

  .fa-heart:hover {
    transform: scale(1.2);
  }

  .pink {
    color:#f429a9;
  }

  .mercury-img {
    width: 7vw;
    height: 5vw;
    cursor: pointer;
  }

  .venus-img {
    width: 10vw;
    height: 7vw;
    cursor: pointer;
  }

  .earth-img {
    width: 16vw;
    height: 11vw;
    cursor: pointer;
  }

  .mars-img {
    width: 8vw;
    height: 6vw;
    cursor: pointer;
  }

  .jupiter-img {
    width: 40vw;
    height: 25vw;
    cursor: pointer;
  }

  .saturn-img {
    width: 33vw;
    height: 19vw;
    cursor: pointer;
  }

  .uranus-img {
    width: 20vw;
    height: 15vw;
    cursor: pointer;
  }

  .neptune-img {
    width: 24vw;
    height: 16vw;
    cursor: pointer;
  }

  .pluto-img {
    width: 6vw;
    height: 4vw;
    cursor: pointer;
  }

  /* .size-header {
    margin-top: 40px;
  }

  .planet-size {
    margin-left: 60px;
    margin-bottom: 40px;
  } */

  #source {
    font-size: 11px;
  }

  @media screen and (min-width: 375px) and (max-width: 572px) {

    .modal {
    position: fixed;
    top: 40%;
    left: 35%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: rgba(0, 0, 0, 0, 5);
    max-width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

    .heart-text {
    left: 55%;
  }

    .planets p {
      font-size: 12px;
    }

    .mercury-img {
      width: 9vw;
      height: 5vw;
      cursor: pointer;
    }

    .venus-img {
      width: 17vw;
      height: 9vw;
      cursor: pointer;
    }

    .earth-img {
      width: 19vw;
      height: 11vw;
      cursor: pointer;
    }

    .mars-img {
      width: 18vw;
      height: 8vw;
      cursor: pointer;
    }

    .jupiter-img {
      width: 40vw;
      height: 25vw;
      cursor: pointer;
    }

    .saturn-img {
      width: 33vw;
      height: 19vw;
      cursor: pointer;
    }

    .uranus-img {
      width: 20vw;
      height: 12vw;
      cursor: pointer;
    }

    .neptune-img {
      width: 26vw;
      height: 16vw;
      cursor: pointer;
    }

    .pluto-img {
      width: 15vw;
      height: 7vw;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {

    .heart-text {
    left: 70%;
  }
    .mercury-img {
      width: 15vw;
      height: 8vw;
      cursor: pointer;
    }

    .venus-img {
      width: 20vw;
      height: 12vw;
      cursor: pointer;
    }

    .earth-img {
      width: 26vw;
      height: 17vw;
      cursor: pointer;
    }

    .mars-img {
      width: 18vw;
      height: 11vw;
      cursor: pointer;
    }

    .jupiter-img {
      width: 40vw;
      height: 25vw;
      cursor: pointer;
    }

    .saturn-img {
      width: 55vw;
      height: 25vw;
      cursor: pointer;
    }

    .uranus-img {
      width: 30vw;
      height: 20vw;
      cursor: pointer;
    }

    .neptune-img {
      width: 32vw;
      height: 21vw;
      cursor: pointer;
    }

    .pluto-img {
      width: 15vw;
      height: 8vw;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    .mercury-img {
      width: 18vw;
      height: 10vw;
      cursor: pointer;
    }

    .venus-img {
      width: 25vw;
      height: 15vw;
      cursor: pointer;
    }

    .earth-img {
      width: 35vw;
      height: 23vw;
      cursor: pointer;
    }

    .mars-img {
      width: 22vw;
      height: 14vw;
      cursor: pointer;
    }

    .jupiter-img {
      width: 50vw;
      height: 35vw;
      cursor: pointer;
    }

    .saturn-img {
      width: 75vw;
      height: 35vw;
      cursor: pointer;
    }

    .uranus-img {
      width: 35vw;
      height: 22vw;
      cursor: pointer;
    }

    .neptune-img {
      width: 35vw;
      height: 23vw;
      cursor: pointer;
    }

    .pluto-img {
      width: 15vw;
      height: 9vw;
      cursor: pointer;
    }
  }
</style>

<script>
import Nasa from '../components/Nasa.vue';
export default {
  components: {
    'Nasa': Nasa
  },
  created() {
    fetch("/infodb.json")
      .then((response) => response.json())
      .then((data) => {
        this.planets = data;
      });
  },
  data() {
    return {
      planets: null,
      modalVisible: false,
      modalText: "",
      modalHeader: "",
      image: null
    };
  },
  methods: {
    mouseOver(event) {
      event.target.classList.add("hovered");
    },
    mouseOut(event) {
      event.target.classList.remove("hovered");
    },

    showModal(planet) {
      this.modalVisible = true;
      this.modalText = planet.info;
      this.modalHeader = planet.name;
      classList.add("overlay");
    },
    closeModal() {
      this.modalVisible = false;
      classList.remove("overlay");
    },
  },
};
</script>

<template>

  <div class="main">
    <Nasa />
    <hr />
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
            <img :src="planet.src" :alt="planet.name" @click="showModal(planet)" @mouseover="mouseOver"
              @mouseout="mouseOut" />
            <p>{{ planet.name }}</p>
          </div>
        </div>
      </div>
      <p>science.nasa.gov (källa)</p>
    </div>

    <!--modal code-->
    <div class="modal" v-show="modalVisible">
      <div class="modal-inner">
        <header class="modal-header">
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
  /* right: 50%; */
  transform: translate(-50%, -50%);
  /* bottom: 0; */
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

hr{
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>

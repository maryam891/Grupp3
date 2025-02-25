<script>
export default {
  created() {
    fetch('/infodb.json')
    .then(response => response.json())
    .then(data => {
      this.planets = data

      //skapar en array med bilder, där jag hämtar info till respektive planet från infodb.json.
      this.images = [
      {src: '/assets/image/earth-transparent.png', text: this.planets[2].info, name: this.planets[2].name},
      {src: '/assets/image/mercury.png', text: this.planets[0].info, name: this.planets[0].name},
      {src: '/assets/image/jupiter-transparent.png.png', text: this.planets[4].info, name: this.planets[4].name},
      {src: '/assets/image/mars-transparent.png', text: this.planets[3].info, name: this.planets[3].name},
      {src: '/assets/image/neptune-transparent.png', text: this.planets[7].info, name: this.planets[7].name},
      {src: '/assets/image/pluto-transparent.png', text: this.planets[8].info, name: this.planets[8].name},
      {src: '/assets/image/saturnus-transparent.png', text: this.planets[5].info, name: this.planets[5].name},
      {src: '/assets/image/uranus.png', text: this.planets[6].info, name: this.planets[6].name},
      {src: '/assets/image/venus-transparent.png', text: this.planets[1].info, name: this.planets[1].name}
      ]

    })
  },
  data() {
    return {
      planets: null,
      planetInfo: null,
      modalVisible: false,
      modalText: '',
      modalHeader: '',
      images:[]

    };
  },
  methods: {
    mouseOver(event) {
      event.target.classList.add("hovered")
    },
    mouseOut(event) {
      event.target.classList.remove("hovered")
    },

    showModal(image) {
      this.modalVisible = true;
      this.modalText = image.text;
      this.modalHeader = image.name;
      classList.add('overlay')
    },
    closeModal() {
      this.modalVisible = false;
      classList.remove('overlay')
    }
  }
};
</script>

<template>
  <div class="main">
    <div class="information">
      <h1>Some fun facts about each planet in our solar system (including Pluto)</h1>
      <p>Click the planet to read more</p>

      <!--Planeterna-->
      <div class="planet-card">
        <!--Renderar bilderna från arrayen i created-->
        <div class="planets">
          <div class="planet-card" v-for="(image, index) in images" :key="index" >
            <img :src="image.src" :alt="image.name"  @click="showModal(image)" @mouseover="mouseOver" @mouseout="mouseOut">
            <p> {{ image.name }}</p>
          </div>
        </div>

      </div>
      <p>science.nasa.gov (källa)</p>
    </div>

    <!--modal kod-->
      <div class="modal" v-show="modalVisible">
        <div class="modal-inner">
          <header class="modal-header">
            {{ modalHeader }}
          </header>
          <section class="modal-body">
            {{ modalText }}
          </section>

          <button class="btn-close" @click="closeModal">Close</button>
        </div>
      </div>

      <!--Bakgrund till modalen så att man inte kan klicka på annat-->
      <div class="overlay" v-show="modalVisible"></div>

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
  background-color: rgba(0, 0, 0, 0,5);
  max-width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-inner {
  background: #464545;
  padding: 2rem;
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
}
</style>

<script>
export default {
  created(){
    fetch('/infodb.json')
    .then(response => response.json())
    .then(data =>{
      this.planets = data
      console.log("planets", data)
      console.log(data[0].name)

      //skapar en array med bilder, där jag hämtar info till respektive planet från infodb.json. Går det att göra så?
      this.images= [
      {src: '/assets/image/earth-transparent.png', text: this.planets[2].info, name: this.planets[2].name},
      {src: '/assets/image/mercury.png', text: this.planets[0].info, name: this.planets[0].name}
      ]

    })
  },
  data() {
    return {
      planets: null,
      planetInfo: null,
      imageMars: "/assets/image/mars-transparent.png",
      modalVisible: false,
      modalText: '',
      modalHeader: '',
      images:[]

    };
  },
  methods:{
    mouseOver(event){
      event.target.classList.add("hovered")
    },
    mouseOut(event){
      event.target.classList.remove("hovered")
    },

    showModal(image){
      this.modalVisible = true;
      this.modalText = image.text;
      this.modalHeader = image.name;
    },
    closeModal(){
      this.modalVisible = false;
    }
  }
};
</script>

<template>
  <div class="main">
    <div class="information">
      <h1>Some fun facts about each planet in our solar system (including Pluto)</h1>
      <p>Click the planet to read more</p>

      <div class="planet-card"><!--När jag klickar på bilden ska funktionen showModal "starta" som innehåller info från arrayen i data-->
        <!-- <img :src= imageMars alt="" @mouseover="mouseOver" @mouseout="mouseOut" @click="showModal(image)" ref="imageMars">
        <div v-if="planets !== null">
          {{ planets[0].name }}
        </div> -->

        <!--Försöker rendera bilderna från arrayen i created-->
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

  </div>
</template>

<style scoped>
  .hovered{
    scale: 1.1;
  }

  .main{
    padding: 3em;
  }

.modal{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0,2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-inner{
  background: #464545;
  padding: 32px;
}

.planets{
  display: flex;
}
</style>

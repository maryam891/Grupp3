<script>
export default {
  // async created() {
  //      const res = await fetch('http://localhost:5000/quiz')
  //      const data = await res.json()
  //      return data
  //   },
  data() {
    return {
      planets: null,
      imageMars: "/assets/image/mars-transparent.png"
    };
  },
  methods:{
    mouseOver(){
      this.$refs.imageMars.classList.add("hovered")
    },
    mouseOut(){
      this.$refs.imageMars.classList.remove("hovered")
    }
  }
};
</script>

<template>
  <div class="main">
    <h1>Some fun facts about each planet in our solar system (including Pluto)</h1>
    <p>Click the planet to read more</p>
    <img :src= imageMars alt="" @mouseover="mouseOver" @mouseout="mouseOut" ref="imageMars">
    <div class="information">

      <div class="planet-info">
      <h2></h2>
      <p></p>
      </div>

      <p>science.nasa.gov (källa)</p>

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
</style>

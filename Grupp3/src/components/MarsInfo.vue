<script>
  const apiKey = import.meta.env.VITE_NASA_API_KEY
  //fetching info abt Mars
  export default {
    created() {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
        .then((response) => response.json())
        .then((result) => {
          this.result = result
          console.log(result)

          //use slice to limit imgs
        })
    },
    data() {
      return {
        imgs: []
      }
    }
  }
</script>

<template>
<div class="mars-container">
    <h2>Mars Rover Photos</h2>
    <div class="mars-image" v-for="img in imgs" :key="img.id">
        <img :src="img.img_src" alt="image from mars" />
        <p>Date: {{ img.earth_date }}</p>
    </div>
</div>
</template>

<style>
</style>

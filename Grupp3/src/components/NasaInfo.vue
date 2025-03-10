<script>
  const apiKey = import.meta.env.VITE_NASA_API_KEY
  //fetch nasa image
  export default {
    created() {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((result) => {
          this.result = result
        })
    },
    data() {
      return {
        result: []
      }
    }
  }
</script>

<template>
  <div>
    <!--render image and text-->
    <img :src="result.url" />
    <h2>{{ result.title }}</h2>
    <p>{{ result.explanation }}</p>
  </div>
</template>

<style scoped>
  img {
    height: 47vh;
    border-radius: 1rem;
  }

  p {
    height: 100%;
    width: 80%;
  }
</style>

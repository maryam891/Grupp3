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
    height: 100%;
    border-radius: 1rem;
    margin-top: 1em;
  }

  p {
    height: 100%;
    width: 80%;
  }

  h2 {
    margin: 0.2em;
  }
  @media screen and (min-width: 375px) and (max-width: 572px) {
    img {
      width: 80%;
      height: 90%;
    }
    p {
      height: 100%;
      width: 90%;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {
    img {
      width: 65%;
    }
    p {
      height: 100%;
      width: 90%;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    img {
      width: 50%;
      height: 100%;
    }
    p {
      height: 100%;
      width: 90%;
    }
  }

  @media screen and (min-width: 980.1px) {
    p {
      width: 90%;
    }
    img {
      width: 50%;
    }
  }
</style>

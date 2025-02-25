<script>
const apiKey = import.meta.env.VITE_NASA_API_KEY;
//fetch planets
export default {
  created() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.result = result;
      });
  },
  data() {
    return {
      result: [],
    };
  },
};
</script>

<template>
  <div>
    <!--render planets-->
    <img :src="result.url" />
    <p>{{ result.title }}</p>
  </div>
</template>

<style scoped>
img {
  height: 40vh;
}
</style>

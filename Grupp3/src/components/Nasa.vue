<template>
  <div>
    <img :src="result.url" />
    <p>{{ result.title }}</p>
  </div>
</template>
<script>
const apiKey = import.meta.env.VITE_NASA_API_KEY;
// console.log("API Key:", apiKey);
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
<style scoped>
img {
  height: 400px;
  width: 400px;
}
</style>

<script>
export default {
  created() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((cities) => {
        this.cities = cities;
      });
  },
  data() {
    return {
      cities: null,
    };
  },
};
</script>

<template>
<p>Test your space skills with this quiz!</p>
  <div class="startQuizContainer">
    <h1>
      Quiz
    </h1>
    <button>
      Start Quiz
    </button>
  </div>
</template>

<style>
.startQuizContainer {
  height: 300px;
  width: 400px;
  background-color: rgb(244, 237, 227);
  position: relative;
  left: 35%;
  bottom: -80%;
}
</style>

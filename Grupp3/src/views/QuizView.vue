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

<style scoped>
.startQuizContainer {
  height: 247.98px;
  width: 450px;
  background-color: FDFDFD;
  position: relative;
  left: 27%;
  bottom: -80%;
  border-radius: 43.02px;
  text-align: center;

}
p {
  font-weight: bold;
  position: relative;
  bottom: -80%;
  left: 29%;
  margin-bottom: 10px;

}
</style>

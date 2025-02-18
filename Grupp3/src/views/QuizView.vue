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

h1 {
  color: #6C6C6C;
  font-size: 2.25rem;
}
.startQuizContainer {
  height: 247.98px;
  width: 450px;
  background-color: #FDFDFD;
  position: absolute;
  left: 20%;
  top: 30%;
  border-radius: 43.02px;
  text-align: center;

}
p {
  font-weight: bold;
  position: absolute;
  font-size: 1.125rem;
  top: 20%;
  left: 20%;
  margin-bottom: 10px;

}
</style>

<script>
  export default {
    data() {
      return {
        earthImg:"/assets/image/earth-transparent.png",
        star: "/assets/image/starImg.png"
      }
    }
  };
</script>

<template>
  <main>
    <div class="startpage-intro-container">
      <h1>Learn about the planets</h1>
      <p>One quiz at a time</p>
      <div class="startpage-btn-part">
        <router-link to="/quiz">
          <button class="btn-quiz">Go to quiz</button>
        </router-link>
        <router-link to="/facts">
          <button class="btn-more">Read more</button>
        </router-link>
      </div>
      <div class="startpage-background-planet">
        <img :src="earthImg" class="earth-img">
      </div>
    </div>
    <div class="startpage-sellingpoints-container">
      <img :src="star" alt="Fact 1" class="star">
      <p>Gamified learning</p>
      <img :src="star" alt="Fact 2" class="star">
      <p>Bite-sized, anytime learning</p>
      <img :src="star" alt="Fact 3" class="star">
      <p>Daily challenges</p>
    </div>
  </main>
</template>

<style scoped>
.startpage-intro-container {
  margin-top: 7vh;
  margin-left: 2vw;
  padding: 3em;
}

.startpage-background-planet {
  position: absolute;
  top: 6vh;
  left: 60vw;
}

.earth-img {
  height: 70vh;
}

.star {
  height: 5vh;
}

p {
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.startpage-btn-part {
  margin-top: 4vh;
}

.btn-quiz {
  background-color: #e3cafb;
  border: none;
  width: 140px;
  height: 43.21px;
  border-radius: 36.06px;
  color: #40027d;
  font-weight: 550;
  cursor: pointer;
}

.btn-quiz:hover {
  background-color: #27006f;
  color: #e3cafb;
  border: solid 2px #e3cafb;
}


.btn-more {
  background-color: #27006f00;
  border: solid 2px #e3cafb;
  width: 140px;
  height: 43.21px;
  border-radius: 36.06px;
  color: #e3cafb;
  font-weight: 550;
  cursor: pointer;
  margin-left: 4vw;
}

.btn-more:hover {
  background-color: #e3cafb;
  color: #27006f;
}

.startpage-sellingpoints-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 6em;
  margin-bottom: 3em;
}
</style>

<script>
  export default {
    data() {
      return {
        earthImg:"/assets/image/earth-transparent.png",
        starImg: "/assets/image/starImg.png"
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
          <button class="btn-more">Go to planets</button>
        </router-link>
      </div>
      <div class="startpage-background-planet">
        <img :src="earthImg" class="earth-img">
      </div>
    </div>
    <div id="textContainer">
      <div>
        <img :src="starImg" class="star-img">
        <p>Gamified learning</p>
      </div>
      <div>
        <img :src="starImg" class="star-img">
        <p>Daily challenges</p>
      </div>
      <div>
        <img :src="starImg" class="star-img">
        <p>Bite-sized, anytime learning</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}

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

#textContainer {
  display: flex;
  width: 800px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px;
  position: absolute;
  top: 73%;
  left: 22%;
}

.factText {
  width: 90px;
  position: relative;
  left: 10%;
  height: 30px;
  background-color:#E3CAFB;
  color: black;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 15px;
}

.starImg {
  position: absolute;
  margin-bottom: 10px;
}
</style>

<script>
 export default {
    data() {
      return {
        earthImg: '/assets/image/earth-transparent.png',
        starImg: '/assets/image/star.svg'
      }
    }
  }
</script>

<template>
  <main>
    <div class="startpage-intro-container">
      <h1>Learn about the planets</h1>
      <p>One quiz at a time</p>
      <div class="startpage-btn-part">
        <router-link to="/quiz">
          <button class="primary-btn">Go to quiz</button>
        </router-link>
        <router-link to="/facts">
          <button class="secondary-btn">Go to planets</button>
        </router-link>
      </div>
      <div class="startpage-background-planet">
        <img :src="earthImg" class="earth-img" />
      </div>
    </div>
    <div class="textContainer">
      <div class="highlights">
        <img :src="starImg" class="star-img" />
        <p>Gamified learning</p>
      </div>
      <div class="highlights">
        <img :src="starImg" class="star-img" />
        <p>Daily challenges</p>
      </div>
      <div class="highlights">
        <img :src="starImg" class="star-img" />
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

.highlights{
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
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

  .secondary-btn {
    margin-left: 4vw;
  }

.textContainer {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  /* flex-direction: row; */
  justify-content: space-around;
  position: relative;
  margin-top: 10%;
  left: 25%;
}

.star-img {
  width: 4vw;
  margin-left: 35%;
  /* position: relative;*/
}

@media screen and (min-width: 375px) and (max-width: 768px){
  main {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
  }

  .startpage-btn-part {
    display: flex;
  }

  .secondary-btn {
    margin-left: 2em;
  }

  .textContainer {
    flex-direction: column;
    align-items: center;
    justify-content: left;
    left: 0;
    width: 80%;
    padding-top: 4em;
  }

  .startpage-intro-container {
    padding: 1em;
  }

  .star-img {
    left: 0;
    width: 3em;
  }

  .earth-img {
    display: none;
  }
}

@media screen and (min-width: 768.1px) and (max-width: 980px){
  .earth-img {
    height: 20em;
    padding-right: 2em;
  }

  .startpage-intro-container {
  margin-top: 0;
}

.textContainer {
  left: 15%;
  padding-top: 4em;
}

.highlights {
  padding-bottom: 2em;
  padding-left: 2em;
}

.star-img {
    left: 0;
    width: 4em;
  }
}

@media screen and (min-width: 980.1px) {
  .textContainer {
    padding-top: 7em;
    width: 80%;
    left: 0;
    padding-left: 15%;
  }
}
</style>

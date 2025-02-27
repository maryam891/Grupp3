<script>
export default {
  data() {
    return {
      earthImg: "/assets/image/earth-transparent.png",
      starImg: "/assets/image/star.svg",
    };
  },

};
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
      <div>
        <img :src="starImg" class="star-img" />
        <p>Gamified learning</p>
      </div>
      <div>
        <img :src="starImg" class="star-img" />
        <p>Daily challenges</p>
      </div>
      <div>
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
  width: 60vw;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  margin-top: 10%;
  left: 25%;
}

.star-img {
  width: 4vw;
  margin-left: 35%;
}

@media screen and (max-width: 375px) {
  .startpage-btn-part {
    display: flex;
    flex-direction: column;
  }

  .secondary-btn {
    margin-left: 0;
  }

  .textContainer {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    left: 50%;
  }

  .star-img {
    margin-left: 30%;
  }
}
</style>

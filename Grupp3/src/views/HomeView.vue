<script>
  export default {
    data() {
      return {
        earthImg: '/assets/image/earth-transparent.png'
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
        <i class="fa-solid fa-chalkboard-user" style="color: #e3cafb" />
        <p>Gamified learning</p>
        <p class="USP-text">
          Who said learning had to be boring? Level up your knowledge.
        </p>
      </div>
      <div class="highlights">
        <i class="fa-solid fa-earth-americas" style="color: #e3cafb" />
        <p>Fun space facts</p>
        <p class="USP-text">
          Impress your friends with trivia only true space lovers know!
        </p>
      </div>
      <div class="highlights">
        <i class="fa-regular fa-clock" style="color: #e3cafb" />
        <p>Bite-sized, anytime learning</p>
        <p class="USP-text">
          Learning on the go? Test your space knowledge anytime, anywhere!
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    min-height: auto;
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

  .highlights {
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
  }

  .earth-img {
    height: 70vh;
  }

  p {
    margin-top: 2vh;
  }

  .USP-text {
    margin-left: 25%;
    font-size: 14px;
    max-width: 50%;
  }

  .startpage-btn-part {
    margin-top: 4vh;
  }

  .secondary-btn {
    margin-left: 4vw;
  }

  .textContainer {
    display: flex;
    text-align: center;
    width: 100vw;
    justify-content: space-around;
    margin-top: 10%;
  }

  .fa-solid,
  .fa-regular {
    font-size: 200%;
  }

  @media screen and (min-width: 375px) and (max-width: 572px) {
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
      width: 100%;
      padding-top: 4em;
    }

    .startpage-intro-container {
      padding: 1em;
    }

    .earth-img {
      display: none;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {
    .earth-img {
      height: 15em;
      padding-right: 5em;
    }

    .startpage-intro-container {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
    .earth-img {
      height: 20em;
      padding-right: 2em;
    }

    .startpage-intro-container {
      margin-top: 0;
    }

    .textContainer {
      /* left: 15%; */
      padding-top: 4em;
    }

    .highlights {
      padding-bottom: 2em;
      padding-left: 2em;
    }
  }

  @media screen and (min-width: 980.1px) {
    .textContainer {
      padding-top: 7em;
      width: 80%;
      left: 0;
      /* padding-left: 15%; */
    }

    .earth-img {
      height: 30em;
      padding-right: 2em;
    }

    .highlights {
      padding-left: 6em;
    }
  }
</style>

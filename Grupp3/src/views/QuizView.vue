<script>
export default {
  methods:{
  },
  data() {
    return {
      earthImg:"/assets/image/earth-transparent.png",
      venusImg: "/assets/image/venus-transparent.png",
      mercuryImg:"/assets/image/mercury.png",
      starImg:"/assets/image/starImg.png"
    };
  },
};
</script>

<template>
<h2 >Test your space skills with this quiz!</h2>
  <div class="startQuizContainer">
    <h1>
      Quiz
    </h1>
    <button id="startQuizBtn">
      Start Quiz
    </button>
    <img :src="mercuryImg" class="mercuryImg"/>
    <img :src="venusImg" class="venusImg"/>
    <img :src="earthImg" class="earthImg"/>
  </div>
  <div id="textContainer">
  <div>
    <p class="factText">Fact 1</p>
    <i class="fa-regular fa-star starIcon"></i>
    <p>Gamified learning</p>
  </div>
  <div>
    <p class="factText">Fact 2</p>
    <i class="fa-regular fa-star starIcon"></i>
    <p>Daily challenges</p>
  </div>
  <div>
    <p class="factText">Fact 3</p>
    <i class="fa-regular fa-star starIcon"></i>
    <p>Bite-sized, anytime learning</p>
  </div>
  </div>
</template>

<style scoped>

h1 {
  color: #6C6C6C;
  position: absolute;
  left: 33%;
  top: 10%;
  font-weight: 500;
}
.startQuizContainer {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
  height: 260px;
  width: 460px;
  background-color: #FDFDFD;
  position: absolute;
  left: 30%;
  top: 25%;
  border-radius: 43.02px;

}
h2 {
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 30%;
  margin-bottom: 10px;

}
#startQuizBtn {
  background-color: #E3CAFB;
  border: none;
  width: 140px;
  height: 43.21px;
  border-radius: 36.06px;
  color:#280070;
  font-weight: 550;
  position: absolute;
  top: 40%;
  left: 28%;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}
.earthImg {
  height: 180px;
  width: 180px;
  position: relative;
  left: 20%;
  top: 50%
}
.venusImg {

  height: 120px;
  width: 120px;
  position: relative;
  top: 40%;
  left: -40%;
}
.mercuryImg {
  height: 130px;
  width: 130px;
  position: relative;
  left: -12%;
  top:-35%
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
  margin-bottom: 12px;
  transform: rotate(-20deg);
}

.starIcon {
  position: relative;
  left: 25%;
  margin-bottom: 12px;
  color:#E3CAFB;
  font-size: 30px;
}


</style>

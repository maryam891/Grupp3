<script>
export default {
  data() {
    return {
      earthImg:"/assets/image/earth-transparent.png"
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
    <img :src="earthImg" class="earthImg">
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
  height: 247.98px;
  width: 455px;
  background-color: #FDFDFD;
  position: absolute;
  left: 23%;
  top: 30%;
  border-radius: 43.02px;

}
p {
  font-weight: bold;
  position: absolute;
  top: 20%;
  left: 24%;
  margin-bottom: 10px;

}
button {
  background-color: #E3CAFB;
  border: none;
  width: 140px;
  height: 43.21px;
  border-radius: 36.06px;
  color:#280070;
  font-weight: 550;
  position: absolute;
  top: 43%;
  left: 28%;
}
.earthImg {
  height: 200px;
  width: 200px;
  position: relative;
  left: 64%;
  top:40%
}
</style>

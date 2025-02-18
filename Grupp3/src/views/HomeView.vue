<template>
  <main>
    <div class="startpage-intro-container">
      <h1>Learn about the planets</h1>
      <p>One quiz at a time</p>
      <div class="startpage-btn-part">
      <input type="button" value="Go to quiz" class="btn-quiz">
      <input type="button" value="Read more" class="btn-more">
      </div>
    </div>
    <div class="startpage-sellingpoints-container">
      <img src="" alt="Fact 1">
      <p>Gamified learning</p>
      <img src="" alt="Fact 2">
      <p>Bite-sized, anytime learning</p>
      <img src="" alt="Fact 3">
      <p>Daily challenges</p>
    </div>
  </main>
</template>

<style>
.startpage-intro-container {
  margin-top: 3em;
  padding: 3em;
}

.btn-quiz, .btn-more {
  margin: 2em 2em 0 0;
  padding: .5em;
  cursor: pointer;
}

.startpage-sellingpoints-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 6em;
}
</style>

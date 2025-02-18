<template>
  <main>
    <div class="startpage-intro-container">
      <h1>Learn about the planets</h1>
      <p>One quiz at a time</p>
      <input type="button" value="Go to quiz">
      <input type="button" value="Read more">
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
body {
  color: white;
}

.startpage-sellingpoints-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 5em;
}
</style>

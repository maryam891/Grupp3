<template>
<h1>Your favorite planets</h1>
</template>
<script>
fetch("/db.json")
.then(response => response.json())
  .then(result => {
    console.log(result)
  })
</script>
<style>
</style>

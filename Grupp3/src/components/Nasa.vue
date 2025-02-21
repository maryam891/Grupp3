<template>
<div>
    <img :src="result.url">
    <p>{{result.title }}</p>
</div>
</template>
<script>
 const API = import.meta.env.key
export default{created() {
         fetch("https://api.nasa.gov/planetary/apod?api_key=yDkt5xF8SJfZsZCisMAWATVi630lKbIL9ZvrPWjl")
         .then(response => response.json())
         .then(result => {
            this.result= result
  })
        },
   data (){
    return {
result:[]
    }
}
}

</script>
<style scoped>
img {
    height: 400px;
    width: 400px;
}


</style>

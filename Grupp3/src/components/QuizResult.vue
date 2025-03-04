<script>
  import { useResultStore } from "../resultStore"

  export default {
    data(){
      const resultStore = useResultStore
      console.log(resultStore)
      return{
        resultStore,
      }
    }
  }
</script>

<template>
  <main>
    <h1>
      Result
    </h1>
    <div class="right-answers" v-for="(result, index) in resultStore.quizResults" :key="index">
      <ul>
        <li>

        </li>
      </ul>
      {{ resultStore.quizResults[0][0].question }}
      {{ result.selectedAnswer }}
    </div>
    <div class="wrong-answers">
      <h2>Wrong answers</h2>
      <p>Question x</p>
      <p>Lorem Ipsum</p>
    </div>
  </main>
</template>

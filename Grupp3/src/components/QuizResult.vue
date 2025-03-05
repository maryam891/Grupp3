<script>
  import { useResultStore } from "../resultStore"

  export default {
    data(){
      return{
        resultStore: useResultStore(),
        selectedRound: null,

      }
    },
    computed: {
      quizResults(){
        return this.resultStore.quizResults
      }
    },
    methods:{
      showResult(index){
          this.selectedRound = this.selectedRound === index? null : index
      }
    },



  }
</script>

<template>
  <main>
    <h1>
      Result
    </h1>

    <div class="results" v-for="(round, index) in quizResults" :key="index">
        <h2 @click="showResult (index)">Round {{ index + 1 }}</h2>
        <i class="fa-solid fa-trophy"></i>

        <i class="fa-solid fa-crown"></i>

        <i class="fa-solid fa-award"></i>

      <ul v-show="selectedRound === index">
        <h1>Right answer</h1>
        <li v-for="(result, qIndex) in round.feedback.filter((q) => q.isCorrect)" :key="qIndex">
          <p> <strong> Question:</strong> {{ result.question }} </p>
          <p><strong> Selected answer:</strong> {{ result.selectedAnswer }} </p>
          <i class="fa-solid fa-check"></i>
        </li>
        <h1>Wrong answer</h1>
        <li v-for="(result, qIndex) in round.feedback.filter((q) => q.isCorrect === false)" :key="qIndex">
          <p><strong> Question:</strong> {{ result.question }} </p>
          <p><strong> Selected answer:</strong> {{ result.selectedAnswer }} </p>
          <i class="fa-solid fa-xmark" style="color: #f20713;"></i>
        </li>
      </ul>

    </div>
    <!-- <div class="wrong-answers" v-for="(round, index) in quizResults" :key="index">
      <h1>Wrong</h1>
      <h2 @click="showResult (index)">Round {{ index + 1 }}</h2>
      <ul>
        <li v-for="(result, qIndex) in round.filter((q) => q.isCorrect === false)" :key="qIndex">
          <p><strong> Question:</strong> {{ result.question }} </p>
          <p><strong> Selected answer:</strong> {{ result.selectedAnswer }} </p>
          <p> {{ result.isCorrect }} </p>
        </li>
      </ul>
    </div> -->
  </main>
</template>

<style>

</style>

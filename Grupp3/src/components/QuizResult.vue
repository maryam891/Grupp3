<script>
  import { useResultStore } from '../stores/resultStore'

  export default {
    data() {
      return {
        resultStore: useResultStore(),
        selectedRound: null
      }
    },
    computed: {
      quizResults() {
        return this.resultStore.quizResults
      }
    },
    methods: {
      showResult(index) {
        this.selectedRound = this.selectedRound === index ? null : index
      }
    }
  }
</script>

<template>
  <main>
    <!-- <h1>Result</h1> -->
    <div v-for="(round, index) in quizResults" :key="index">
      <div class="results">
        <h3 @click="showResult(index)">Round {{ index + 1 }}</h3>
        <div v-if="(round.countCorrect / round.totalQuestions) * 100 >= 80">
          <i class="fa-solid fa-crown"></i>
        </div>
        <div
          v-else-if="(round.countCorrect / round.totalQuestions) * 100 >= 60"
        >
          <i class="fa-solid fa-trophy"></i>
        </div>
        <div v-else><i class="fa-solid fa-award"></i></div>
      </div>
      <div class="round-container" v-if="selectedRound === index">
        <table>
          <caption>
            Right answer
          </caption>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Selected Answers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(result, qIndex) in round.feedback.filter(
                (q) => q.isCorrect
              )"
              :key="qIndex"
            >
              <td>
                {{ result.question }}
              </td>
              <td>
                {{ result.selectedAnswer }}
              </td>
              <td>
                <i class="fa-solid fa-check" style="color: #1fcf07"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>
            Wrong answer
          </caption>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Selected Answers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(result, qIndex) in round.feedback.filter(
                (q) => q.isCorrect === false
              )"
              :key="qIndex"
            >
              <td>
                {{ result.question }}
              </td>
              <td>
                {{ result.selectedAnswer }}
              </td>
              <td>
                <i class="fa-solid fa-xmark" style="color: #f20713"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scope>
  @media (min-width: 980px) {
    .round-container {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
  .round-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 1rem;
    gap: 1.5rem;
  }
  .results {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    padding-right: 1rem;
  }
  caption {
    font-size: 1.25rem;
    font-weight: 600;
  }
  th {
    padding-top: 10px;
  }
  td:first-child::before {
    content: '* ';
    color: #333;
    font-weight: bold;
    margin-right: 5px;
  }
  td {
    padding-top: 10px;
    padding-right: 10px;
    align-content: start;
  }
</style>

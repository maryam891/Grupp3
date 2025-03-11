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
    <div
      class="result-container"
      v-for="(round, index) in quizResults"
      :key="index"
    >
      <div class="results">
        <h3 @click="showResult(index)">Round {{ index + 1 }}</h3>
        <div v-if="(round.countCorrect / round.totalQuestions) * 100 >= 80">
          <i class="fa-solid fa-crown" />
        </div>
        <div
          v-else-if="(round.countCorrect / round.totalQuestions) * 100 >= 60"
        >
          <i class="fa-solid fa-trophy" />
        </div>
        <div v-else><i class="fa-solid fa-award" /></div>
        <div class="percent">
          <div
            :style="{
              width: `${(round.countCorrect / round.totalQuestions) * 100}%`,
              backgroundColor: 'green',
              height: 'auto',
              borderRadius: '15px'
            }"
          />
        </div>
        <div>{{ (round.countCorrect / round.totalQuestions) * 100 }}%</div>
      </div>
      <div class="round-container" v-if="selectedRound === index">
        <table>
          <caption>
            Correct answers
          </caption>
          <thead>
            <tr>
              <th>Questions</th>
              <th class="table-head">Selected Answers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="block"
              v-for="(result, qIndex) in round.feedback.filter(
                (q) => q.isCorrect
              )"
              :key="qIndex"
            >
              <td class="table-cell block">
                {{ result.question }}
              </td>
              <td class="table-cell block">
                {{ result.selectedAnswer }}
                <i class="fa-solid fa-check" style="color: #1fcf07" />
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>
            Wrong answers
          </caption>
          <thead>
            <tr>
              <th>Questions</th>
              <th class="table-head">Selected Answers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="block"
              v-for="(result, qIndex) in round.feedback.filter(
                (q) => q.isCorrect === false
              )"
              :key="qIndex"
            >
              <td class="table-cell block">
                {{ result.question }}
              </td>
              <td class="table-cell block">
                {{ result.selectedAnswer }}
                <i class="fa-solid fa-xmark" style="color: #f20713" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scope>
  .round-container {
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    align-items: flex-start;
    padding: 1rem;
    gap: 1.5rem;
  }
  .results {
    display: flex;
    align-items: center;
    padding: 15px;
  }
  .percent {
    display: flex;
    flex-grow: 1;
    background-color: none;
    border: 1px solid #333;
    border-radius: 15px;
    height: 1.25rem;
    margin: 0 10px;
  }
  h3 {
    padding-right: 1rem;
    cursor: pointer;
  }
  table {
    table-layout: fixed;
    width: 100%;
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
    vertical-align: top;
    text-align: left;
  }
  @media (min-width: 375px) and (max-width: 572px) {
    table {
      width: 100%;
      text-align: left;
    }
    .table-cell {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .block {
      display: block;
    }
    td {
      padding: 0.5rem 0;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .table-head {
      display: none;
    }
  }

  @media (min-width: 980px) {
    .round-container {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
</style>

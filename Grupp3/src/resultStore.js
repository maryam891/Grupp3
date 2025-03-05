import { defineStore } from 'pinia'
export const useResultStore = defineStore('result', {
  state: () => ({
    // Retrieves saved quiz results from localStorage. If no results are found, initializes quizResults as an empty array [].
    quizResults: JSON.parse(localStorage.getItem('quizResults')) || []
  }),
  actions: {
    // Function to save quiz results
    saveResult(dataFeedback) {
      console.log('before save to localStorage:', feedback)
      // Get old result list from localStorage
      const existingResults =
        JSON.parse(localStorage.getItem('quizResults')) || []
      // Add new feedback to the result list
      existingResults.push(dataFeedback)
      // Update the `quizResults` state with the new feedback
      this.quizResults = existingResults
      localStorage.setItem('quizResults', JSON.stringify(this.quizResults))
      console.log('localStorage', this.quizResults)
    }
  }
})

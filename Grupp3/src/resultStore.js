import { defineStore } from 'pinia'
export const useResultStore = defineStore('result', {
  state: () => ({
    // Retrieves saved quiz results from localStorage. If no results are found, initializes quizResults as an empty array [].
    quizResults: JSON.parse(localStorage.getItem('quizResults')) || []
  }),
  actions: {
    // Function to save quiz results
    saveResult(feedback) {
      console.log('before save to localStorage:', feedback)
      // Update the `quizResults` state with the new feedback
      this.quizResults = feedback
      localStorage.setItem('quizResults', JSON.stringify(feedback))
      console.log('localStorage', this.quizResults)
    }
  }
})

<script>
  import { useResultStore } from '../resultStore'
  export default {
    data() {
      return {
        showQuiz: false,
        allQuestions: [],
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswer: null,
        correctAnswersCount: 0,
        quizCompleted: false,
        feedback: [],
        mark: {},
        planets: [],
        showModal: false,
        playTimes: 1,
        isDisabledAnswerArea: false,
        earthImg: '/assets/image/earth-transparent.png',
        venusImg: '/assets/image/venus-transparent.png',
        mercuryImg: '/assets/image/mercury.png'
      }
    },
    methods: {
      // Fetch questions from db.json
      async fetchQuestions() {
        const response = await fetch('/db.json')
        const jsonData = await response.json()
        this.planets = jsonData.planets
        // Save all questions for later use
        this.allQuestions = jsonData.questions.map((q) => ({
          id: q.id,
          text: q.text,
          answers: this.shuffleArray(
            jsonData.answers.filter((a) => a.question_id === q.id)
          )
        }))
      },

      // Shuffle array elements randomly
      shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
      },

      // Start quiz with selected number of questions
      startQuiz(questionCount) {
        this.showQuiz = true
        // Shuffle all questions and pick the required amount
        this.questions = this.shuffleArray([...this.allQuestions]).slice(
          0,
          questionCount
        )
      },
      // Cancel the quiz and reset values
      cancelQuiz() {
        this.showQuiz = false
        this.quizCompleted = false
        this.currentQuestionIndex = 0
        this.correctAnswersCount = 0
        this.feedback = {}
        this.mark = []
        this.showModal = false
      },
      // Check if selected answer is correct
      checkAnswer(answer) {
        this.selectedAnswer = answer.text
        // creates a feedback entry linked to the question ID. Later, this feedback object can be used to show in my page view
        // this.feedback[this.currentQuestionIndex] = {
        //   questionId: answer.question_id,
        //   isCorrect: true
        // }
        this.feedback[this.currentQuestionIndex] = {
          question: this.questions[this.currentQuestionIndex].text,
          selectedAnswer: answer.text,
          isCorrect: answer.is_correct
        }
        console.log(this.feedback)
        if (answer.is_correct) {
          // if the user selects the answer correct
          this.correctAnswersCount++
          // Reset play attempt counter
          this.playTimes = 1
          // Disable answer area
          this.isDisabledAnswerArea = true
          // show correct answers visually .
          this.mark[this.currentQuestionIndex] = true
          // Waits 1 second before next question
          setTimeout(this.nextQuestion, 1000)
        } else {
          // If a user selects the wrong answer, this line ensures that the question is marked as incorrect in the feedback.
          this.feedback[this.currentQuestionIndex].isCorrect = false
          // If the user has made two incorrect attempts,
          if (this.playTimes === 2) {
            this.isDisabledAnswerArea = true
            // the quiz should move to the next question. Waits 2 second before next question
            setTimeout(this.nextQuestion, 4000)
            // Resets playTimes so that the next question starts with a fresh attempt counter.
            this.playTimes = 1
            // Waits 1 second to show correct answer
            setTimeout(() => {
              this.mark[this.currentQuestionIndex] = true
            }, 1000)
          } else {
            // If the user has made first incorrect attempts,
            this.feedback[this.currentQuestionIndex].isCorrect = false // Marks the current question's feedback as incorrect.
            this.mark[this.currentQuestionIndex] = false // show incorrect answers visually
            this.playTimes++ // Increments playTimes, allowing the user to try again
          }
        }
      },

      // Move to next question
      nextQuestion() {
        this.selectedAnswer = null
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++
        } else {
          // If it's the last question, mark the quiz as completed
          this.quizCompleted = true
          console.log('completed quiz')
          // Call quizLog() to save the results to Pinia + localStorage
          this.quizLog()
        }
        this.isDisabledAnswerArea = false
      },

      // save the quiz results
      quizLog() {
        // Retrieve the store instance from Pinia
        const resultStore = useResultStore()
        const dataFeedback = {
          feedback: this.feedback,
          countCorrect : this.correctAnswersCount,
          totalQuestions : this.questions
        }
        console.log (dataFeedback)
        resultStore.saveResult(dataFeedback) // save to Pinia + localStorage
        console.log('localStorage', localStorage.getItem('quizResults'))
      },

      // Reset the quiz to its initial state
      resetQuiz() {
        this.showQuiz = false
        this.quizCompleted = false
        this.currentQuestionIndex = 0
        this.correctAnswersCount = 0
        this.feedback = []
        this.mark = {}
      }
    },
    // Fetches questions when the component is mounted
    async mounted() {
      await this.fetchQuestions()
      // Listen event resetView and restart the quiz view when triggered
      window.addEventListener('resetView', () => {
        this.showQuiz = false
      })
    }
  }
</script>

<template>
  <div class="quiz-container">
    <div class="quiz-content">
      <!-- Show the quiz introduction if the quiz hasn't started or completed -->
      <div v-if="!showQuiz && !quizCompleted" class="quiz-intro">
        <h1>Welcome, Space Explorer! 🚀</h1>
        <p>
          Think you know the universe? <br />
          Test your knowledge about planets, stars, and black holes!
        </p>
        <p>
          <strong>How does it work?</strong><br />
          Answer correctly to move forward! ✅
          <br />
          Get it wrong? No worries—you get **one more shot**! 🔄<br />
          Miss twice? We'll show you the answer. 🔍
        </p>
        <p>
          <strong>Ready?</strong> Select your challenge and start the adventure!
        </p>
        <!-- Buttons to start the quiz with different question counts -->
        <div class="quiz-options">
          <button @click="startQuiz(10)" class="primary-btn quiz-btn">
            10 Questions
          </button>
          <button @click="startQuiz(20)" class="primary-btn quiz-btn">
            20 Questions
          </button>
          <button @click="startQuiz(30)" class="primary-btn quiz-btn">
            30 Questions
          </button>
        </div>
        <!-- <div class="planet-images"> -->
        <img :src="mercuryImg" class="planet mercury-img" />
        <img :src="venusImg" class="planet venus-img" />
        <img :src="earthImg" class="planet earth-img" />
        <!-- </div> -->
      </div>
      <!-- Display the quiz questions when the quiz starts -->
      <div v-if="showQuiz && !quizCompleted" class="quiz-questions">
        <button
          v-show="!showModal"
          @click="showModal = true"
          class="cancel-btn"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h4>({{ currentQuestionIndex + 1 }} / {{ questions.length }})</h4>
        <h2>{{ questions[currentQuestionIndex]?.text }}</h2>
        <!-- optional chaining -->
        <!-- Answer options for the current question -->
        <div class="answers" :class="{ disabled: isDisabledAnswerArea }">
          <button
            v-for="answer in questions[currentQuestionIndex]?.answers"
            :key="answer.text"
            @click="checkAnswer(answer)"
            class="answer-btn secondary-btn"
            :class="{
              correct: mark[currentQuestionIndex] && answer.is_correct,
              incorrect: selectedAnswer === answer.text && !answer.is_correct,
              shake: selectedAnswer === answer.text && !answer.is_correct,
              scale: mark[currentQuestionIndex] && answer.is_correct
            }"
          >
            {{ answer.text }}
          </button>
        </div>
      </div>
      <!-- Display confirmation modal when the user clicks to close the quiz -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <h4>Do you wish to leave this quiz?</h4>
          <div class="modal-buttons">
            <button class="modal-btn secondary-btn" @click="cancelQuiz">
              Yes, Quit
            </button>
            <button class="modal-btn secondary-btn" @click="showModal = false">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <!-- Display results when the quiz is completed -->
      <div v-if="quizCompleted">
        <img
          src="/assets/image/party-popper.png"
          alt="congratulation"
          class="congrats-img"
        />
        <h2>Quiz Completed!</h2>
        <p>
          You answered {{ correctAnswersCount }} out of
          {{ questions.length }} correctly.
        </p>
        <!--click to restart quiz-->
        <button class="primary-btn" @click="resetQuiz">Restart Quiz</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .answers.disabled {
    pointer-events: none;
    /* background: #40027d; */
  }

  .quiz-container {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .quiz-content {
    position: relative; /* .cancel-btn can be positioned inside */
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
    height: 70%;
    width: 60%;
    background-color: #ffffff;
    border-radius: 43.02px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .quiz-intro {
    width: 90%;
  }

  .quiz-questions {
    width: 80%;
  }

  .answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 10px 0;
  }

  h1 {
    color: #40027d;
    font-weight: 500;
    text-align: center;
  }

  h2 {
    font-weight: bold;
    color: #40027d;
  }

  h4 {
    color: #40027d;
    text-align: right;
  }
  p {
    color: #000000;
    text-align: center;
    padding: 10px 0;
  }
  /* ---> Modal section <--- */
  .modal-overlay {
    position: fixed;
    top: 30%;
    width: 20rem;
    height: 20rem;
    background: #ffffff;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 43.02px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .modal {
    text-align: center;
  }
  .modal-buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* ---> Button <--- */
  .quiz-btn {
    width: 20%;
    margin: 1em;
  }
  .answer-btn {
    background-color: #ffffff;
    border: 2px solid #40027d;
    width: 300px;
    color: #40027d;
    transition: 0.3s;
  }
  .modal-btn {
    color: #40027d;
    border: 2px solid #40027d;
  }
  .cancel-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #40027d;
  }
  .cancel-btn:hover {
    color: red;
  }

  /* ---> Images <--- */
  .planet {
    position: absolute;
    width: 200px;
    z-index: 2;
    width: 200px;
  }

  .earth-img {
    top: -60px;
    left: -130px;
  }

  .venus-img {
    bottom: -30px;
    right: -100px;
  }

  .mercury-img {
    bottom: -60px;
    left: -130px;
  }

  .congrats-img {
    width: 120px;
    padding-bottom: 20px;
  }

  .correct {
    background-color: green;
    color: white;
    transform: scale(1.08);
  }

  .incorrect {
    background-color: red;
    color: white;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    .quiz-content {
      width: 85%;
      height: auto;
      padding: 15px;
    }
    .quiz-btn {
      width: 50%;
    }
    .answer-btn {
      width: 15em;
    }
    /* .earth-img {
      top: -450px;
      left: -150px;
    }

    .venus-img {
      top: -50px;
      right: -150px;
    }

    .mercury-img {
      top: -60px;
      left: -150px;
    } */
  }

  @media (min-width: 768.1px) and (max-width: 980px) {
    .quiz-content {
      width: 90%;
      padding: 15px;
    }
    .quiz-content {
      width: 70%;
      padding: 15px;
    }

    .quiz-btn {
      width: 8em;
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .shake {
    animation: shake 0.3s ease-in-out;
  }
  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .scale {
    animation: scaleUp 0.3s ease-in-out;
  }
</style>

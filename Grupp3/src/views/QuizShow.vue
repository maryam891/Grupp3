<script>
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
      feedback: {},
      planets: [],
      earthImg: "/assets/image/earth-transparent.png",
      venusImg: "/assets/image/venus-transparent.png",
      mercuryImg: "/assets/image/mercury.png",
    };
  },
  methods: {
    // Fetch questions from db.json
    async fetchQuestions() {
      const response = await fetch("/db.json");
      const jsonData = await response.json();
      this.planets = jsonData.planets;
      // Save all questions for later use
      this.allQuestions = jsonData.questions.map((q) => ({
        id: q.id,
        text: q.text,
        answers: this.shuffleArray(
          jsonData.answers.filter((a) => a.question_id === q.id)
        ),
      }));
    },

    // Shuffle array elements randomly
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    // Start quiz with selected number of questions
    startQuiz(questionCount) {
      this.showQuiz = true;
      // Shuffle all questions and pick the required amount
      this.questions = this.shuffleArray([...this.allQuestions]).slice(
        0,
        questionCount
      );
    },

    // Check if selected answer is correct
    checkAnswer(answer) {
      this.selectedAnswer = answer.text;
      if (answer.is_correct) {
        this.feedback[this.currentQuestionIndex] = "correct";
        this.correctAnswersCount++;
      } else {
        this.feedback[this.currentQuestionIndex] = "incorrect";
      }
      setTimeout(this.nextQuestion, 1000); // Waits 1 second before next question
    },

    // Move to next question
    nextQuestion() {
      this.selectedAnswer = null;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizCompleted = true;
      }
    },
  },
  // Fetches questions when the component is mounted
  async mounted() {
    await this.fetchQuestions();
  },
};
</script>

<template>
  <div class="quiz-container">
    <div class="quiz-content">
      <div v-if="!showQuiz && !quizCompleted" class="quiz-intro">
        <h1>Welcome, Space Explorer! 🚀</h1>
        <p>
          Think you know the universe? 🌍 <br />
          Test your knowledge about planets, stars, and black holes! <br />
          Just answer correctly and prove you're a true space explorer!
        </p>
        <p>
          <strong>Ready?</strong> Select your challenge and start the adventure!
        </p>
        <!-- <button @click="startQuiz" class="primary-btn">Start Quiz</button> -->
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
        <div class="planet-images">
          <img :src="mercuryImg" class="planet mercury-img" />
          <img :src="venusImg" class="planet venus-img" />
          <img :src="earthImg" class="planet earth-img" />
        </div>
      </div>
      <div v-if="showQuiz && !quizCompleted" class="quiz-questions">
        <h4>({{ currentQuestionIndex + 1 }} / {{ questions.length }})</h4>
        <h2>{{ questions[currentQuestionIndex]?.text }}</h2>
        <!-- optional chaining -->
        <div class="answers">
          <button
            v-for="answer in questions[currentQuestionIndex]?.answers"
            :key="answer.text"
            @click="checkAnswer(answer)"
            class="answer-btn secondary-btn"
            :class="{
              correct:
                feedback[currentQuestionIndex] === 'correct' &&
                answer.is_correct,
              incorrect: selectedAnswer === answer.text && !answer.is_correct,
            }"
          >
            {{ answer.text }}
          </button>
        </div>
      </div>
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
        <button
          class="primary-btn"
          @click="
            showQuiz = false;
            quizCompleted = false;
            currentQuestionIndex = 0;
            correctAnswersCount = 0;
            feedback = {};
          "
        >
          Restart Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quiz-content {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.518);
  height: 450px;
  width: 700px;
  background-color: #ffffff;
  border-radius: 43.02px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.quiz-intro {
  width: 80%;
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

/* ---> Button <--- */
.quiz-btn {
  width: 10em;
  margin: 1em;
}
.answer-btn {
  background-color: #ffffff;
  border: 2px solid #40027d;
  width: 300px;
  color: #40027d;
}

/* ---> Images <--- */
.planet-images {
  position: relative;
  width: 100%;
  height: 100%;
}

.planet {
  position: absolute;
  width: 200px;
  z-index: 2;
  width: 200px;
}

.earth-img {
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
}

.congrats-img {
  width: 120px;
  padding-bottom: 20px;
}

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>

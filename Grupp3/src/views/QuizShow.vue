<script>
export default {
  data() {
    return {
      showQuiz: false,
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
      starImg: "/assets/image/starImg.png",
    };
  },
  methods: {
    // Hämta frågor från filer db.json
    async fetchQuestions() {
      const response = await fetch("/db.json");
      console.log(response);
      const jsonData = await response.json();
      console.log(jsonData);

      // Sparar planetlistan
      this.planets = jsonData.planets;
      // Hämtar alla frågor från alla planeter
      this.questions = jsonData.questions.map((q) => ({
        id: q.id,
        text: q.text,
        answers: this.shuffleArray(
          jsonData.answers.filter((a) => a.question_id === q.id)
        ),
      }));
    },

    // Blandar svarsalternativen slumpmässigt
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    // Startar quizet
    startQuiz() {
      this.showQuiz = true;
      this.fetchQuestions(); // Laddar frågor vid start
    },

    // Kontrollerar om användarens svar är rätt eller fel
    checkAnswer(answer) {
      this.selectedAnswer = answer.text;
      if (answer.is_correct) {
        this.feedback[this.currentQuestionIndex] = "correct";
        this.correctAnswersCount++;
      } else {
        this.feedback[this.currentQuestionIndex] = "incorrect";
      }
      setTimeout(this.nextQuestion, 1000); // Väntar 1 sekund innan nästa fråga
    },

    // Växlar till nästa fråga
    nextQuestion() {
      this.selectedAnswer = null;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizCompleted = true;
      }
    },
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
        <p><strong>Ready?</strong> Click Start Quiz to begin!</p>
        <button @click="startQuiz" class="primary-btn">Start Quiz</button>
        <div class="planet-images">
          <img :src="mercuryImg" class="planet mercury-img" />
          <img :src="venusImg" class="planet venus-img" />
          <img :src="earthImg" class="planet earth-img" />
        </div>
      </div>
      <div v-if="showQuiz && !quizCompleted" class="quiz-questions">
        <h2>{{ questions[currentQuestionIndex]?.text }}</h2>
        <!-- optional chaining -->
        <div class="answers">
          <button
            v-for="answer in questions[currentQuestionIndex]?.answers"
            :key="answer.text"
            @click="checkAnswer(answer)"
            class="answer-btn"
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
          class="result-btn"
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
  color: #020632;
}

p {
  color: #000000;
  text-align: center;
  padding: 10px 0;
}

/* ---> Button <--- */

.answer-btn {
  background-color: #ffffff;
  border: 2px solid #40027d;
  width: 300px;
  color: #40027d;
}

.result-btn {
  background-color: #40027d;
  border: none;
  width: 150px;
  color: #ffffff;
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
  right: -120px;
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

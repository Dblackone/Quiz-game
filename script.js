const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = 0
const quizPassed =document.getElementById('passed')
const quizPassedBarely =document.getElementById('barely-passed')
const quizFailed =document.getElementById('failed')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    /*else (answer.wrong) {
      button.dataset.wrong = answer.wrong;
    }*/
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function checkAnswers() {

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    questionContainerElement.classList.add('hide')

  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The life of a sumaria is ruled by',
    answers: [
      { text: 'Bushido', correct: true },
      { text: 'Katana', correct: false },
      { text: 'Dayomu', correct: false }
    ]
  },
  {
    question: 'The bushidō code is typified by how many virtues',
    answers: [
      { text: 'Six', correct: false },
      { text: 'Seven', correct: false },
      { text: 'Eight', correct: true }
    ]
  },
  {
    question: 'Hagakure Kikigaki (葉隠聞書), the practical and spiritual guide for a warrior was drawn from a collection of commentaries by',
    answers: [
      { text: 'Nabeshima Mitsushige', correct: false },
      { text: 'Yamamoto Tsunetomo', correct: true },
      { text: 'Tashiro Tsuramoto', correct: false }
    ]
  },
  {
    question: 'A Katana is never worn without its companion sword called',
    answers: [
      { text: 'Tanto', correct: false },
      { text: 'Daisho', correct: false },
      { text: 'Wakizashi', correct: true }
    ]
  }, 
  {
  question: 'Mounted Samuria wear a heavy armor called',
    answers: [
      { text: 'Do-Maru', correct: false },
      { text: 'kabuto', correct: false },
      { text: 'Yoroi', correct: true }
    ]
  }
]


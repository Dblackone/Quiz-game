const question = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const options = Array.from(document.getElementsByClassName("option"));
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let quizOption1 = document.getElementById("option-1");
let quizOption2 = document.getElementById("option-2");
let quizOption3 = document.getElementById("option-3");
let quizOption4 = document.getElementById("option-4");

let questions = [
    {
      question:
        "The life of a sumaria is ruled by?",
      option1: "Katana",
      option2: "Yoroi",
      option3: "Bushido",
      option4: "Dayomu",
      answer: 3,
    },
    {
      question: "A Katana is never worn without its companion sword called",
      option1: "diasho",
      option2: "katana",
      option3: "Tanto",
      option4: "Wakizashi",
      answer: 4,
    },
    {
      question:
        "The bushidō code is typified by how many virtues?",
      option1: "Seven",
      option2: "Eight",
      option3: "Nine",
      option4: "Ten",
      answer: 2,
    },
    {
      question:
        "Hagakure Kikigaki (葉隠聞書), the practical and spiritual guide for a warrior was drawn from a collection of commentaries by",
      option1: "Yamamoto Tsunetomo",
      option2: "Nabeshima Mitsushige",
      option3: "Wakizashi Tanou",
      option4: "Tashiro Tsuramoto",
      answer: 1,
    },
    {
      question:
        "Mounted Samuria wear a heavy armor called?",
      option1: "katana",
      option2: "Yoroi",
      option3: "diasho",
      option4: "Wakizashi",
      answer: 2,
    },
];
const Correct_Point = 2;
const Max_Questions = 5;

startQuiz = () => {
  questionCounter = 0;
  sscore = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= Max_Questions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  questionCounter++;
  questionCounterText.innerText = `${questionCounter} of ${Max_Questions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  options.forEach((option) => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "wrong";

    if (classToApply === "correct") {
      increaseScore(Correct_Point);
      selectedOption.classList.add(classToApply);
    } else {
      selectedOption.classList.add(classToApply);

      if (currentQuestion.answer === 1) {
        quizOption1.classList.add("correct");
      } else if (currentQuestion.answer === 2) {
        quizOption2.classList.add("correct");
      } else if (currentQuestion.answer === 3) {
        quizOption3.classList.add("correct");
      } else if (currentQuestion.answer === 4) {
        quizOption4.classList.add("correct");
      }
    }

    selectedOption.classList.remove(classToApply);
    clearStatusClass(document.body);
  });
});

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

nextButton.addEventListener("click", (event) => {
  getNewQuestion();
});

increaseScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startQuiz();
  
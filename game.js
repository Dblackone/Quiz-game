const question = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const options = Array.from(document.getElementsByClassName("options-text"));
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
  
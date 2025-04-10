const quizData = [
  { question: "Which is best for Artificial intelligence ?", a: "Java", b: "C", c: "Php", d: "Python", correct: "d" },
  { question: "Which is a backend language ?", a: "React", b: "PHP", c: "CSS", d: "All", correct: "b" },
  { question: "Hyper Text Markup Language Stands For ?", a: "HTML", b: "Sass", c: "CSS", d: "XML", correct: "a" },
  { question: "Which is a JavaScript Framework ?", a: "Laravel", b: "React", c: "Django", d: "PHP", correct: "b" },
  { question: "Cascading Style sheet stands for", a: "HTML", b: "CSS", c: "Django", d: "XML", correct: "b" },
];

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const a_answer = document.querySelector('#a_answer');
const b_answer = document.querySelector('#b_answer');
const c_answer = document.querySelector('#c_answer');
const d_answer = document.querySelector('#d_answer');
const submitBtn = document.querySelector('#submit');
const darkModeToggle = document.getElementById("darkModeToggle");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_answer.innerText = currentQuizData.a;
  b_answer.innerText = currentQuizData.b;
  c_answer.innerText = currentQuizData.c;
  d_answer.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <div class="container pb-5 has-text-centered">
                  <h1>You answered ${score}/${quizData.length} questions correctly</h1>
                  <br>
                  <button class="button is-info" onclick="location.reload()">Reset</button>
              </div>
          `;
      }
  }
});
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
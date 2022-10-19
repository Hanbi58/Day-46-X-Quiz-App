const quizPanel = document.querySelector(".quiz");
const resultPanel = document.querySelector(".result");

const qus = [
  [
    "What's the result of 1+1?",
    2,
    11,
    1.999999999,
    "It depends on whom you ask.",
    "It depends on whom you ask.",
  ],
  [
    "Which mountain is 2ND heighest in the world?",
    "Everest",
    "Lotzh",
    "K2",
    "Himalaya",
    "K2",
  ],
  [
    "Why Tiktok is so popular?",
    "Because it is funny.",
    "Because people are stupid",
    "Tiktok invest a lot in tech.",
    "Becuase Tiktok killed Meta.",
    "Because people are stupid",
  ],
  ["Who won 2006 world cup?", "China", "Italy", "USA", "Germany", "Italy"],
];
const startBtn = document.getElementById("start");
const rightAmount = document.querySelector(".rightAmount");
let pointer = 0;
let correct = 0;

startBtn.addEventListener("click", () => {
  updateQuiz(pointer);
});

function updateQuiz(i) {
  const quizContainer = document.querySelector(".quiz");
  if (pointer > 3) {
    quizContainer.innerHTML = "";
    quizContainer.classList.add("hid");
    resultPanel.classList.remove("hid");
    rightAmount.innerText = correct;
    const restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", () => {
      pointer = 0;
      correct = 0;
      quizContainer.classList.remove("hid");
      resultPanel.classList.add("hid");
      updateQuiz(pointer);
    });
    return;
  }
  quizContainer.innerHTML = `  <h2 class="question">${qus[i][0]}</h2>
  <div class="ipt">
    <div>
      <input type="radio" id=">${qus[i][1]}" name="answer" value="${qus[i][1]}" />
      <label for="${qus[i][1]}">${qus[i][1]}</label>
    </div>

    <div>
      <input type="radio" id="${qus[i][2]}" name="answer" value="${qus[i][2]}" />
      <label for="${qus[i][2]}">${qus[i][2]}</label>
    </div>

    <div>
      <input type="radio" id="${qus[i][3]}" name="answer" value="${qus[i][3]}" />
      <label for="${qus[i][3]}">${qus[i][3]}</label>
    </div>
    <div>
      <input type="radio" id="${qus[i][4]}" name="answer" value="${qus[i][4]}" />
      <label for="${qus[i][4]}">${qus[i][4]}</label>
    </div>
  </div>
  <button id="submitAnswer" type="button">Submit</button>`;

  const submitAnswerBtn = document.getElementById("submitAnswer");
  submitAnswerBtn.addEventListener("click", () => {
    if (
      document.querySelector('input[name="answer"]:checked') &&
      document.querySelector('input[name="answer"]:checked').value === qus[i][5]
    ) {
      correct++;
    }
    pointer++;
    updateQuiz(pointer);
  });
}

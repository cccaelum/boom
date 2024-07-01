const userInput = document.getElementById('userInput')
const counter = document.getElementById('counter')
const resultDiv = document.getElementById('result')
const restartBtn = document.getElementById('restart')
let countdownInterval;


function startGame() {
    clearInterval(countdownInterval);
    resultDiv.textContent = "";
    counter.textContent = "5";

let randomNumber = Math.floor(Math.random() * 3) + 1;

let countdown = 5;
countdownInterval = setInterval(() => {
  countdown--;
  counter.textContent = countdown;
  if (countdown === 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomNumber);
    }, 5000);
  }).then((randomNumber) => {
    checkResult(randomNumber);
  });

}

function checkResult(randomNumber) {
    const userNumber = parseInt(userInput.value);
    if (userNumber === randomNumber) {
      resultDiv.innerHTML = `<p>Enhorabuena, has salvado al mundo 👑 El número correcto era el ${userNumber}.</p>`;
      resultDiv.classList.add('green');
    } else {
      resultDiv.innerHTML = `<p>La bomba explotó 💣 Elegiste el número ${userNumber}, pero el número correcto era ${randomNumber}.</p>`;
      resultDiv.classList.add('red');
    }
  }

  function restartGame() {
    clearInterval(countdownInterval);
    userInput.value = "";
    resultDiv.textContent = "";
    counter.textContent = "0";
  }

  userInput.addEventListener("change", startGame);
 
  restartBtn.addEventListener("click", restartGame);


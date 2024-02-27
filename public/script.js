// public/script.js
const buttons = document.querySelectorAll('.options button');
const resultDiv = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    displayResult(result);
  });
});

function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(result) {
  resultDiv.textContent = result;
}

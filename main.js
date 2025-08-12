let display = document.getElementById("display");
let scoreDisplay = document.getElementById("scoreDisplay");
let endDisplay = document.getElementById("endDisplay");

let ComputerChoice = "";
let PlayerChoice = "";
let computerScore = 0;
let playerScore = 0;
let roundPlayed = 0;
const maxRound = 5;

function getComputerChoice() {
  ComputerChoice = ["rock", "paper", "scissor"];
  let len = ComputerChoice.length;
  ComputerChoice = ComputerChoice[Math.floor(Math.random() * len)];
}

function choseRock() {
  if (roundPlayed < maxRound) {
    PlayerChoice = "rock";
    playRound();
  }
}

function chosePaper() {
  if (roundPlayed < maxRound) {
    PlayerChoice = "paper";
    playRound();
  }
}

function choseScissor() {
  if (roundPlayed < maxRound) {
    PlayerChoice = "scissor";
    playRound();
  }
}

function playRound() {
  if (roundPlayed < maxRound) {
    getComputerChoice();
    gameLogic();
    roundPlayed++;
    updateScore();
    if (roundPlayed === maxRound) {
      endGame();
    }
  }
}

function gameLogic() {
  let player = PlayerChoice;
  let computer = ComputerChoice;
  if (player == "rock" && computer == "paper") {
    display.textContent = "Computer Wins! Paper beats Rock";
    computerScore++;
  } else if (player == "paper" && computer == "scissor") {
    display.textContent = "Computer Wins! Scissor beats Paper";
    computerScore++;
  } else if (player == "scissor" && computer == "rock") {
    display.textContent = "Computer Wins! Rock beats Scissor";
    computerScore++;
  } else if (player == "paper" && computer == "rock") {
    display.textContent = "Player Wins! Paper beats Rock";
    playerScore++;
  } else if (player == "scissor" && computer == "paper") {
    display.textContent = "Player Wins! Scissor beats Paper";
    playerScore++;
  } else if (player == "rock" && computer == "scissor") {
    display.textContent = "Player Wins! Rock beats Scissor";
    playerScore++;
  } else {
    display.textContent = "It's a TIE";
  }
}

function endGame() {
  endDisplay.textContent = "End of Game. Reload Website";
}

document.getElementById("rockBtn").addEventListener("click", choseRock);
document.getElementById("paperBtn").addEventListener("click", chosePaper);
document.getElementById("scissorBtn").addEventListener("click", choseScissor);

function updateScore() {
  scoreDisplay.textContent = `Computer: ${computerScore} || Player: ${playerScore}`;
}

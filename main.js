let display = document.getElementById("display");
let scoreDisplay = document.getElementById("scoreDisplay");

let ComputerChoice = "";
let PlayerChoice = "";
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  ComputerChoice = ["rock", "paper", "scissor"];
  let len = ComputerChoice.length;
  ComputerChoice = ComputerChoice[Math.floor(Math.random() * len)];
}

function getPlayerChoice() {
  function choseRock() {
    PlayerChoice = "rock";
  }
  choseRock();

  function chosePaper() {
    PlayerChoice = "paper";
  }
  chosePaper();

  function choseScissor() {
    PlayerChoice = "scissor";
  }
  choseScissor();
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

let rockBtn = document
  .getElementById("rockBtn")
  .addEventListener("click", getPlayerChoice);
let paperBtn = document
  .getElementById("paperBtn")
  .addEventListener("click", getPlayerChoice);
let scissorBtn = document
  .getElementById("scissorBtn")
  .addEventListener("click", getPlayerChoice);

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

for (let i = 0; i < 6; i++) {
  getComputerChoice();
  getPlayerChoice();
  gameLogic(playerSelection, computerSelection);
  scoreDisplay.textContent = `Computer: ${computerScore} || Player: ${playerScore}`;
}

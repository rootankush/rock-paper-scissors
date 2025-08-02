let ComputerChoice;
let PlayerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  ComputerChoice = ['rock','paper','scissor'];
  let len = ComputerChoice.length;
  ComputerChoice = ComputerChoice[Math.floor(Math.random() * len)];
}

function getPlayerChoice() {
  PlayerChoice = prompt("Rock or Paper or Scissor");
}

function gameLogic() {
  let player = PlayerChoice.toLowerCase();
  let computer = ComputerChoice.toLowerCase();
    if(player == 'rock' && computer == 'paper'){
      console.log("Computer Chose Paper and Player Chose Rock");
      console.log("Computer Wins! Paper beats Rock");
      computerScore++;
    }
    else if(player == 'paper' && computer == 'scissor'){
      console.log("Computer Chose Scissor and Player Chose Paper");
      console.log("Computer Wins! Scissor beats Paper");
      computerScore++;
    }
    else if(player == 'scissor' && computer == 'rock'){
      console.log("Computer Chose Rock and Player Chose Scissor");
      console.log("Computer Wins! Rock beats Scissor");
      computerScore++;
    }
    else if(player == 'paper' && computer == 'rock'){
      console.log("Player Chose Paper and Computer Chose Rock");
      console.log("Player Wins! Paper beats Rock");
      playerScore++;
    }
    else if(player == 'scissor' && computer == 'paper'){
      console.log("Player Chose Scissor and Computer Chose Paper");
      console.log("Player Wins! Scissor beats Paper");
      playerScore++;
    }
    else if(player == 'rock' && computer == 'scissor'){
      console.log("Player Chose Rock and Computer Chose Scissor");
      console.log("Player Wins! Rock beats Scissor");
      playerScore++;
    }
    else {
      console.log("Its a TIE");
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

for(let i=0;i<5;i++){
  getComputerChoice();
  getPlayerChoice();
  gameLogic(playerSelection, computerSelection);
  console.log("Computer: " + computerScore);
  console.log("Player: " + playerScore);
}



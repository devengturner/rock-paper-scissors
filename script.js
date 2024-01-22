"use strict";

const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
  let randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(computerSelection, playerSelection) {
  const lowerCasePlayerSelection = playerSelection.toLowerCase();

  switch (lowerCasePlayerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return playRound(
          getComputerSelection(),
          prompt("Enter rock, paper, or scissors.")
        );
      } else if (computerSelection === "paper") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        playerScore++;
      } else if (computerSelection === "paper") {
        return playRound(
          getComputerSelection(),
          prompt("Enter rock, paper, or scissors.")
        );
      } else {
        computerScore++;
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        computerScore++;
      } else if (computerSelection === "paper") {
        playerScore++;
      } else {
        return playRound(
          getComputerSelection(),
          prompt("Enter rock, paper, or scissors.")
        );
      }
      break;
  }

  console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
}

// playRound(computerSelection, playerSelection);
function game() {
  const computerSelection = getComputerSelection();
  const playerSelection = prompt("Enter rock, paper, or scissors.");

  playRound(computerSelection, playerSelection);
}

game();

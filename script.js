"use strict";

const computerSelection = getComputerSelection();
const playerSelection = prompt("Enter rock, paper, or scissors.");

function getComputerSelection() {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  const lowerCasePlayerSelection = playerSelection.toLowerCase();

  if (lowerCasePlayerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win, paper beats rock!";
    } else if (computerSelection === "scissors") {
      return "You lose, scissors beats paper!";
    } else {
      return playRound(
        getComputerSelection(),
        prompt("Enter rock, paper, or scissors.")
      );
    }
  }

  if (lowerCasePlayerSelection === "rock") {
    if (computerSelection === "rock") {
      return playRound(
        getComputerSelection(),
        prompt("Enter rock, paper, or scissors.")
      );
    } else if (computerSelection === "scissors") {
      return "You win, rock beats scissors!";
    } else {
      return "You lose, paper beats rock!";
    }
  }

  if (lowerCasePlayerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose, rock beats scissors!";
    } else if (computerSelection === "scissors") {
      return playRound(
        getComputerSelection(),
        prompt("Enter rock, paper, or scissors.")
      );
    } else {
      return "You win, scissors beats paper!";
    }
  }
}

console.log(playRound(computerSelection, playerSelection));

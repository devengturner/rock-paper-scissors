"use strict";

const computerSelection = getComputerSelection();
const playerSelection = prompt("Enter rock, paper, or scissors.");
let computerScore = 0;
let playerScore = 0;

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
      playerScore++;
      return "You win, paper beats rock!";
    } else if (computerSelection === "scissors") {
      computerScore++;
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
      playerScore++;
      return "You win, rock beats scissors!";
    } else {
      computerScore++;
      return "You lose, paper beats rock!";
    }
  }

  if (lowerCasePlayerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose, rock beats scissors!";
    } else if (computerSelection === "scissors") {
      return playRound(
        getComputerSelection(),
        prompt("Enter rock, paper, or scissors.")
      );
    } else {
      playerScore++;
      return "You win, scissors beats paper!";
    }
  }
}

function game() {
  playRound(getComputerSelection(), prompt("Enter rock, paper, or scissors."));

  console.log(`round 1:  player: ${playerScore} computer: ${computerScore}`);

  playRound(getComputerSelection(), prompt("Enter rock, paper, or scissors."));

  console.log(`round 2:  player: ${playerScore} computer: ${computerScore}`);

  playRound(getComputerSelection(), prompt("Enter rock, paper, or scissors."));

  console.log(`round 3:  player: ${playerScore} computer: ${computerScore}`);

  playRound(getComputerSelection(), prompt("Enter rock, paper, or scissors."));

  console.log(`round 4:  player: ${playerScore} computer: ${computerScore}`);

  playRound(getComputerSelection(), prompt("Enter rock, paper, or scissors."));

  console.log(`round 5:  player: ${playerScore} computer: ${computerScore}`);

  if (computerScore > playerScore) {
    console.log("You lose!");
  } else {
    console.log("You win!");
  }
}

game();

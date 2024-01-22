"use strict";

const rockButton = document.querySelector(".btn--rock");
const paperButton = document.querySelector(".btn--paper");
const scissorsButton = document.querySelector(".btn--scissors");
const playerChoiceEl = document.querySelector(".player-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const scoreContainerEl = document.querySelector(".score-container");

const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

const getComputerSelection = function () {
  let randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
};

function playRound(computerSelection, playerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
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
      }
      break;
  }
  playerChoiceEl.textContent = `Player Choice: ${playerSelection}`;
  computerChoiceEl.textContent = `Computer Choice: ${computerSelection}`;

  playerScoreEl.textContent = `Player Score: ${playerScore}`;
  computerScoreEl.textContent = `Computer Score: ${computerScore}`;
  console.log("rock button");

  if (playerScore + computerScore === 5) {
    const result = document.createElement("p");
    if (playerScore > computerScore) {
      result.textContent = "You win!";
      scoreContainerEl.appendChild(result);
    } else {
      result.textContent = "You lose!";
      scoreContainerEl.appendChild(result);
    }
  }
}

rockButton.addEventListener("click", () =>
  playRound(getComputerSelection(), "rock")
);
paperButton.addEventListener("click", () =>
  playRound(getComputerSelection(), "paper")
);
scissorsButton.addEventListener("click", () =>
  playRound(getComputerSelection(), "scissors")
);

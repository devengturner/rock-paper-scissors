"use strict";

function getComputerChoice() {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
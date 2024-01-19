"use strict";

const homePage = document.querySelector(".home_page");
const resultPage = document.querySelector(".result_page");

const score = document.querySelector(".score_num");

const playAgain = document.querySelector(".play_again");

const items = document.querySelectorAll('.item');
const selectScissors = document.querySelector(".scissors");
const selectPaper = document.querySelector(".paper");
const selectRock = document.querySelector(".rock");

const userText = document.querySelector(".user_choise_text");
const opponentText = document.querySelector(".opponent_choise_text");
const gameResult = document.querySelector(".game_result_text");

const userImg = document.querySelector(".user_img");
const opponentImg = document.querySelector(".opponent_img");

let userChoise;
let opponentChoise;
score.value = 0;

const changePage = function () {
  homePage.classList.toggle("hidden");
  resultPage.classList.toggle("hidden");
};

playAgain.addEventListener("click", changePage);

selectScissors.addEventListener("click", function () {
  changePage();
  userChoise = 2;
  userText.textContent = "You chose scissors";
  userImg.src = `img/img-${userChoise}.png`;
  userImg.style.borderColor = "#eca922";
});

selectPaper.addEventListener("click", function () {
  changePage();
  userChoise = 3;
  userText.textContent = "You chose paper";
  userImg.src = `img/img-${userChoise}.png`;
  userImg.style.borderColor = "#5671f5";
});

selectRock.addEventListener("click", function () {
  changePage();
  userChoise = 1;
  userText.textContent = "You chose rock";
  userImg.src = `img/img-${userChoise}.png`;
  userImg.style.borderColor = "#dd405d";
});

items.forEach((item) => {
  item.addEventListener("click", function () {
    opponentChoise = Math.floor(Math.random() * 3 + 1);
    opponentImg.src = `img/img-${opponentChoise}.png`;
    opponentText.textContent = `THE OPPONENT PICKED ${
      opponentChoise === 1
        ? "ROCK"
        : opponentChoise === 2
        ? "SCISSORS"
        : "PAPER"
    }`;
    opponentImg.style.borderColor = `${
      opponentChoise === 1
        ? "#dd405d"
        : opponentChoise === 2
        ? "#eca922"
        : "#5671f5"
    }`;

    if (userChoise === opponentChoise) {
      gameResult.textContent = "Draw";
    } else if (
      (userChoise === 1 && opponentChoise === 2) ||
      (userChoise === 2 && opponentChoise === 3) ||
      (userChoise === 3 && opponentChoise === 1)
    ) {
      gameResult.textContent = "You Win";
      score.value += 10;
      score.textContent = +score.value;
    } else {
      gameResult.textContent = "You Lose";
      score.value -= 5;
      score.textContent = +score.value;
    }
  });
});
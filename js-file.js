/* Declare global variables for keeping score (revisit? look into a way to accomplish this without global variables?) */

var computerScore = 0;
var playerScore = 0;

/* Event Listeners */

const actions = document.querySelectorAll(".action");

actions.forEach((action) => {
  action.addEventListener("click", () => {
    game(action.id);
  });
});

/* Play RPS with computer 5 times */

function game(userInput) {
  const playerSelection = userInput;
  const computerSelection = computerPlay();
  let gameOutcome = playRound(playerSelection, computerSelection);
  let record = scoreCounter(gameOutcome);

  displayRecord();

  /* Randomly select whether computer plays rock, paper or scissors */

  function computerPlay() {
    let randomNum = Math.random();

    switch (true) {
      case randomNum <= 0.33:
        return "rock";
        break;
      case randomNum >= 0.66:
        return "paper";
        break;
      default:
        return "scissors";
    }
  }

  /* Play round of RPS and determine winner */

  function playRound(playerSelection, computerSelection) {
    const outcome = document.querySelector("#outcome");

    if (playerSelection === computerSelection) {
      outcome.textContent = "It's a tie! Play again!";
      console.log("It's a tie! Play again!");
      return "neither";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      outcome.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
      return "player";
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      outcome.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;

      return "computer";
    }
  }

  /* Count score and display record at the end of the game */

  function scoreCounter(gameOutcome) {
    if (gameOutcome === "player") {
      window.playerScore++;
    } else if (gameOutcome === "computer") {
      window.computerScore++;
    }
  }

  function displayRecord() {
    const displayScore = document.querySelector(".score");
    console.log(window.playerScore);
    if (window.playerScore === 5) {
      displayScore.textContent = `YOU WIN! ${window.playerScore} : ${window.computerScore} !`;
      displayScore.style.color = "rgb(27, 163, 156)";
      window.playerScore = 0;
      window.computerScore = 0;
    } else if (window.computerScore === 5) {
      displayScore.textContent = `Computer Wins ${window.computerScore} : ${window.playerScore} !`;
      displayScore.style.color = "rgb(296, 77, 86)";
      window.playerScore = 0;
      window.computerScore = 0;
    } else {
      displayScore.textContent = `${window.playerScore} : ${window.computerScore}`;
      displayScore.style.color = "white";
    }
  }
}

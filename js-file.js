/* Event Listeners */

const actions = document.querySelectorAll(".action");

actions.forEach((action) => {
  action.addEventListener("click", () => {
    game(action.id);
  });
});

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
  if (playerSelection === computerSelection) {
    console.log("It's a tie! Play again!");
    return "neither";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return "player";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return "computer";
  }
}

/* Declare global variables for keeping score (revisit? look into a way to accomplish this without global variables?) */

var computerScore = 0;
var playerScore = 0;

/* Count score and display record at the end of the game */

function scoreCounter(gameOutcome) {
  if (gameOutcome === "player") {
    window.playerScore++;
  } else if (gameOutcome === "computer") {
    window.computerScore++;
  }
}

function displayRecord() {
  const score = document.querySelector(".score");

  score.textContent = `${window.playerScore} : ${window.computerScore}`;

  if (window.computerScore > window.playerScore) {
    return `Computer Wins ${window.computerScore} : ${window.playerScore} !`;
  } else {
    return `Player Wins ${window.playerScore} : ${window.computerScore} !`;
  }
}

/* Play RPS with computer 5 times */

function game(userInput) {
  const playerSelection = userInput;
  const computerSelection = computerPlay();
  let gameOutcome = playRound(playerSelection, computerSelection);
  let record = scoreCounter(gameOutcome);

  console.log(displayRecord());
}

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Show result
  document.getElementById("results").textContent = result;
  document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check winner
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
    document.getElementById("results").textContent = winner;
    playerScore = 0;
    computerScore = 0; // reset scores for replay
  }
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

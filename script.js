function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return `It's a tie! You both chose ${playerChoice}.`;
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt('Round ' + round + ': Enter rock, paper, or scissors');
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }

    console.log(`Score -> Player: ${playerScore}, Computer: ${computerScore}`);
    console.log('-------------------------');
  }

  if (playerScore > computerScore) {
    console.log('🎉 You won the game!');
  } else if (computerScore > playerScore) {
    console.log('😞 Computer won the game!');
  } else {
    console.log("🤝 It's a tie game!");
  }
}

// Start the game
game();

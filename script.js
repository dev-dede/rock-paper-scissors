function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please enter your choice: Rock, Paper, or Scissors"
  ).toLowerCase();
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log(`You lose! Paper beats Rock. You have ${humanScore} marks.`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log(
        `You lose! Scissors beats Paper. You have ${humanScore} marks.`
      );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(
        `You lose! Rock beats Scissors. You have ${humanScore} marks.`
      );
    } else {
      humanScore++;
      console.log(
        `You win! ${humanChoice} beats ${computerChoice}. You have ${humanScore} marks.`
      );
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

// if (humanScore > computerScore) {
//   console.log(`You win! You got ${humanScore} marks`);
// } else {
//   console.log(`You lose! You got ${humanScore} marks`);
// }

playGame();
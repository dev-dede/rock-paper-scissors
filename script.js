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
    if (humanChoice === computerChoice) {
      console.log(`You both choose ${humanChoice}. It's a tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log(
        `You lose! ${computerChoice} beats ${humanChoice}. You have ${humanScore} marks.`
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

  console.log("Final Score:");
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(`You won!`);
  } else if (computerScore > humanScore) {
    console.log(`You lose!`);
  } else {
    console.log("It's a tie!");
  }
}

playGame();

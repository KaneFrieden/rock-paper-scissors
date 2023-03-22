function getComputerChoice() {
  /* create a number between 0 and 2 */
  let random = Math.round(Math.random() * 2);
  let options = ["Rock", "Paper", "Scissors"];
  let computerChoice = options.at(random);
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoiceInput = prompt("Rock, Paper,Scissors?");
  let playerChoice =
    playerChoiceInput.charAt(0).toUpperCase() +
    playerChoiceInput.substring(1, playerChoiceInput.length).toLowerCase();
  return playerChoice;
}

function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) {
    return null;
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    console.log("Paper beats rock");
    return true;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    console.log("Paper beats rock");
    return false;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    console.log("Scissors beat paper");
    return false;
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    console.log("Scissors beat Paper");
    return true;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    console.log("Rock beats Scissors");
    return false;
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    console.log("Rock beats Scissors");
    return true;
  } else {
  }
}

function game() {
  console.log("START OF GAME");
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log("P: " + playerChoice + " | C: " + computerChoice);
    let playerLost = playRound(computerChoice, playerChoice);
    if (playerLost == false) {
      playerScore++;
      console.log("- You won!");
    } else if (playerLost == true) {
      computerScore++;
      console.log("- You lost :(");
    } else {
      console.log("- It's a tie");
    }
  }
  if (playerScore > computerScore) {
    console.log("Victory! You won " + playerScore + " games.");
  } else {
    console.log("You were beat. The computer won " + computerScore + " games.");
  }
  return "END OF GAME";
}

console.log(game());

// ROCK PAPER SCISSOR GAME BY AAQEEB, ALBERT AND COURTNEY
// HACKATHON WEEK 2

// Alert the user what the game is
alert("Welcome to ROCK,PAPER,SCISSORS");
let shouldWeStart = prompt("Should We Start Game? (type yes or no)");
let username = prompt(
  "What is your name? (name should be no more then 10 characters and only contain letters)"
);
// check if username is valid
function checkUsername(name) {
  if (!/^[a-zA-Z]+$/.test(name) || name.length > 10) {
    username = prompt("Name not valid, please try again!");
    checkUsername(username);
  } else {
    return name;
  }
}

checkUsername(username);
let capitilzedUser = username[0].toUpperCase() + username.substring(1);

function startGame() {
  console.log(capitilzedUser);
  let userChoice = prompt("What is your choice? (rock, paper, scissors)");
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let computersChoice = assignCompChoice(randomNumber);

  winner(userChoice, computersChoice);

  if (userScore === 2 || computerScore === 2) {
    alert(
      `Thank You for playing! ${capitilzedUser} scored ${userScore} points, Computer scored ${computerScore} points`
    );
    userScore = 0;
    computerScore = 0;
  }

  let playAgain = prompt("Do you want to play again (yes or no)");
  if (playAgain.toLowerCase() === "yes") {
    startGame();
  } else {
    alert(
      `Thank You for playing! ${capitilzedUser} scored ${userScore} points, Computer scored ${computerScore} points`
    );
  }
}

// Write a variable with let computers choice
// Create a function that compares our choice and the computers choice
function assignCompChoice(randomNumber) {
  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber > 33 && randomNumber <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function compering userChoice Vs computerChoice
let userScore = 0;
let computerScore = 0;

function winner(userPlayer, compPlayer) {
  let userAnswer = userPlayer.toLowerCase();
  if (userAnswer === compPlayer) {
    alert(
      `it is a draw ${capitilzedUser} score ${userScore} & ${computerScore}`
    );
    return;
  } else if (
    (userAnswer === "rock" && compPlayer === "scissors") ||
    (userAnswer === "paper" && compPlayer === "rock") ||
    (userAnswer === "scissors" && compPlayer === "paper")
  ) {
    userScore++;
    alert(`  ${capitilzedUser} wins score ${userScore} & ${computerScore}`);
    return;
  } else {
    computerScore++;
    alert(`  ${capitilzedUser} lost score ${userScore} & ${computerScore}`);
    return;
  }
}
//if (userPlayer === "rock" && compPlayer === "paper") {
//   computerScore++;
//   userScore--;
//   return `userPlayer lost Your score ${userScore} & ${computerScore}`;
// } else if (userPlayer === "paper" && compPlayer === "scissors") {
//   computerScore++;
//   userScore--;
//   return `userPlayer lost Your score ${userScore} & ${computerScore}`;
// } else if (userPlayer === "paper" && compPlayer === "rock") {
//   userScore++;
//   computerScore--;
//   return `userPlayer wins Your score ${userScore} & ${computerScore}`;
// } else if (userPlayer === "scissors" && compPlayer === "paper") {
//   userScore++;
//   computerScore--;
//   return `userPlayer wins Your score ${userScore} & ${computerScore}`;
// } else if (userPlayer === "scissors" && compPlayer === "rock") {
//   computerScore++;
//   userScore--;
//   return `userPlayer lost Your score ${userScore} & ${computerScore}`;
// }

startGame();

//after deciding on the winner alert message + refresh website if you want to play again.

console.log(userChoice);
console.log(computersChoice);

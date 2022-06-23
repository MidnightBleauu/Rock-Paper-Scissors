const rockButton = document.querySelector("#rock"); 
const paperButton = document.querySelector("#paper"); 
const scissorsButton = document.querySelector("#scissors"); 
const playScore = document.querySelector("#playerScore");
const computerScores = document.querySelector("#computerScore");  
const resetBtn = document.querySelector("#resetButton"); 



let playerScore = 0; 
let compScore = 0; 
let results; 

function clickListener(event) {
   const playerSelection = event.target.id; 
   const computerSelection = computerPlay(); 
   playRound(playerSelection, computerSelection); 

 }
 rockButton.addEventListener("click", clickListener);
 paperButton.addEventListener("click", clickListener); 
 scissorsButton.addEventListener("click", clickListener);  




function computerPlay() {
   playItems = new Array ("Rock", "Paper", "Scissors"); 
  playItems = playItems [Math.floor(Math.random() * playItems.length)]; 
  return playItems.toLowerCase(); 
}
/*function playerInput() { 
let userInput = prompt ("Chose your weapon! Rock, Paper or Scissors. "); 
   return userInput; 
} */


function playRound(playerSelection, computerSelection) {
// your code here!
console.log(playerSelection); 
console.log(computerSelection); 

if(playerSelection === computerSelection) {
   results = "Tie!"; 
   console.log(results);
   getWinner();  
}
else if((playerSelection == "rock" && computerSelection == "scissors") || 
       (playerSelection == "scissors" && computerSelection == "paper") || 
       (playerSelection == "paper" && computerSelection == "rock"))
{
   playerScore +=1; 
   console.log(playerScore); 
   playScore.innerHTML = playerScore;
   results = "Player has won the round"; 
   getWinner(); 
}
   else {
   compScore += 1; 
   console.log(compScore); 
   computerScores.innerHTML = compScore; 
   results = "The CPU has won the round"; 
   getWinner(); 
   }
   checkWinner(); 
}


function checkWinner() { 
   if(playerScore == 5 && compScore == 5) {
      (playerScore === compScore )
      results = "Game Over: No one wins"; 
      console.log(results); 
      gameOver(); 
      getWinner(); 
 
   }
   else if (playerScore == 5 && playerScore > compScore) {
     results = "Game Over: Player Wins"; 
      console.log(results); 
      gameOver();
      getWinner(); 


   }
   else if (compScore == 5 && compScore > playerScore) { 
      results = "Game Over: CPU Wins";
      console.log(results); 
      gameOver();
      getWinner(); 
 
 
   } 

}

function gameOver() { 
   rockButton.removeEventListener("click", clickListener); 
   paperButton.removeEventListener("click", clickListener); 
   scissorsButton.removeEventListener("click", clickListener); 
}

function getWinner() { 
   document.getElementById("whoWins").textContent = results; 
}

function resetGame(event) {
  location.reload(); 
}
resetBtn.addEventListener("click", resetGame); 

/*function game() { 
let compPoints = "0"; 
let playerPoints = "0"; 
let roundResults = ""; 
let endResults = ""; 
let computerTurn = ""; 
let playerTurn = ""; 
for(let i = 0; i < 5; i++) {
   computerTurn = computerPlay(); 
   playerTurn = playerInput(); 
console.log(playRound(playerTurn, computerTurn)); 
   if(winRound.includes("CPU Wins")) {
       compPoints++;
   }
   else if (winRound.includes("You win")) { 
       playerPoints++; 
   }
   else if (winRound.includes("Tie")) {
       compPoints++; 
       playerPoints++; 
   }
}
if(playerPoints === compPoints) { 
   endResults = "Both Points are tied ";  
}
else if (playerPoints > compPoints) { 
   endResults = "You've Won the game. "; 
}
else if (playerPoints < compPoints) {
   endResults = "You've lost the AI has won. ";
}
return (endResults + "The Score is: " + playerPoints + " : " + compPoints); 
}
*/
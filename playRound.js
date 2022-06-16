const rockButton = document.querySelector("#rock"); 
const paperButton = document.querySelector("#paper"); 
const scissorsButton = document.querySelector("#scissors"); 
const playScore = document.querySelector("#playerScore");
const computerScores = document.querySelector("#computerScore");  



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
}
else if((playerSelection == "rock" && computerSelection == "scissors") || 
       (playerSelection == "scissors" && computerSelection == "paper") || 
       (playerSelection == "paper" && computerSelection == "rock"))
{
   playerScore +=1; 
   console.log(playerScore); 
   playScore.innerHTML = playerScore; 
}
   else {
   compScore += 1; 
   console.log(compScore); 
   computerScores.innerHTML = compScore; 
   }
   checkWinner(); 
}


function checkWinner() { 
   if(playerScore == 5 && compScore == 5) {
      (playerScore === compScore )
      results = "Its a tie"; 
      console.log(results); 
      rockButton.removeEventListener("click", clickListener); 
      paperButton.removeEventListener("click", clickListener); 
      scissorsButton.removeEventListener("click", clickListener);
   }
   else if (playerScore == 5 && playerScore > compScore) {
      results = "Player Wins"
      console.log(results); 
      rockButton.removeEventListener("click", clickListener); 
      paperButton.removeEventListener("click", clickListener); 
      scissorsButton.removeEventListener("click", clickListener);
   }
   else if (compScore == 5 && compScore > playerScore) { 
      results = "CPU Wins" 
      rockButton.removeEventListener("click", clickListener); 
      paperButton.removeEventListener("click", clickListener); 
      scissorsButton.removeEventListener("click", clickListener); 
   } 
}

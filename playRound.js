const rockButton = document.querySelector(".rockButton"); 
const paperButton = document.querySelector(".paperButton"); 
const scissorsButton = document.querySelector(".scissorsButton");
const resetBtn = document.querySelector("#reset"); 
const playerPoints = document.querySelector("#playerScore"); 
const compPoints = document.querySelector("#compScore");



let playerScore = 0; 
let compScore = 0; 

function computerPlay() {
    playItems = new Array ("Rock", "Paper", "Scissors"); 
   playItems = playItems [Math.floor(Math.random() * playItems.length)]; 
   return playItems.toLowerCase(); 
}


rockButton.addEventListener("click", function() {
   playRound("rock", computerPlay());
});

paperButton.addEventListener("click", function() {
   playRound("paper", computerPlay());
}); 

scissorsButton.addEventListener("click", function() {
   playRound("scissors", computerPlay());
}); 



/*function playerInput() { 
let userInput = prompt ("Chose your weapon! Rock, Paper or Scissors. "); 
   return userInput; 
} */

let winRound; 

function playRound(playerSelection, computerSelection) {
// your code here!
   winRound=''; 

if(playerSelection === computerSelection) {
   winRound = "Tie";
}
   else if (computerSelection == "rock" && playerSelection == "scissors") {
       winRound = "CPU Wins. You lost rock beats scissors. ";
}
   else if (computerSelection == "scissors" && playerSelection == "paper")  {
       winRound = "CPU Wins. You lost scissors beats paper. ";
}
   else if (computerSelection == "paper" && playerSelection == "rock") {
       winRound = "CPU Wins. You lost paper beats rock. ";
}
   else if (playerSelection == "rock" && computerSelection == "scissors") {
       winRound = "You win. Rock has beats scissors. ";
}
   else if (playerSelection == "paper" && computerSelection == "rock") {
       winRound = "You win. Paper beats rock. ";
}
   else if (playerSelection == "scissors" && computerSelection == "paper") {
       winRound = "You win. Scissors beats paper. ";
   }
return winRound;   
}


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


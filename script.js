/* function getComputerChoice 
    Create variable cpuChoice
    Create variable ranNum
    Generate a random number between 1-100, store in ranNum
    If the number is below 33, change cpuChoice to "Rock"
    If the number is between 33 and below 66, change cpuChoice to "Paper"
    If the number is between 66 and 100, change cpuChoice to "Scissors"
    Return cpuChoice */ 

let cpuChoice = "none"

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 100);
    console.log(ranNum);
    if (ranNum <= 33) {
        cpuChoice = "Rock"
    } 
    else if (ranNum >= 34 && ranNum <= 66) {
        cpuChoice = "Paper"
    }
    else if (ranNum >= 67 && ranNum <=100) {
        cpuChoice = "Scissors"
    }

    return cpuChoice 
}

console.log("Computer choice is", getComputerChoice());

/* function getHumanChoice
    A prompt opens that asks the player if they choose rock, paper or scissors. 
    If the player types in something wrong, send an error and restart loop.
    If the player types in rock, paper or scissors, set answer in lowercase
    Store player answer in variable humanChoice
    Return humanChoice */ 


function getHumanChoice() {
    let humanChoice;
    let choiceMade = false;

    while (!choiceMade) {

        humanChoice = prompt("Rock, Paper or Scissors?");

    if (humanChoice.toLowerCase() === "rock") {
        humanChoice = "Rock";
        choiceMade = true;
    }
    else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = "Paper";
        choiceMade = true;
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = "Scissors";
        choiceMade = true;
    }
    else {
        alert("Sorry, please enter only Rock, Paper or Scissors")
    }
    
}


    return humanChoice;
}

console.log("Human choice is", getHumanChoice());

/* PLAYER SCORE VARIABLES */

let humanScore = 0;
let cpuScore = 0;

/* function playRound(humanChoice, cpuChoice)
    If humanChoice and cpuChoice are the same, then no points are added for either
    If humanChoice is rock and cpuChoice is scissors, humanScore +1
    If humanChoice is paper and cpuChoice is rock, humanScore +1
    If humanChoice is scissors and cpuChoice is paper, humanScore +1
    If humanchoice is rock and cpuChoice is paper, cpuChoice +1
    If humanChoice is paper and cpuChoice is scissors, cpuChoice +1
    If humanchoice is scissors and cpuchoice is rock, cpuchoice +1




const humanSelection = getHumanChoice();
const cpuSelection = getComputerChoice();

playRound(humanSelection, cpuSelection);

*/





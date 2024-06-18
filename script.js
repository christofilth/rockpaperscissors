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
    /* console.log(ranNum); */
    if (ranNum <= 33) {
        cpuChoice = "Rock"
    } 
    else if (ranNum >= 34 && ranNum <= 66) {
        cpuChoice = "Paper"
    }
    else if (ranNum >= 67 && ranNum <= 100) {
        cpuChoice = "Scissors"
    }

    return cpuChoice 
}

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

/* function playGame() 
    Insert playRound, score variables and selection variables
    Declare variable gameRound = 0
    While gameRound is less than 5, game calls playRound
    Everytime playRound is complete, it adds +1 to gameRound
    When gameRound reaches 5, the game is finished and presents the score
    to the player with one message if you win, one message if you lose
    and one message if you draw.
*/

let humanScore = 0;
let cpuScore = 0;

function playGame() {

    function playRound(humanChoice, cpuChoice) {

        if (humanChoice === "Rock" && cpuChoice === "Scissors") {
            humanScore++;
            alert("Nice! Rock beats Scissors!")
        }
        else if (humanChoice === "Paper" && cpuChoice === "Rock") {
            humanScore++;
            alert("Wahey! Paper beats Rock!")
        }
        else if (humanChoice === "Scissors" && cpuChoice === "Paper") {
            humanScore++;
            alert("Great! Scissors beats Paper!")
        }
        else if (humanChoice === "Rock" && cpuChoice === "Paper") {
            cpuScore++;
            alert("Boo! Rock loses to Paper!")
        }
        else if (humanChoice === "Paper" && cpuChoice === "Scissors") {
            cpuScore++;
            alert("Oh no! Paper loses to Scissors!")
        }
        else if (humanChoice === "Scissors" && cpuChoice === "Rock") {
            cpuScore++;
            alert("Yikes! Scissors loses to Rock!")
        }
        else {
            humanScore +0
            cpuScore +0
            alert(`${humanChoice} vs ${cpuChoice}. It's a draw!`)
        }
    }
    
    
    let gameRound = 0;

    while (gameRound <5) {
        const humanSelection = getHumanChoice();
        const cpuSelection = getComputerChoice();

        console.log(humanSelection, cpuSelection);

        playRound(humanSelection, cpuSelection);
        gameRound++;
        
        if (gameRound === 5) {
            if (humanScore > cpuScore) {
                alert(`Congratulations! You win ${humanScore} - ${cpuScore}`);
                alert("Thanks for playing!");
            }
            else if (humanScore < cpuScore) {
                alert(`Oh no! You lose ${humanScore} - ${cpuScore}`);
                alert("Thanks for playing!");
            }
            else {
                alert(`Huh!? You Draw ${humanScore} - ${cpuScore}`);
                alert("Thanks for playing!");
            }
        }
    }
}



playGame();
console.log(humanScore, cpuScore)
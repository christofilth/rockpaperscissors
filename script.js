let cpuChoice = "none"
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 100);
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

let humanScore = 0;
let cpuScore = 0;
function playRound(humanChoice, cpuChoice) {

    if (humanChoice === "Rock" && cpuChoice === "Scissors") {
        humanScore++;
    }
    else if (humanChoice === "Paper" && cpuChoice === "Rock") {
        humanScore++;
    }
    else if (humanChoice === "Scissors" && cpuChoice === "Paper") {
        humanScore++;
    }
    else if (humanChoice === "Rock" && cpuChoice === "Paper") {
        cpuScore++;
    }
    else if (humanChoice === "Paper" && cpuChoice === "Scissors") {
        cpuScore++;
    }
    else if (humanChoice === "Scissors" && cpuChoice === "Rock") {
        cpuScore++;
    }
    else {
        humanScore +0
        cpuScore +0
    }
}

const container = document.querySelector("#container");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const scoreDisplay = document.createElement("div");

rock.classList.add("Rock", "btn")
paper.classList.add("Paper", "btn")
scissors.classList.add("Scissors", "btn")
scoreDisplay.classList.add("scoreDisplay")

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
scoreDisplay.textContent = "0 - 0";

let humanChoice;
let gameRound = 0;

function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    let winner = humanScore > cpuScore ? "You win!" : (cpuScore > humanScore ? "CPU wins!" : "It's a tie!");
    scoreDisplay.textContent = `${humanScore} - ${cpuScore} | ${winner}`;
}

function makeChoice(choice){
    humanChoice = choice;
    playRound(humanChoice, getComputerChoice());
    gameRound++;
    console.log(humanChoice, cpuChoice);
    scoreDisplay.textContent = `${humanChoice} vs ${cpuChoice}, ${humanScore} - ${cpuScore}`;
    if (gameRound === 5) {
        endGame();
    }
}

rock.addEventListener("click", () => makeChoice("Rock"));
paper.addEventListener("click", () => makeChoice("Paper"));
scissors.addEventListener("click", () => makeChoice("Scissors"));
    
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(scoreDisplay);
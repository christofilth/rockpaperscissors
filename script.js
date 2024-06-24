

/*

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

*/




/*

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

*/

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

rock.classList.add("Rock")
paper.classList.add("Paper")
scissors.classList.add("Scissors")
scoreDisplay.classList.add("scoreDisplay")

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
scoreDisplay.textContent = "0 - 0";

let humanChoice;
const cpuSelection = getComputerChoice();

rock.addEventListener("click", () => {
    humanChoice = "Rock";
    playRound(humanChoice, cpuSelection);
    console.log(humanChoice, cpuChoice);
    scoreDisplay.textContent = `${humanScore} - ${cpuScore}`
});
paper.addEventListener("click", () => {
    humanChoice = "Paper";
    playRound(humanChoice, cpuSelection);
    console.log(humanChoice, cpuChoice);
    scoreDisplay.textContent = `${humanScore} - ${cpuScore}`
});
scissors.addEventListener("click", () => {
    humanChoice = "Scissors";
    playRound(humanChoice, cpuSelection);
    console.log(humanChoice, cpuChoice);
    scoreDisplay.textContent = `${humanScore} - ${cpuScore}`
});





container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(scoreDisplay);






